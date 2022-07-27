import React from 'react'
import {useNavigate} from 'react-router-dom';
import image from "../assets/images/user.png"

function Login() {
    const navigate = useNavigate();

    function handleAdminAccess(){
        navigate('/admin');
    }
  return (
    <div>
      <div id="id01" className="modal">
        <form className="modal-content animate" onSubmit={handleAdminAccess}>
          <div className="imgcontainer">
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
    </div>
  )
}

export default Login
