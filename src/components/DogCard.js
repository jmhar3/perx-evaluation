import { useState } from 'react';

const DogCard = ({ dogData }) => {
 const [flipped, setFlipped] = useState(false)
 const { url, id, breeds } = dogData
 console.log(breeds[0])
 return (
  <li
   className={`dogCard ${flipped && "flipped"}`}
   onClick={() => setFlipped(!flipped)}
  >
   {flipped
    ? breeds.length > 0
     ? <>
      <h3>{breeds[0].name}</h3>
      <h4>{breeds[0].bred_for}</h4>
      <p>
       Breed Group: {breeds[0].breed_group}
       <br />
       Life Span: {breeds[0].life_span}
       <br />
       Height: {breeds[0].height.metric} meters
       <br />
       Weight: {breeds[0].weight.metric} kilos
      </p>
     </>
     : <h3>Anonymous Doggo</h3>
    : <img src={url} alt={id} />
   }
  </li>
 )
}

export default DogCard;