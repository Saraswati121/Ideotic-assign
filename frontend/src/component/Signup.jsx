import React ,{ useState }from 'react'
import {Link,useNavigate}  from 'react-router-dom'
import './style.css'
import axios from 'axios'

export const Signup = () => {
  const nav=useNavigate()
  const [data,setData]= useState({
    userName:"",
    email: "",
    password: "",
  })

  const handelChange = (e)=>{
    const {value,name} = e.target
    setData({...data,[name]:value})
  }

const handelSubmit =async (e)=>{
e.preventDefault()
const url= 'https://localhost:8080/auth/signup'
const {data:res} = await axios.post(url,data)
nav('/login')
console.log(res.message)
}

  return (
    <div className='signup'>
      <div className='Signform_conteiner'>
        <div className='left'>
          <h1>Welcome Back</h1>
          <Link to='/login'>
            <button className='white_btn'>SignIn</button>
          </Link>
        </div>
        <div className='right'>
          <form onSubmit={handelSubmit} className='form_conteiner'>
            <h1>Create Account</h1>
            <input type="text" placeholder='Enter Name' name="userName" value={data.userName}  onChange={handelChange}/>
            <input type="email" placeholder='Enter Email' name="email" value={data.email}  onChange={handelChange}/>
            <input type="password" placeholder='Enter Password' name="password" value={data.password}  onChange={handelChange}/>
            <button type='submit' className='grn_btn'>Signup</button>
          </form>
        </div>
      </div>  
    </div>
  )
}

