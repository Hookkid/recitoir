import React, { Component } from 'react'
import './index.scss'
import {
  Link
} from 'react-router-dom'

class MainView extends Component{
  constructor(props) {
    super(props);
    this.state = { categories: this.props.recipeStore.categories };
  }
  componentDidMount() {
    this.props.recipeStore.categoryListeners.register((newCategories) => {
      this.setState({categories: newCategories});
    })
    this.props.recipeStore.updateCategories();
  }

  render() {
    return (
      <main className="main">
        <div className="card cardTemplate weather-forecast">
          <h2>Beef Stew</h2>
          <p>This versatile and veggie-full meal is as good as it is nutritious!</p>
          <img src="https://images.media-allrecipes.com/images/51805.jpg?width=170&height=96" />
          {console.log('store', this.props.recipeStore)}
        </div>

      </main>

    )
  }
}

export default MainView
