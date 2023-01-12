import React ,{ useState }from 'react'
import axios from "axios";
import './style.css'
import { Link } from "react-router-dom";

export const Login = () => {
  const [datat, setDatat] = useState({ email: "", password: "" });

  const handleChange = (e)=>{
    const {value,name} = e.target
    setDatat({...datat,[name]:value})
  }

	const handleSubmit = async (e) => {
		e.preventDefault();
			const url = "https://ideoticbackend.onrender.com/auth/login";
			const { data } = await axios.post(url, datat);
			localStorage.setItem("token", data.token);
			window.location = "/home";
  }

  return (
    <div className='login_container'>
      <div className='login_form_container'>
				<div className='leftt'>
					<form className='form_container' onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={datat.email}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={datat.password}
						/><br/>
						<button type="submit" className='grn_btn'>
							Sing In
						</button>
					</form>
				</div>
				<div className='rightt'>
					<h1>New Here ?</h1>
					<Link to="/">
						<button type="button" className='white_btn'>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
    </div>
  )
}

