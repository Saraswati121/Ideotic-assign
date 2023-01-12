import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from '../component/Home'
import { Signup } from '../component/Signup'
import { Login } from '../component/Login'
import { Details } from '../component/Details'
import { useState } from 'react'

export const AllRoutes = () => {
  const [singledog,setSingleDog] = useState("")
  return (
    <div>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home setSingleDog={setSingleDog}/>}></Route>
          <Route path="/details" element={<Details singledog={singledog}/>}></Route>
        </Routes>
    </div>
  )
}
