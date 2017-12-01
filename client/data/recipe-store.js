// @ts-check

import ListenerSupport from './listener-support';
import { endpoint as API_ENDPOINT } from '../utils/api';

/**
 * A class for keeping track of recipe state
 * @public
 */
export default class RecipeStore {
  /**
   * Create a new instance
   * There's usually only one of these per app
   * @public
   * @return {RecipeStore}
   */
  constructor() {
    // restore items to get their initial state
    this._recipes = [];
    this._restoreRecipes().then((restoredRecipes) => {
      console.log('000000000000000000000')
      this._recipes = restoredRecipes;
      this._onItemsUpdated();
    });

    // restore categories to get their initial state
    this._categories = [];
    this._restoreCategories().then((restoredCategories) => {
      this._categories = restoredCategories;
      this._onCategoriesUpdated();
    });

    // Set up listener support for recipes and categories (one for each)
    this.categoryListeners = new ListenerSupport();
    this.itemListeners = new ListenerSupport();
  }

  /**
   * Get the list of categories
   * This is a read only array
   * 
   * @public
   * @return {ReadonlyArray<String>}
   */
  get categories() {
    return Object.freeze(this._categories);
  }

  /**
   * Get the list of recipes
   * This is a read only array
   * 
   * @public
   * @return {ReadonlyArray<Object>}
   */
  get items() {
    return Object.freeze(this._recipes);
  }

  /**
   * Get a filtered list of items for a particular category
   * This does not result in a new request being sent out, it only
   * filters results already available locally
   * 
   * @public
   * @param {String} categoryName name of category to filter by
   * @param {Number} limit maximum number of items to return
   * @return {Promise<Array<Object>>} filtered list of items
   */
  itemsForCategory(categoryName, limit) {
    return Promise.resolve(
      this.items
        .filter((item) => item.category.toLowerCase() === categoryName.toLowerCase())
        .slice(0, limit)
    );
  }

  /**
   * Given an array of recipes, add new ones we haven't seen yet to the _recipes array
   * and update existing ones to reflect any changes in properties
   *  
   * @private
   * @param {Array<Object>} data array of recipes to push into the store
   * @return {void}
   */
  _updateRecipes(data) {
    let recipeHash = {};
    this._recipes.forEach((i) => {
      recipeHash[i.id] = i;
    });
    data.forEach((recipeData) => recipeHash[recipeData.id] = recipeData);
    this._recipes = Object.keys(recipeHash).map((k) => recipeHash[k]);
  }

  /**
   * Retrieve fresh data for recipes pertaining to a particular category
   * They will get pushed into the store, and any appropriate listeners will fire
   * as a result of this process.
   * 
   * @public
   * @param {String} categoryName name of category to filter by
   * @param {Number} limit maximum number of items to return
   * @return {Promise<ReadonlyArray<Object>>}
   */
  updateItemsForCategory(categoryName, limit = 10) {
    console.log('11111111111111111111')
    return fetch(`${API_ENDPOINT}api/recipe/items?category=${categoryName}&limit=${limit}`)
      .then((resp) => resp.json())
      .then((jsonData) => {
        this._updateRecipes(jsonData.data);
        this._onItemsUpdated();
        return this.items;
      })
      .catch((err) => {
        console.error('Error fetching recipes', err);
        return this.items;
      });
  }

  /**
   * Retrieve fresh data for recipe categories.
   * They will get pushed into the store, and any appropriate listeners will
   * fire as a result of this process.
   * 
   * @public
   * @return {Promise<ReadonlyArray<String>>}
   */
  updateCategories() {
    console.log('777777777777')
    return fetch(`${API_ENDPOINT}api/recipe/categories`)
      .then((resp) => resp.json())
      .then((jsonData) => {
        let categories = jsonData.data.map((item) => item.category);
        this._categories = categories;
        this._onCategoriesUpdated();
        return this.categories;
      })
      .catch((err) => {
        console.error('Error updating categories', err);
        return this.categories;
      });
  }
  
  /**
   * Get the "initial" state for recipes
   * For we'll start with an empty array, but we'll enhance this later!
   * 
   * @private
   * @return {Promise}
   */
  _restoreRecipes() {
    return Promise.resolve([]);
  }

  /**
   * Get the "initial" state for recipe categories
   * For we'll start with an empty array, but we'll enhance this later!
   * 
   * @private
   * @return {Promise}
   */
  _restoreCategories() {
    return Promise.resolve([]);
  }
  
  /**
   * Notify any registered listeners that recipes have changed
   * 
   * @private
   * @return {void}
   */
  _onItemsUpdated() {
    this.itemListeners.fire(this.items);
  }

  /**
   * Notify any registered listeners that recipe categories have changed
   * 
   * @private
   * @return {void}
   */
  _onCategoriesUpdated() {
    this.categoryListeners.fire(this.categories);
  }
}
