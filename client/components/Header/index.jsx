import React, { Component } from 'react'
import './index.scss'
import {
  Link
} from 'react-router-dom'

class Header extends Component{
  render() {
    return (
      <header className="header">
        <h1 className="header__title">Recitoir</h1>
        <button id="butRefresh" className="headerButton"></button>
        <button id="butAdd" className="headerButton"></button>
      </header>
    )
  }
}

export default Header
