import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import image from "../../assets/images/land2.jpeg"
import Cart from '../Cart'

function Land() {

  const [properties, setproperties] = useState([]);

  const database = "https://api.json-generator.com/templates/v1Sx1bk2enX5/data?access_token=uiaiouosskswmrymumid2f0xq6fpq3fxvlz1owwg"

  useEffect(() => {
    fetch(database)
      .then((r) => r.json())
      .then((popular) => setproperties(popular.property));
  }, []);

  const propertiesToDisplay = properties.filter((item) => {
    return item.category === "land"
  });
  
  // let link = <Link to="/land/description" className='btn btn-sm btn-outline-secondary'>Details</Link>
  return (
    <>
      <span className='page-headings'>land Spaces</span>
        <div className='popular-property row'>
        {propertiesToDisplay.map((popular) => (
            <Cart key={popular.id} 
              link={<Link to={"/land/description/"+ popular.id} className='btn btn-sm btn-outline-secondary'>Details</Link>} 
              image={popular.image} 
              transaction={popular.transaction} 
              address={popular.address} 
              charges={popular.charges} 
              size={popular.size}
              status={popular.status}/>
          ))}
        </div>
    </>
  )
}

export default Land
