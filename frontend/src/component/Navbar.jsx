import React from 'react'
import "./style.css"
import { useNavigate} from "react-router-dom";

export const Navbar = () => {
    const nav = useNavigate()
  return (
    <div id='navbar'>
        <div className='love'>
           <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f436.svg" alt="" width="50px" height="50px"/> 
           <p >Puppy Love</p>
        </div>
        <div className='love'>
            <a href="/home">HOME</a>
            <button className="btn" onClick={()=>nav('/') }>Logout</button>
        </div>
    </div>
  )
}
