import React from 'react'
// import img from '../../assets/images';

function Cart({image, link, transaction, address, size, charges}) {
  return (
    <>
      <div className='card popular-card col-4'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{transaction} <span>$ {charges}{link}</span></h5>
              <h6 className="card-text">{address}</h6>
              <h6 className="card-text">{size}<span>Bids</span></h6>
            </div>
        </div>
    </>
  )
}

export default Cart
