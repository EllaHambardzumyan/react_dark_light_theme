import React from 'react'
import './Header.css'

export default function Header({onChangeTheme,dark}){

  const isDarkHeader = {color: dark ? 'black'  :'white'}
  const isDarkButton = {background: dark ? 'black' : 'white' ,color: dark ? 'white': 'black'}

  return (
    <header className='header' style={isDarkHeader}>
      <nav className='nav'>
      <a href='#' className='logo' style={isDarkHeader}>Hook</a>
      <ul className='nav_menu'>
        <li className='nav_list'><a href='#' className='nav_link' style={isDarkHeader}>Home</a></li>
        <li className='nav_list'><a href='#' className='nav_link' style={isDarkHeader}>Features</a></li>
        <li className='nav_list'><a href='#' className='nav_link' style={isDarkHeader}>Pricing</a></li>
        <li className='nav_list'><a href='#' className='nav_link' style={isDarkHeader}>Blog</a></li>
        <li className='nav_list'><button className='nav_button' onClick={onChangeTheme} style = {isDarkButton}>Register</button></li>
      </ul>
      </nav>
    </header>
  )
    
}