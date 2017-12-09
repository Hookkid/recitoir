import React, { Component } from 'react'
import './index.scss'
import {
  Link
} from 'react-router-dom'
import { endpoint as API_ENDPOINT } from '../../utils/api';

class MainView extends Component{
  constructor(props) {
    super(props);
    this.state = { recipes: this.props.recipeStore._recipes };
  }
  componentDidMount() {
    this.props.recipeStore.itemListeners.register((newItems) => {
      this.setState({recipes: newItems});
    })
    this.props.recipeStore.updateRecipes();
  }

  render() {
    const CategoryList = this.state.recipes.map((recipe) => (
      <div key={Date.now()}>
        <h2>{recipe.category}</h2>
        <div className='card cardTemplate weather-forecast'>
          <h3>{recipe.name}</h3>
          <p>{recipe.description}</p>
          <img src={`${API_ENDPOINT}${recipe.imageUrl}`} />
        </div>
      </div>
    ));
    return (
      <main className='main'>
        {CategoryList}
      </main>

    )
  }
}

export default MainView
