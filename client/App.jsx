import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './sass/content-wrapper.scss'
import Container from 'muicss/lib/react/container'
import Home from './routes/home/'
import Header from './components/Header/'
import MainView from './components/MainView/'
import RecipeStore from './data/recipe-store'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipeStore = new RecipeStore();

    this.homeRoute = (props) => (
      <MainView
        recipeStore={this.recipeStore}
        {...props} />
    );
  }

  render() {
    let wrapperClassNames = ['frontend-recitoir']
    return (
      <Router>
        <div className={wrapperClassNames.join(' ')}>
          <Header />
          <Container fluid={true}>
            <Route exact foo='bar' path="/" component={this.homeRoute} />
            <Route exact path="/category/:id" component={this.categoryRoute} />
            <Route exact path="/order/:id" component={this.orderRoute} />
          </Container>
          <div className="dialog-container">
            Dialogue
          </div>
        </div>
      </Router>
    );
  }
}

export default App;