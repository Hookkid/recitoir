import './styles.scss';

import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { categories: 0 }
  }
  render() {
    return (
      <div className='Home'>
        Yo yo yo
      </div>
    )
  }
}

export default Home