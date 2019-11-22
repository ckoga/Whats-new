import React, { Component } from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE
class Menu extends Component {
  constructor() {
    super()
  }

  selectCategory = (event) => {
    event.preventDefault();
    this.props.pickCategory(event.target.dataset.category)
  }

  render() {
    return (
    <nav className="nav-bar">
      <button
        className="nav-button"
        data-category="local"
        onClick={event => this.selectCategory(event)}>Local
      </button>
      <button
        className="nav-button"
        data-category="technology"
        onClick={event => this.selectCategory(event)}>Technology
      </button>
      <button
        className="nav-button"
        data-category="entertainment"
        onClick={event => this.selectCategory(event)}>Entertainment
      </button>
      <button
        className="nav-button"
        data-category="science"
        onClick={event => this.selectCategory(event)}>Science
      </button>
      <button
        className="nav-button"
        data-category="health"
        onClick={event => this.selectCategory(event)}>Health
      </button>
    </nav>
    )
  }
}


export default Menu;