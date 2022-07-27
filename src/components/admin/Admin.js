import React from 'react'
import image from "../assets/images/user.png"

function Admin() {
  // onClick={() => document.getElementById('id01').style.display='none'}
  return (
    <>
      <div id="id01" className="modal">
        <form className="modal-content animate" method="post">
          <div className="imgcontainer">
            <span className="close" onClick={() => document.getElementById('id01').style.display='none'} title="Close Modal">&times;</span>
            <img src={image} alt="Avatar" className="avatar"/>
          </div>

          <div className="log-container">
            <label className='form-label'><b>email</b></label>
            <input className="form-control" type="text" placeholder="Enter Email" name="uname"/>

            <label className='form-label'><b>Password</b></label>
            <input className="form-control" type="password" placeholder="Enter Password" name="psw"/>
              
            <button className='btn btn-sm btn-outline-secondary mt-3 w-25 px-5' type="submit">Login</button>
          </div>

          <div className="log-container">
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>
      admin page
    </>
  )
}

export default Admin;
