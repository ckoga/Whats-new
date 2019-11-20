import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      technology,
      science,
      health,
      displayedNews: local,
      categoryName: local
    }
  }

  pickCategory = (category) => {
    this.setState({displayedNews: this.state[category]})

    this.setState({categoryName: this.state[category]})
  }

  render () {
    return (
      <main className="app">
        <header className="header">
          <h1>What's New?</h1>
        </header>
        <aside>
          <Menu pickCategory={this.pickCategory}/>
        </aside>
        <NewsContainer articles={this.state.displayedNews}/>
      </main>
    );
  }
}

export default App;
