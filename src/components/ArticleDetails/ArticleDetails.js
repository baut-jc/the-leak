import React, {useState, useEffect} from 'react'
import { fetchData } from '../../api';
import { useParams } from 'react-router-dom';
import './ArticleDetails.css'

export default function ArticleDetails({match}) {
  const [articles, setArticles] = useState([])
  const [selectedArticle, setSelectedArticle] = useState({})
  const { id } = useParams()

  const fetchArticles = async () => {
    try {
      const data = await fetchData()
      console.log('newbloops', data.results)
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

  useEffect(() => {
    if (articles.length) {
    const article = articles.find(article => article.uri === `nyt://article/${id}`);
    setSelectedArticle(article);
    }
    }, [id, articles]);

  
  return (
    <div className='article-details'>
      <h3>{selectedArticle.title}</h3>
        {selectedArticle.multimedia && selectedArticle.multimedia.length > 0 && (
          <img src={selectedArticle.multimedia[1].url} alt='here' />
        )}
      <h6>{selectedArticle.byline}</h6>
      <p>{selectedArticle.created_date}</p>
      <p>{selectedArticle.abstract}</p>
      <a href={selectedArticle.short_url} target='_blank' rel='noreferrer'>Read more</a>
    </div>
  )
}
