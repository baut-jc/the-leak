import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import HomeIcon from '../../assets/theLeak.png'

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={HomeIcon} className='home-icon'></img>
      </Link>
    </div>
  )
}
