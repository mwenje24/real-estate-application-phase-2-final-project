import React, {useState} from 'react'
import Cart from '../Cart'
import image from "../assets/images/landing.jpg"

function Admin() {
    const flex = {
      display: "flex",
      float: "right"
    };
  return (
    <>
      <span className='page-headings'>Properties Summary</span>
      <div className='row'>
        <div className='col-4'>
        <div className='card popular-card col-12 mt-3'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span style={flex}>Charges</span></h5>
              <p className="card-text">............Address</p>
              <button className="card-text btn btn-sm btn-secondary">close bids</button><span style={flex}>Bids</span>
            </div>
        </div>
        </div>
        <div className='col-8'>
        <span className='page-headings px-5'>Bids list</span>
        <table class="table table-striped mt-3 table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Offer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Andrew Lincoln</td>
              <td>andre@gmail.com</td>
              <td>0796325481</td>
              <td>800</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Andrew Lincoln</td>
              <td>andre@gmail.com</td>
              <td>0796325481</td>
              <td>900</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Andrew Lincoln</td>
              <td>andre@gmail.com</td>
              <td>0796325481</td>
              <td>600</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
        <div className='card popular-card col-12 mt-3'>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title <span style={flex}>Charges</span></h5>
              <p className="card-text">............Address</p>
              <button className="card-text btn btn-sm btn-secondary">close bids</button><span style={flex}>Bids</span>
            </div>
        </div>
        </div>
        <div className='col-8'>
        <span className='page-headings px-5'>Bids list</span>
        <table class="table table-striped mt-3 table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Offer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Andrew Lincoln</td>
              <td>andre@gmail.com</td>
              <td>0796325481</td>
              <td>800</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Andrew Lincoln</td>
              <td>andre@gmail.com</td>
              <td>0796325481</td>
              <td>900</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Andrew Lincoln</td>
              <td>andre@gmail.com</td>
              <td>0796325481</td>
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
