import React, { Component }  from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Container } from '@mui/material';
import {Button} from 'reactstrap';

function Footer() {
  return (
    <div style = {{backgroundColor: "#49ba6e", "z-index": "999!important", position: "relative", color: "white", height: "300px"}}>
      <Container >
          <div style = {{"align-items": "center", "justify-content": "center" }}>
          <h3 style = {{"text-size": "200px"}}>NEED HELP? VISIT THE SUPPORT CENTER <Button variant = "contained" style = {{"border-radius" : "25px", border :"none", height: "40px", width: "120px"}}>
              GET HELP
          </Button></h3> 
          
          </div>
      </Container>
       
    </div>
  );
}

export default Footer;