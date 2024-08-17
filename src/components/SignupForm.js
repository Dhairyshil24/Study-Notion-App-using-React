import React from 'react';
import { useState } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
  
 const SignupForm = ({setIsLoggedIn}) =>  {
    const navigate = useNavigate();
	const [formData, setFormData] = useState({
        firstname:'', lastname:'', email:'', password:'', confirmPassword:''
    })
    const [showPassword, setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");


    const changeHandler = (event) => {
        setFormData((prevData)=> (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))

    }
    const submitHandler = (event) => {

        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Passwords do not Match")
            return;
        }
        setIsLoggedIn(true);
        toast.success("Successfully created an account");
        console.log("data");
        const accountData = {
            ...formData
        }
        const finalData = {
            ...accountData, accountType
        }
        console.log("Sign up Data")
        console.log(finalData);
        navigate("/dashboard");
    
       }
	return (
	  <div>
        {/* Student-Instructor-Tab */}
        <div className='flex flex-row bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"}
             py-2
            px-5 rounded-full transition-all duration-200`} 
            onClick={()=>{setAccountType("student")}}
            style={{ fontSize: '1.5rem' }}
            >
                Student
            </button>
            <button className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2
            px-5 rounded-full transition-all duration-200`}  
            onClick={()=>{setAccountType("instructor")}}
            style={{ fontSize: '1.5rem' }}
            >
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6'
        >
            {/* contains first name and last name  */}
           <div className='flex flex-row gap-x-4'> 
            <label className='w-full' >
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >First Name<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='firstname'
                onChange={changeHandler}
                placeholder="Enter you first Name"
                value={formData.firstname}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                style={{ fontSize: '0.875rem' }}

                />
            </label>
            <label className='w-full' >
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Last Name<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='lastname'
                onChange={changeHandler}
                placeholder='Enter Last Name'
                value={formData.lastname}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                style={{ fontSize: '0.875rem' }}

                />
            </label>

           </div>
           {/* Email Address */}
           <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input
            required
            type='email'
            name='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Your email Id"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            style={{ fontSize: '0.875rem' }}
            />
          </label>
          {/* Create password and confirm password */}
        <div className='flex flex-row gap-x-4'>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Create Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
            required
            type={showPassword ? ("text"):("password")}
            name='password'
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter your password"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            style={{ fontSize: '0.875rem' }}
            />
            <span className='absolute right-3 top-[38px] cursor-pointer'
             onClick={()=> setShowPassword((prev)=> !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
  
        </label>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm password<sup className='text-pink-200'>*</sup>
            </p>
            <input
            required
            type={confirmShowPassword ? ("text"):("password")}
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={changeHandler}
            placeholder='Confirm your Password'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            style={{ fontSize: '0.875rem' }}
            />
            <span className='absolute right-3 top-[38px] cursor-pointer' 
            onClick={()=> setConfirmShowPassword((prev)=> !prev)}>
                {confirmShowPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
    
        </label>

        </div>
        <button
        style={{ fontSize: '1.5rem' }}
        className='w-full bg-yellow-50
        rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6
        '
        >
            Create Account
        </button>
           
        </form>
	  </div>
	);
  }
  
export default SignupForm;
  

  