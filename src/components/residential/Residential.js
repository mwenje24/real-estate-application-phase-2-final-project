import React from 'react'
import { Link } from 'react-router-dom'
import image from "../assets/images/residential.jpg"
import Cart from '../Cart'

function Residential() {
  let link = <Link to="/residential/description" className='btn btn-sm btn-outline-secondary'>Details</Link>
  return (
    <>
      <span className='page-headings'>Residential Spaces</span>
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

export default Residential
