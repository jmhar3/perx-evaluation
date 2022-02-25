import { useState } from 'react';
import CardBack from './CardBack';

const DogCard = ({ dogData }) => {
 const [flipped, setFlipped] = useState(false);
 const { url, id, breeds } = dogData;

 const dataAvailable = breeds.length > 0;

 const cardBack = dataAvailable ?
  <CardBack data={breeds[0]}/>
  : <h3>No doggy data</h3>

 const cardFront =
  <>
   <img src={url} alt={id} />
   <h4>{dataAvailable ? breeds[0].name : "Anonymous Doggo"}</h4>
  </>

 return (
  <li
   className={`dog-card ${flipped && 'flipped'}`}
   onClick={() => setFlipped(!flipped)}
  >
   {flipped ? cardBack : cardFront}
  </li>
 )
}

export default DogCard;