import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Description from '../Description'
import image from "../../assets/images/office3.jpg"

function CommercialDescription() {
  let {propertyId} = useParams()
  const [properties, setproperties] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/property/${propertyId}`)
      .then((r) => r.json())
      .then((popular) => setproperties(popular));
  }, []);
  return (
    <div>
      <Description 
      // image1={properties.images[0]}
      // image2={properties.images[1]}
      // image3={properties.images[2]}
      image1={image}
        image2={image}
        image3={image}
       ownername={properties.ownername}
       transaction={properties.transaction}
       charges={properties.charges}
       address={properties.address}
       size={properties.size}
       description={properties.description}
       />
    </div>
  )
}

export default CommercialDescription
