import React, {Link} from 'react-router-dom'
import logo from "../images/logo.png"


function Header() {


  // const linkStyle = {
  //   margin: "1rem",
  //   textDecoration: "none",
  //   color: '#244377',
  //   padding: "10px",
  //   display: "inline-block",
  //   // float: "right"
  // };

  return (
    <div className='sticky-top nav-header'>
        {/* <Link to="/" style={linkStyle} className='nav-lin'> Home </Link> */}
        <Link to="/" className='nav-header-link'> <img src={logo} alt='logo'/> </Link>
        <Link to="/" className='nav-header-link'> Home </Link>
        <Link to="/residential" className='nav-header-link'> Residential </Link>
        <Link to="/commercial" className='nav-header-link'> Commercial </Link>
        <Link to="/industrial" className='nav-header-link'> Industrial </Link>
        <Link to="/land" className='nav-header-link'> Land </Link>
        <form className='nav-header-link search-bar'>
          <input className='form-control' type='text' name='search' placeholder='search property...'/>
        </form>
    </div>
  )
}

export default Header