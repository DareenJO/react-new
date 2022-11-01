import React from 'react'
import Home from './Home';
import Nav from './Nav';
import {
    Routes,
    Route,
    
  } from 'react-router-dom';
  
  function Router(){
return(

<> 
    <Routes>

<Route  path="home" element={<Home/>}></Route>




</Routes></>

    
)


  }
  export default Router;