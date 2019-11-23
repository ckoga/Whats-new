import React, { Component } from 'react';
import local from '../../data/local';
// import entertainment from '../../data/entertainment';
// import health from '../../data/health';
// import science from '../../data/science';
// import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: null,
      displayedNews: local,
    }
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(response => response.json())
      .then(data => {
        this.setState({ news: data, displayedNews: local });
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  pickCategory = (category) => {
    this.setState( {displayedNews: this.state.news[category]} )
  }

  searchNews = (event) => {
    event.preventDefault();
    let inputValue = event.target.closest('form').children[0].value
    const filteredNews = this.state.displayedNews.filter(news => {
      let headline = news.headline.toLowerCase();
      let description = news.description.toLowerCase();
      
      if (headline.includes(inputValue) || description.includes(inputValue)) {
        return true
      } else {
        return false
      }
    })
    this.setState({ displayedNews: filteredNews })
  }

  render () {
    return (
      <main className="app">
        <header className="header">
          <h1>What's <span className="new">New?</span></h1>
          <SearchForm searchNews={this.searchNews}/>
        </header>
        <section>
          <aside>
            <Menu pickCategory={this.pickCategory}/>
          </aside>
          <div className="article-container">
            <NewsContainer articles={this.state.displayedNews}/>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
