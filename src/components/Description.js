import React, {useState} from 'react'
import { useParams } from "react-router-dom";

function Description({image, ownername, transaction, charges, address, size, description, status}) {
    function handleOpenForm(){
        document.getElementById("bid-form").style.display="block";
      }
      function HandleCloseForm(){
        document.getElementById("bid-form").style.display="none";
      }

      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        offer: "",
        propertyid: "",
      });

      let {propertyId} = useParams()

      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
        const formBid = {
          name: formData.name,
          email:formData.email,
          phone:formData.phone,
          propertyid: parseInt(propertyId),
          offer:formData.offer
        };
        // fetch(`http://localhost:4000/property/${propertyId}/bids/buyer`, {
          fetch(`http://localhost:4000/bids`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formBid),
        })
        // formData.name = ''
        // formData.email = ''
        // formData.phone = ''
        // formData.offer = ''
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
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Your Full Names"/>
                      </div>
                      <div className="form-details">
                          <label>Email</label><br />
                          <input id="email"  
                            name="email" 
                            type="text" 
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Your Email"/>
                      </div>
                      <div className="form-details">
                          <label>Phone Number</label><br/>
                          <input id="text" 
                            name="phone" 
                            type="text"
                            value={formData.phone}
                            onChange={handleChange} 
                            placeholder="Enter Your Phone Number"/>
                      </div>
                      <div className="form-details">
                          <label>Offer</label><br/>
                          <input id="text" 
                            name="offer" 
                            type="text" 
                            value={formData.offer}
                            onChange={handleChange}
                            placeholder="Enter Your Offer"/>
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
