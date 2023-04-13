import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api'
import './Articles.css'
import { ArticleDetails } from '../ArticleDetails/ArticleDetails';

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

    return (
      <>
        <ArticleDetails />
      </>
    )
  }