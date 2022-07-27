import React from 'react'

function Cart({image, link}) {
  return (
    <>
      <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span>Charges{link}</span></h5>
              <h6 className="card-text">............Address</h6>
              <h6 className="card-text">............Measurements <span>Bids</span></h6>
            </div>
        </div>
    </>
  )
}

export default Cart
