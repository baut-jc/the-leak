import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api'
import { Link } from 'react-router-dom';
import './Articles.css'
import { ArticleDetails }  from '../ArticleDetails/ArticleDetails';

export const Articles = () => {
  
  const [articles, setArticles] = useState([])
  
  const fetchArticles = async () => {
    try {
      const data = await fetchData()
      console.log('news', data.results)
      setArticles(data.results)
      // setNetworkError(false)
    } catch (error) {
      console.error(error)
      // setNetworkError(true)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  const newsArticles = articles.map((article) => {
    return (
      <Link to={`/${article.uri}`} key={article.uri}>
        <div 
          className='article-post'
          id={article.uri}
          style={{backgroundImage: `url(${article.multimedia[0].url})`}}>
            <p>{article.title}</p>
        </div>
      </Link>
    )
  })

  return (
    <div className='articles'>
      {newsArticles}
    </div>
  )
  }