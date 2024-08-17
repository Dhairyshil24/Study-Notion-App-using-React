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
        console.log(accountData);
        navigate("/dashboard");
    
       }
	return (
	  <div>
        {/* Student-Instructor-Tab */}
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            {/* contains first name and last name  */}
           <div>
            <label>
                <p>First Name<sup>*</sup></p>
                <input
                required
                type='text'
                name='firstname'
                onChange={changeHandler}
                placeholder='Enter First Name'
                value={formData.firstname}

                />
            </label>
            <label>
                <p>Last Name<sup>*</sup></p>
                <input
                required
                type='text'
                name='lastname'
                onChange={changeHandler}
                placeholder='Enter Last Name'
                value={formData.lastname}

                />
            </label>

           </div>
           {/* Email Address */}
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
          {/* Create password and confirm password */}
        <div>
        <label>
            <p>
                Create Password<sup>*</sup>
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
  
        </label>
        <label>
            <p>
                Confirm your password<sup>*</sup>
            </p>
            <input
            required
            type={confirmShowPassword ? ("text"):("password")}
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={changeHandler}
            placeholder='Confirm your Password'
            />
            <span onClick={()=> setConfirmShowPassword((prev)=> !prev)}>
                {confirmShowPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
    
        </label>

        </div>
        <button>
            Create Account
        </button>
           
        </form>
	  </div>
	);
  }
  
export default SignupForm;
  

  