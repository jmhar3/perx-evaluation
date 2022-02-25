import { useState } from 'react';

const DogCard = ({ dogData }) => {
 const [flipped, setFlipped] = useState(false);
 const { url, id, breeds } = dogData;

 const flippable = breeds.length > 0;

 return (
  <li
   className={`dogCard ${flipped && 'flipped'}`}
   onClick={() => setFlipped(!flipped)}
  >
   {flipped
    ? flippable
     ? <>
      <p>{breeds[0].bred_for}</p>
      <h4>
       Breed Group: {breeds[0].breed_group}
       <br />
       Life Span: {breeds[0].life_span}
       <br />
       Height: {breeds[0].height.metric} meters
       <br />
       Weight: {breeds[0].weight.metric} kilos
      </h4>
      <p>{breeds[0].temperament}</p>
     </>
     : <h3>No doggy data</h3>
    : <>
     <img src={url} alt={id} />
     <h4>{flippable ? breeds[0].name : "Anonymous Doggo"}</h4>
    </>
   }
  </li>
 )
}

export default DogCard;