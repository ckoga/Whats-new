import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

// NEWSCONTAINER COMPONENT CODE GOES HERE
const NewsContainer = ({articles}) => {
  return (
    articles.map((article, i) => <NewsArticle key={`article ${i}`} news={article}/>)
  );
}


export default NewsContainer;