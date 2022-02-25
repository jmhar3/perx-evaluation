import { useState } from 'react';

const DogCard = ({ dogData }) => {
 const [flipped, setFlipped] = useState(false)
 const {url, id, breeds} = dogData

console.log(dogData)
 
 return (
  <li>
   <img src={url} alt={id}/>
  </li>
 )
}

export default DogCard;