import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MenuAppBar from './components/navbar';
import Home from './components/home';
import Company from './components/company';
import Contact from './components/contact';
import Faq from './components/faq';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        
       <MenuAppBar/>
       <Routes>
         <Route path ="/" element = {<Home/>}/>
         <Route path = "/Company" element = {<Company/>}/>
         <Route path ="/Contact" element = {<Contact/>}/>
         <Route path  = "Faq" element = {<Faq/>}/>
       </Routes>
       <Footer/>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
