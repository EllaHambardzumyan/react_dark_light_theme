import React from 'react'
import './HomePage.css'

export default function HomePage({dark}) {
  const isDarkContainer = {background: dark ? 'white' :'black'}
  const isDarkText = {color: dark ? 'black' : 'white'}

  return (
    <section className = 'home_page_conteiner' style={isDarkContainer}>
      <div className = 'home_page_join'>
      <button>Join Meet Up</button>
      <p>We are coming to Singapore. Learn more...</p>
      </div>
      <div className='home_page_title'>
        <h1 style={isDarkText}>Serve Your<br/>Website Fast</h1>
      </div>
      <form class = 'home_page_form'>
        <input type='email'/>
        <button>Get Started</button>
      </form>
      <div className='home_page_credit'>
        <p style={isDarkText}>no credit card required</p>
      </div>
    </section>
  )
}
