import React from 'react'
import image from "../../images/landing.jpg"

function Home() {
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
          <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges<button className='btn btn-sm btn-outline-secondary disabled'>status</button></span></h5>
              <p className="card-text">............Address</p>
              <p className="card-text">............Measurements <span>Bids</span></p>
            </div>
          </div>
          <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges<button className='btn btn-sm btn-outline-secondary disabled'>status</button></span></h5>
              <p className="card-text">............Address</p>
              <p className="card-text">............Measurements <span>Bids</span></p>
            </div>
          </div>
          <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges<button className='btn btn-sm btn-outline-secondary disabled'>status</button></span></h5>
              <p className="card-text">............Address</p>
              <p className="card-text">............Measurements <span>Bids</span></p>
            </div>
          </div>
          <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges<button className='btn btn-sm btn-outline-secondary disabled'>status</button></span></h5>
              <p className="card-text">............Address</p>
              <p className="card-text">............Measurements <span>Bids</span></p>
            </div>
          </div>
          <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges<button className='btn btn-sm btn-outline-secondary disabled'>status</button></span></h5>
              <p className="card-text">............Address</p>
              <p className="card-text">............Measurements <span>Bids</span></p>
            </div>
          </div>
          <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges<button className='btn btn-sm btn-outline-secondary disabled'>status</button></span></h5>
              <p className="card-text">............Address</p>
              <p className="card-text">............Measurements <span>Bids</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
