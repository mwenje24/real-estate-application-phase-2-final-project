import React from 'react'
import {useNavigate} from 'react-router-dom';

function AddProperty() {
    const navigate = useNavigate();

    function handleAdminAccess(){
        navigate('/admin');
    }
  return (
    <div>
      <button className='btn btn-sm btn-secondary mx-5 px-5' onClick={handleAdminAccess}> <span className='fs-5'>&laquo;</span> Back to Summary</button>
      <div className="newItem">
        <form className="itemform-content">
          <div className="log-container">
            <label className='form-label'><b>Owner Name</b></label>
            <input className="form-control" type="text" placeholder="Enter Property Owner Name" name="name"/>
            <label className='form-label'><b>Owner Email</b></label>
            <input className="form-control" type="text" placeholder="Enter Owner Email" name="email"/>
            <label className='form-label'><b>Owner Phone</b></label>
            <input className="form-control" type="text" placeholder="Enter Owner Phone" name="phone"/>
            <label className='form-label'><b>Space Category</b></label>
            <select className="form-control form-select form-select-sm mb-3" name="category">
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="land">Land</option>
            </select>
            <label className='form-label'><b>Transaction type</b></label>
            <select className="form-control form-select form-select-sm mb-3" name="transaction">
                <option value="rental">Rental</option>
                <option value="lease">Lease</option>
                <option value="purchase">Purchase</option>
            </select>
            <label className='form-label'><b>Charges</b></label>
            <input className="form-control" type="text" placeholder="Enter Property Charges" name="charges"/>
            <label className='form-label'><b>Property Address</b></label>
            <input className="form-control" type="text" placeholder="Enter Property Address" name="address"/>
            <label className='form-label'><b>Property Size</b></label>
            <input className="form-control" type="text" placeholder="Enter Property Size" name="size"/>
            <label className='form-label'><b>Additional Description</b></label>
            <textarea className="form-control" type="text" placeholder="Enter Property Address" name="description"></textarea>
            <label className="form-label">Images</label>
            <input className="form-control" type="file" id="formFile"/>
            <button className='btn btn-sm btn-secondary mt-3 px-5' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProperty
