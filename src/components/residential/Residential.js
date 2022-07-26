import React from 'react'
import { Link } from 'react-router-dom'
import image from "../assets/images/residential.jpg"

function Residential() {
  return (
    <>
      <span className='page-headings'>Residential Spaces</span>
        <div className='popular-property row'>
          <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges<Link to="/residential/description" className='btn btn-sm btn-outline-secondary'>Details</Link></span></h5>
              <h6 className="card-text">............Address</h6>
              <h6 className="card-text">............Measurements <span>Bids</span></h6>
            </div>
          </div>
          <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges<Link to="/residential/description" className='btn btn-sm btn-outline-secondary'>Details</Link></span></h5>
              <h6 className="card-text">............Address</h6>
              <h6 className="card-text">............Measurements <span>Bids</span></h6>
            </div>
          </div>
          <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges<Link to="/residential/description" className='btn btn-sm btn-outline-secondary'>Details</Link></span></h5>
              <h6 className="card-text">............Address</h6>
              <h6 className="card-text">............Measurements <span>Bids</span></h6>
            </div>
          </div>
          <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges<Link to="/residential/description" className='btn btn-sm btn-outline-secondary'>Details</Link></span></h5>
              <h6 className="card-text">............Address</h6>
              <h6 className="card-text">............Measurements <span>Bids</span></h6>
            </div>
          </div>
          <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges<Link to="/residential/description" className='btn btn-sm btn-outline-secondary'>Details</Link></span></h5>
              <h6 className="card-text">............Address</h6>
              <h6 className="card-text">............Measurements <span>Bids</span></h6>
            </div>
          </div>
          <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges<Link to="/residential/description" className='btn btn-sm btn-outline-secondary'>Details</Link></span></h5>
              <h6 className="card-text">............Address</h6>
              <h6 className="card-text">............Measurements <span>Bids</span></h6>
            </div>
          </div>
        </div>
    </>
  )
}

export default Residential
