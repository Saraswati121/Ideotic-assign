import React, { useEffect, useState } from 'react'

export const Details = ({e}) => {
  const [puppy,setPuppy] = useState([])
  useEffect(() => {
         fetch(`https://dog.ceo/api/breed/${e}/images`)
        .then((res)=>{ return res.json() })
        .then((data) => {
        setPuppy([...data.message])
         } )
        .catch((err) => console.log(err))
  },[])
  return (
    <div>
      {puppy.map((p)=>{
        return(
          <div><img src={p} alt="" /></div>
        )
      })}
    </div>
  )
}
