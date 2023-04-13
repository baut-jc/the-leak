import React from 'react'

export const ArticleDetails = ({ id, title, date, details, writer, abstract}) => {
  return (
    <div className='article-details'>
      <h3>{title}</h3>
      <h6>{writer}</h6>
      <h6>{date}</h6>
      <p>{abstract}</p>
      <a href={details}>Read more</a>
    </div>
  )
}
