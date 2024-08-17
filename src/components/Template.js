import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import frame from '../assets/frame.png';

  const Template = ({title,description1, description2, image, formtype, setIsLoggedIn}) =>  {
    console.log("ye raha mera formtype")
    console.log(formtype);
	return (
	  <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{description1}</span>
                <span>{description2}</span>
            </p>
            {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>): (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>
                <p>Sign Up with Google</p>
            </button>

        </div>

        <div>
            <img 
            alt='pattern'
            src={frame}
            width={558}
            height={504}
            loading='lazy'
            />
            <img 
            src={image}
            alt='students'
            width={558}
            height={490}
            loading='lazy'
            />
        </div>
	  </div>
	);
  }
  
  export default Template;
  