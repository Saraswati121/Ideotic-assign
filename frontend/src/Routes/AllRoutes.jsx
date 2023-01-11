import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from '../component/Home'
import { Signup } from '../component/Signup'
import { Login } from '../component/Login'
import { Details } from '../component/Details'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/details" element={<Details/>}></Route>
        </Routes>
    </div>
  )
}
