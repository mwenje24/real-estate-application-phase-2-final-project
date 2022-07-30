import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

function AddProperty() {
    const [formData, setFormData] = useState({
        ownername: "",
        owneremail: "",
        ownerphone: "",
        category: "",
        transaction: "",
        charges: 0,
        address: "",
        size: "",
        description: "",
        status: "available",
        image: "",
      });

    const navigate = useNavigate();

    function handleAdminAccess(){
        navigate('/admin');
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }
    // match(/\b(\w+)\b/g)
    function handleSubmit(e){
        e.preventDefault();

        // const fileupload = (() => {
        //     const imageFile = document.getElementById('formFile').files
        //     let imageData = new FormData();
        //     for(let i=0; i< imageFile.length; i++){
        //         return imageData.append('imageFile[]', imageFile[i].name);
        //         }
        //     })
        // const fileupload =  document.getElementById('formFile').files
        // const imageFile = fileupload.map((image) => (image.name))

        const image = document.getElementById('image').files
        const imageFile = "../../assets/images/"+image[0].name


        const newSpaces = {
            ownername: formData.ownername,
            owneremail: formData.owneremail,
            ownerphone: formData.ownerphone,
            category: formData.category,
            transaction: formData.transaction,
            charges: formData.charges,
            address: formData.address,
            size: formData.size,
            description: formData.description,
            status: formData.status,
            image: imageFile,
        }
        console.log(newSpaces)
        fetch("http://localhost:4000/property", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSpaces),
        })
    }
  return (
    <div>
      <button className='btn btn-sm btn-secondary mx-5 px-5' onClick={handleAdminAccess}> <span className='fs-5'>&laquo;</span> Back to Summary</button>
      <div className="newItem">
        <form className="itemform-content" onSubmit={handleSubmit}>
          <div className="log-container">
            <label className='form-label'><b>Owner Name</b></label>
            <input className="form-control" 
                type="text" 
                placeholder="Enter Property Owner Name" 
                value = {formData.ownername}
                onChange={handleChange}
                name="ownername"/>
            <label className='form-label'><b>Owner Email</b></label>
            <input className="form-control" 
                type="text" 
                placeholder="Enter Owner Email" 
                value = {formData.owneremail}
                onChange={handleChange}
                name="owneremail"/>
            <label className='form-label'><b>Owner Phone</b></label>
            <input className="form-control" 
                type="text" 
                placeholder="Enter Owner Phone"
                value = {formData.ownerphone}
                onChange={handleChange} 
                name="ownerphone"/>
            <label className='form-label'><b>Space Category</b></label>
            <select className="form-control form-select form-select-sm mb-3"
                value = {formData.category}
                onChange={handleChange} 
                name="category">
                <option>residential</option>
                <option>commercial</option>
                <option>industrial</option>
                <option>land</option>
            </select>
            <label className='form-label'><b>Transaction type</b></label>
            <select className="form-control form-select form-select-sm mb-3" 
                value = {formData.transaction}
                onChange={handleChange}
                name="transaction">
                <option>rental</option>
                <option>lease</option>
                <option>purchase</option>
            </select>
            <label className='form-label'><b>Charges</b></label>
            <input className="form-control"
                 type="text" 
                 placeholder="Enter Property Charges" 
                 value = {formData.charges}
                 onChange={handleChange}
                 name="charges"/>
            <label className='form-label'><b>Property Address</b></label>
            <input className="form-control"
                 type="text" 
                 placeholder="Enter Property Address"
                 value = {formData.address}
                 onChange={handleChange}
                 name="address"/>
            <label className='form-label'><b>Property Size</b></label>
            <input className="form-control" 
                type="text" 
                placeholder="Enter Property Size e.g 2 acres, 100 x 50 feet" 
                value = {formData.size}
                onChange={handleChange}
                name="size"/>
            <label className='form-label'><b>Additional Description</b></label>
            <textarea className="form-control" 
                type="text" 
                placeholder="Enter Property Address"
                value = {formData.description}
                onChange={handleChange} 
                name="description">
            </textarea>
            <label className="form-label">Image</label>
            <input className="form-control"
                 type="file" 
                 value = {formData.image}
                 onChange={handleChange} 
                 name= 'image'
                 id="image" 
                 accept=".jpg, .jpeg, .png"/>
            <button className='btn btn-sm btn-secondary mt-3 px-5' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProperty
