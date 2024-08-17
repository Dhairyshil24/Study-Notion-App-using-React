import React from 'react';
import { Outlet } from 'react-router-dom';
  
  const MainHeader = () =>  {
	return (
	  <div className='flex justify-center items-center text-white text-3xl h-full'>
        <Outlet/>
	  </div>
	);
  }
  
  export default MainHeader;
  