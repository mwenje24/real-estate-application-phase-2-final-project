import React from 'react'
import { Link } from 'react-router-dom'
import image from "../assets/images/landing.jpg"
import Cart from '../Cart'


function Home() {

  let link = <Link to="/home/description" className='btn btn-sm btn-outline-secondary'>Details</Link>
  return (
    <>
      <div className='landing-page'>
        <div className='welcome-image mb-5'>
          <div className='welcome-text'>
            <h1>Explore</h1>
            <span>Our available over 1000+ spaces for rent and sell</span>
          </div>
        </div>
        <span className='page-headings'>Popular Properties</span>
        <div className='popular-property row'>
          <Cart link={link} image={image}/>
          <Cart link={link} image={image}/>
          <Cart link={link} image={image}/>
          <Cart link={link} image={image}/>
          <Cart link={link} image={image}/>
          <Cart link={link} image={image}/>
        </div>
      </div>
    </>
  )
}

export default Home
