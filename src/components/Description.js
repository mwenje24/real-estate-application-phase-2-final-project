import React from 'react'

function Description({image1, image2, image3, ownername, transaction, charges, address, size, description}) {
    function handleOpenForm(){
        document.getElementById("bid-form").style.display="block";
      }
      function HandleCloseForm(){
        document.getElementById("bid-form").style.display="none";
      }
    
      return (
        <div className='mt-3'>
          <div className="form-display" id="bid-form">
              <form method="" id="contactMessage">
                  <div className="form-content">
                  <span className='page-headings'>Fill in your contact details</span>
                      <button className="btn btn-sm button" onClick={HandleCloseForm}>x</button>
                      <div className="form-details">
                          <label>Full Name</label><br/>
                          <input id="username" type="text" name="name" placeholder="Enter Your Full Names"/>
                      </div>
                      <div className="form-details">
                          <label>Email</label><br />
                          <input id="email"  name="email" type="text" placeholder="Enter Your Email"/>
                      </div>
                      <div className="form-details">
                          <label>Phone Number</label><br/>
                          <input id="text"  name="phone" type="password" placeholder="Enter Your Phone Number"/>
                      </div>
                      <div className="form-details">
                          <label>Offer</label><br/>
                          <input id="text"  name="offer" type="password" placeholder="Enter Your Offer"/>
                      </div>
                      <div className='bid'><input className='btn btn-sm btn-dark' type="submit" value="Bid"/></div>
                  </div>
              </form>
          </div>
          <span className='page-headings'>Space Description<button onClick={handleOpenForm} className='btn btn-sm btn-outline-secondary mb-2'>Place a Bid</button></span>
          <div className='main-image'>
            <img src={image1} className="card-img-top" alt="..."/>
          </div>
          <div className='more-images mt-5 mb-4'>
            <img src={image1} className="card-img-top btn" alt="..."/>
            <img src={image2} className="card-img-top btn" alt="..."/>
            <img src={image3} className="card-img-top btn" alt="..."/>
          </div>
          <span className='page-headings center'>More Details</span>
          <div className='space-description mt-3 mb-5'>
            <div className='row'>
              <div className='col-3 border-bottom'>Seller</div>
              <div className='col-9 border-bottom'>{ownername}</div>
              <div className='col-3 border-bottom'>Space Option</div>
              <div className='col-9 border-bottom'>{transaction}</div>
              <div className='col-3 border-bottom'>Charges</div>
              <div className='col-9 border-bottom'>{charges}</div>
              <div className='col-3 border-bottom'>Address</div>
              <div className='col-9 border-bottom'>{address}</div>
              <div className='col-3 border-bottom'>Size</div>
              <div className='col-9 border-bottom'>{size}</div>
              <div className='col-3'>Description</div>
              <div className='col-9'>{description}</div>
            </div>
          </div>
        </div>
      )
}

export default Description
