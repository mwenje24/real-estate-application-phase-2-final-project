import React, {useState} from 'react'
import { useParams } from "react-router-dom";

function Description({image, ownername, transaction, charges, address, size, description, status}) {
    function handleOpenForm(){
        document.getElementById("bid-form").style.display="block";
      }
      function HandleCloseForm(e){
        document.getElementById("bid-form").style.display="none"
        e.preventDefault();
      }
      function HandleClsForm(e){
        document.getElementById("bid-form").style.display="none"
      }

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [offer, setOffer] = useState('');

      let {propertyId} = useParams()

      const database = "https://api.json-generator.com/templates/v1Sx1bk2enX5/data?access_token=uiaiouosskswmrymumid2f0xq6fpq3fxvlz1owwg"

      function handleSubmit(event) {
        event.preventDefault();
        const formBid = {
          name: name,
          email:email,
          phone:phone,
          propertyid: parseInt(propertyId),
          offer:offer
        };
        // console.log(formBid)
        // fetch(`http://localhost:4000/property/${propertyId}/bids/buyer`, {
          fetch(`http://localhost:4000/bids`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formBid),
        })
        .then(() => setName(''))
        .then(() => setEmail(''))
        .then(() => setPhone(''))
        .then(() => setOffer(''))

        HandleClsForm()
        
      }
    
      return (
        <div className='mt-3'>
          <div className="form-display" id="bid-form">
              <form id="contactMessage" onSubmit={handleSubmit}>
                  <div className="form-content">
                  <span className='page-headings'>Fill in your contact details</span>
                      <button className="btn btn-sm button" onClick={HandleCloseForm}>x</button>
                      <div className="form-details">
                          <label>Full Name</label><br/>
                          <input id="username" 
                            type="text" name="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Your Full Names" required/>
                      </div>
                      <div className="form-details">
                          <label>Email</label><br />
                          <input id="email"  
                            name="email" 
                            type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Your Email" required/>
                      </div>
                      <div className="form-details">
                          <label>Phone Number</label><br/>
                          <input id="text" 
                            name="phone" 
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} 
                            placeholder="Enter Your Phone Number" required/>
                      </div>
                      <div className="form-details">
                          <label>Offer</label><br/>
                          <input id="text" 
                            name="offer" 
                            type="text" 
                            value={offer}
                            onChange={(e) => setOffer(e.target.value)}
                            placeholder="Enter Your Offer" required/>
                      </div>
                      <div className='bid'><input className='btn btn-sm btn-dark' type="submit" value="Bid"/></div>
                  </div>
              </form>
          </div>
          <span className='page-headings'>Space Description{status == 'available' ? <button onClick={handleOpenForm} className='btn btn-sm btn-outline-secondary mb-2'>Place a Bid</button> : ''}</span>
          <div className='main-image mt-5'>
            <img src={image} className="card-img-top" alt="..."/>
          </div>
          {/* <div className='more-images mt-5 mb-4'>
            <img src={image1} className="card-img-top btn" alt="..."/>
            <img src={image2} className="card-img-top btn" alt="..."/>
            <img src={image3} className="card-img-top btn" alt="..."/>
          </div> */}
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
