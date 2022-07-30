import React, {Link} from 'react-router-dom'
import logo from "../assets/images/logo.png"


function Header() {



  return (
    <div className='sticky-top nav-header bg-light'>
        {/* <Link to="/" style={linkStyle} className='nav-lin'> Home </Link> */}
        <Link to="/" className='nav-header-link'> <img src={logo} alt='logo'/> </Link>
        <Link to="/" className='nav-header-link'> Home </Link>
        <Link to="/residential" className='nav-header-link'> Residential </Link>
        <Link to="/commercial" className='nav-header-link'> Commercial </Link>
        <Link to="/industrial" className='nav-header-link'> Industrial </Link>
        <Link to="/land" className='nav-header-link'> Land </Link>
        <Link to="/login" className='search-bar btn btn-sm btn-secondary mt-2'> Need to Sell </Link>
        {/* <form className='nav-header-link search-bar'>
          <input className='form-control' type='text' name='search' placeholder='search property...'/>
        </form> */}
    </div>
  )
}

export default Header
