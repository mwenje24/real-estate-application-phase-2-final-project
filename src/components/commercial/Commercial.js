import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import image from "../../assets/images/office3.jpg"
import Cart from '../Cart'

function Commercial() {

  const [properties, setproperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/property")
      .then((r) => r.json())
      .then((popular) => setproperties(popular));
  }, []);

  const propertiesToDisplay = properties.filter((item) => {
    return item.category === "commercial"
  });
  
  // let link =<Link to="/commercial/description" className='btn btn-sm btn-outline-secondary'>Details</Link>
  return (
    <>
      <span className='page-headings'>Commercial Spaces</span>
        <div className='popular-property row'>
        {propertiesToDisplay.map((popular) => (
            <Cart key={popular.id} 
              link={<Link to={"/commercial/description/"+ popular.id} className='btn btn-sm btn-outline-secondary'>Details</Link>} 
              image={popular.image} 
              transaction={popular.transaction} 
              address={popular.address} 
              charges={popular.charges} 
              size={popular.size}/>
          ))}
        </div>
    </>
  )
}

export default Commercial
