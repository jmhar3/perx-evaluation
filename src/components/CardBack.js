const DogCard = ({ data }) => {
 const {
  bred_for,
  breed_group,
  life_span,
  height,
  weight,
  temperament
 } = data;
 
 return (
  <>
   <p>{bred_for}</p>
   <h4>
    Breed Group: {breed_group}
    <br />
    Life Span: {life_span}
    <br />
    Height: {height.metric} meters
    <br />
    Weight: {weight.metric} kilos
   </h4>
   <p>{temperament}</p>
  </>
 )
}

export default DogCard;