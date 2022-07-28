import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import image from "../../assets/images/landing.jpg"
import Cart from '../Cart'


function Home() {

  const [properties, setproperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/property")
      .then((r) => r.json())
      .then((popular) => setproperties(popular));
  }, []);


  // let link = <Link to="/home/description" className='btn btn-sm btn-outline-secondary'>Details</Link>
  return (
    <>
      <div className='landing-page'>
        <div className='welcome-image mb-5'>
          <div className='welcome-text'>
            <h1>Explore</h1>
            <span>Our available over 1000+ spaces for rent and sell</span>
          </div>
        </div>
        <span className='page-headings'>Popular Properties</span>
        <div className='popular-property row'>
        {properties.map((popular) => (
            <Cart key={popular.id} 
              link={<Link to={"/home/description/"+ popular.id} className='btn btn-sm btn-outline-secondary'>Details</Link>} 
              image={popular.images[0]} 
              transaction={popular.transaction} 
              address={popular.address} 
              charges={popular.charges} 
              size={popular.size}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
