import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = (article) => {
  return (
    <article className='article' >
      <img src={article.news.img}/>
      <h2>{article.news.headline}</h2>
      <p>{article.news.description}</p>
      <a href={article.news.url}>Link to Article</a>
    </article>
  );
};

export default NewsArticle;