import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import HomeIcon from '../../assets/theLeak.png'

export const Header = () => {

    //filter through ALL STATES in US
    //if geo-facet.length < 0; show all articles (conditional rendering)
    //extension --> not all state will be written fully: some are abbreviated/initialled
  //OPT B: filter by date
    // fresh leak (article.created date)
    // updated leak (article.updated_date) to Date.now
  const [sortByDate, setSortByDate] = useState('')

  const handleChange = (event) => {
    setSortByDate(event.target.value)
  }


  return (
    <div className="header">
      <Link to="/">
        <img src={HomeIcon} className='home-icon'/><br/>
      </Link>
        {/* <h3>NYT nation's news leak.</h3> */}
      <div className='sort-by-date'>
        <label htmlFor='sort-dropdown'>Sort by: </label>
        <select id='sort-dropdown' value={sortByDate} onChange={handleChange}>
          <option value=''>Select an option</option>
          <option value='new'>Today's NEW Leak</option>
          <option value='updated'>Newly Updated Leak</option>
        </select>
      </div>
    </div>
  )
}
