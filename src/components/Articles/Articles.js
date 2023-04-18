import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api'
import { Link } from 'react-router-dom';
import './Articles.css'
// import { ArticleDetails }  from '../ArticleDetails/ArticleDetails';

export const Articles = () => {
  
  const [articles, setArticles] = useState([])
  const [sortByDate, setSortByDate] = useState([])
  
  const fetchArticles = async () => {
    try {
      const data = await fetchData()
      console.log('news', data.results)
      if (sortByDate === 'new') {
        data.result.sort((a,b) => new Date(b.created_date) - new Date(a.created_date))
      } else if (sortByDate === 'updated') {
        data.results.sort((a,b) => new Date(b.updated_date) - new Date(a.updated_date))
      }
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
              <div className='gradient'>
                <h3>{article.title}</h3>
                <p>{sortByDate === 'new' ? `Published on ${article.created_date}` : `Last updated on ${article.updated_date}`}</p>
              </div>
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