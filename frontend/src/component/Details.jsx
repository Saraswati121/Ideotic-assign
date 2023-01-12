import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import "./style.css"

export const Details = ({singledog}) => {
  const [puppy,setPuppy] = useState([])
  useEffect(() => {
         fetch(`https://dog.ceo/api/breed/${singledog}/images`)
        .then((res)=>{ return res.json() })
        .then((data) => {
        setPuppy([...data.message])
         } )
        .catch((err) => console.log(err))
  },[])
  return (
    <div>
      <Navbar/>
    <div  className='singleDog'>
      {puppy.map((p)=>{
        return(
          <div><img src={p} alt="" height="95%" width="95%"/></div>
        )
      })}
    </div>
    </div>
  )
}
