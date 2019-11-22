import React from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE
const SearchForm = (props) => {
  return (
    <form>
      <input className="input" placeholder="Search News"></input>
      <button className="search-button" onClick={(event) => props.searchNews(event)} type="button">Search</button>
    </form>
  )
}

export default SearchForm;