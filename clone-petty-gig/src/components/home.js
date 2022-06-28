import React, { Component }  from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div style = {{backgroundColor: "black", "align-content": "left", "justify-content": "left"}}>
      <div>
      <h6 style = {{"color": "green", "font-size": "40px"}}>
        Meet
      </h6>
      <h6 style = {{"color": "green", "font-size": "40px"}}>
        PettyGigs!
      </h6>
      </div>
      
       
    </div>
  );
}

export default Home;
