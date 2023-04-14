import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import HomeIcon from '../../assets/theLeak.png'

export const Header = () => {

  const [states, setStates] = useState('')
    //filter through ALL STATES in US
    //if geo-facet.length < 0; show all articles (conditional rendering)
    //extension --> not all state will be written fully: some are abbreviated/initialled
  //OPT B: filter by date
    // fresh leak (article.created date)
    // updated leak (article.updated_date) to Date.now

  return (
    <div className="header">
      <Link to="/">
        <img src={HomeIcon} className='home-icon'></img>
      </Link>
      <div className='sort-by-state'>
      {/* <select>
        {states.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select> */}
      </div>
    </div>
  )
}
