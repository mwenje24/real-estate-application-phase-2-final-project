import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import image from "../../assets/images/landing.jpg"
import image2 from "../../assets/images/land2.jpeg"

function Admin() {
    const flex = {
      display: "flex",
      float: "right"
    };

    const navigate = useNavigate();

    function handleAddPropertyForm(){
        navigate('/addproperty');
    }
  return (
    <>
      <span className='page-headings'>Properties Summary</span>
      <button className='btn btn-sm btn-secondary mx-5 px-5' onClick={handleAddPropertyForm}>Add Poperty</button>
      <div className='row'>
        <div className='col-4 summary'>
        <div className='card popular-card col-12 mt-3'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">rental<span style={flex}>$ 250</span></h5>
              <p className="card-text">Rickson Plaza, Muindi Mbingu Streat, Nairobi</p>
              <button className="card-text btn btn-sm btn-secondary">close bids</button><span style={flex}>Bids: 3</span>
            </div>
        </div>
        </div>
        <div className='col-8 mt-2 summary'>
        <span className='page-headings px-5'>Bids list</span>
        <table className="table table-striped mt-3 table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Offer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abraham Zigi</td>
              <td>ibra@gmail.com</td>
              <td>0756945481</td>
              <td>90000</td>
            </tr>
            <tr>
              <td>Andrew Lincoln</td>
              <td>andre@gmail.com</td>
              <td>0796325481</td>
              <td>900</td>
            </tr>
            <tr>
              <td>Sam Wein</td>
              <td>sam@gmail.com</td>
              <td>0796546651</td>
              <td>600</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <div className='row'>
        <div className='col-4 summary'>
        <div className='card popular-card col-12 mt-3'>
            <img src={image2} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Purchase<span style={flex}>$ 6000</span></h5>
              <p className="card-text">Machakos, Mwatate</p>
              <button className="card-text btn btn-sm btn-secondary">close bids</button><span style={flex}>Bids : 4</span>
            </div>
        </div>
        </div>
        <div className='col-8 mt-2 summary'>
        <span className='page-headings px-5'>Bids list</span>
        <table className="table table-striped mt-3 table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Offer</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Andrew Lincoln</td>
              <td>andre@gmail.com</td>
              <td>0796325481</td>
              <td>900</td>
            </tr>
            <tr>
              <td>Sam Wein</td>
              <td>sam@gmail.com</td>
              <td>0796546651</td>
              <td>600</td>
            </tr>
            <tr>
              <td>Andrew Lincoln</td>
              <td>andre@gmail.com</td>
              <td>0796325481</td>
              <td>1300</td>
            </tr>
            <tr>
              <td>Reuben Lee</td>
              <td>reuben@gmail.com</td>
              <td>0711125481</td>
              <td>600</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default Admin;
