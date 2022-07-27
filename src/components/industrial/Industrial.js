import React from 'react'
import { Link } from 'react-router-dom'
import image from "../assets/images/industry4.jpg"
import Cart from '../Cart'

function Industrial() {
  let link = <Link to="/industrial/description" className='btn btn-sm btn-outline-secondary'>Details</Link>
  return (
    <>
      <span className='page-headings'>Industrial Spaces</span>
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

export default Industrial
