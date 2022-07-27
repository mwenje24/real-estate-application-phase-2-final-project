import React from 'react'
import { Link } from 'react-router-dom'
import image from "../assets/images/land2.jpeg"
import Cart from '../Cart'

function Land() {
  let link = <Link to="/land/description" className='btn btn-sm btn-outline-secondary'>Details</Link>
  return (
    <>
      <span className='page-headings'>land Spaces</span>
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

export default Land
