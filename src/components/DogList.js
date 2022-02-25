import axios from 'axios';
import { useState, useEffect } from 'react';

export const DogList = () => {
 const [dogs, setDogs] = useState([])
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  axios.get('https://api.thedogapi.com/v1/images/search?limit=20', {
   headers: {
    'Content-Type': 'application/json',
    'x-api-key': '91181943-5a3a-4929-937c-7cb7b9fa32f9'
   }
  })
   .then(res => {
    setDogs(res.data)
    setLoading(false)
   })
 })

 return (
  <div>
   
  </div>
 )
}