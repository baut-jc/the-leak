import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import HomeIcon from '../../assets/theLeak.png'

export const Header = () => {

  const [states, setStates] = useState('')

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
