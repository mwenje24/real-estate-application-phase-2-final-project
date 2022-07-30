import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Description from '../Description'
import image from "../../assets/images/office3.jpg"

function CommercialDescription() {
  let {propertyId} = useParams()
  const [properties, setproperties] = useState([]);

  const database = "https://api.json-generator.com/templates/v1Sx1bk2enX5/data?access_token=uiaiouosskswmrymumid2f0xq6fpq3fxvlz1owwg"

  useEffect(() => {
    fetch(database)
      .then((r) => r.json())
      .then((popular) => setproperties(popular.property));
  }, []);
  const display = properties.filter((item) => {
    return item.id === parseInt(propertyId)
  });
  return (
    <div>
      {display.map((propertiesToDisplay) => (
      <Description key={propertiesToDisplay.id}
      image = {propertiesToDisplay.image}
       ownername={propertiesToDisplay.ownername}
       transaction={propertiesToDisplay.transaction}
       charges={propertiesToDisplay.charges}
       address={propertiesToDisplay.address}
       size={propertiesToDisplay.size}
       description={propertiesToDisplay.description}
        status={propertiesToDisplay.status}
       />
      ))}
    </div>
  )
}

export default CommercialDescription
