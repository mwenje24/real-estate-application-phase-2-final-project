import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import image from "../../assets/images/landing.jpg"
import Cart from '../Cart'


function Home() {

  const [properties, setproperties] = useState([]);
  const database = "https://api.json-generator.com/templates/v1Sx1bk2enX5/data?access_token=uiaiouosskswmrymumid2f0xq6fpq3fxvlz1owwg"
  
  useEffect(() => {
    fetch(database)
      .then((r) => r.json())
      .then((popular) => setproperties(popular.property));
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
              image={popular.image} 
              transaction={popular.transaction} 
              address={popular.address} 
              charges={popular.charges} 
              size={popular.size}
              status={popular.status}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
