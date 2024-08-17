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

    const accountData = {
        ...formData
    }

    console.log("login form data");
    console.log(accountData);

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
      <form onSubmit={submitHandler}
      className='flex flex-col w-full gap-y-4 mt-6'
      >
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input
            required
            type='email'
            name='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Your email Id'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            style={{ fontSize: '0.875rem' }}
            />
        </label>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
            required
            type={showPassword ? ("text"):("password")}
            name='password'
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Your Password'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            style={{ fontSize: '0.875rem' }}
            />
            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={()=> setShowPassword((prev)=> !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible
                fontSize={24} fill='#AFB2BF'
                />):(<AiOutlineEye
                fontSize={24} fill='#AFB2BF'
                />)}
            </span>
            <Link to="#">
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
            </Link>
        </label>
        <button
        style={{ fontSize: '1.5rem' }}
        className='bg-yellow-50
        rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6
        '>Sign In</button>
      </form>
	);
  }
  
  export default LoginForm;
  