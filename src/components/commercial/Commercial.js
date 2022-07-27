import React from 'react'
import { Link } from 'react-router-dom'
import image from "../assets/images/office3.jpg"
import Cart from '../Cart'

function Commercial() {
  let link =<Link to="/commercial/description" className='btn btn-sm btn-outline-secondary'>Details</Link>
  return (
    <>
      <span className='page-headings'>Commercial Spaces</span>
        <div className='popular-property row'>
          <Cart link={link} image={image}/>
          <Cart link={link} image={image}/>
          <Cart link={link} image={image}/>
          <Cart link={link} image={image}/>
          <Cart link={link} image={image}/>
          <Cart link={link} image={image}/>
        </div>
    </>
  )
}

export default Commercial
