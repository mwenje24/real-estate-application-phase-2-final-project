import React, {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='navbar'>
        <Link to="/"> Home </Link>
        <Link to="/residential"> Residential </Link>
        <Link to="/commercial"> Commercial </Link>
        <Link to="/industrial"> Industrial </Link>
        <Link to="/land"> Land </Link>
    </div>
  )
}

export default Header
