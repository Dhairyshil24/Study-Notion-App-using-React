import "./App.css";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(
    <div className="w-screen h-screen bg-richblack-900 flex flex-col"> 
      <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>
    <Routes>
      <Route path='/' element={<MainHeader/>}>
      <Route index element={<Home/>}/>
      <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='/dashboard' element={
      <PrivateRoute isLoggedIn={isLoggedIn}>
      <Dashboard/>
      </PrivateRoute>
      
      }/>
      <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
