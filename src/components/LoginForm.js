import React from 'react';
import { useState } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
  

  const LoginForm = ({setIsLoggedIn}) =>  {
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
   const navigate = useNavigate();
   const submitHandler = (event) => {

    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("logged In");
    navigate("/dashboard");

   }

    const [showPassword, setShowPassword] = useState(false);
    const changeHandler = (event) => {
        setFormData((prevData)=> (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))

    }
	return (
      <form onSubmit={submitHandler}>
        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
            <input
            required
            type='email'
            name='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Your email Id'
            />
        </label>
        <label>
            <p>
                Password<sup>*</sup>
            </p>
            <input
            required
            type={showPassword ? ("text"):("password")}
            name='password'
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Your Password'
            />
            <span onClick={()=> setShowPassword((prev)=> !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
            <Link to="#">
            <p>Forgot Password</p>
            </Link>
        </label>
        <button>Sign In</button>
      </form>
	);
  }
  
  export default LoginForm;
  