import React,{ useState,useEffect} from 'react'
import {Navbar} from './Navbar'
import { useNavigate } from 'react-router-dom'
import "./style.css"

export const Home = ({e}) => {
  const [dog,setDog]= useState([])
  const nav= useNavigate()

  useEffect(()=>{
    const getDogs = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((res)=>{
      return res.json()
    })
    .then((data) => {
      let arr=Object.keys(data.message)
      setDog([...arr])
    })
    .catch((err)=>console.log(err))
  }
  getDogs()
  },[])

  return (
    <div>
      <Navbar/>
      <h2>OUR ALL BREEDS</h2>
      <div id='container'>
        {dog.map((e) => {
          return(
            <button onClick={()=>nav('/details')}>{e}</button>
          )
        })}
      </div>
    </div>
  )
}
