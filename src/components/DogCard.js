import { useState } from 'react';

const DogCard = ({ dogData }) => {
 const [flipped, setFlipped] = useState(false)
 const {url, id, breeds} = dogData
 
 return (
  <li className="dogCard">
   <img src={url} alt={id}/>
  </li>
 )
}

export default DogCard;