import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Route , Routes,Link } from "react-router-dom";
import Head from './components/Main';
import Student from './components/Student';
import Admin from './components/Admin';
import Navbar from './components/Navbar';
import "./main.css";
import Home from './components/Home';
import Complain from './components/Complain';
import Complainform from './components/Complainform';
import Page from './components/Adminpage1';
import Userlist from './components/Userslist';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Register" element={<Head/>}/>
         
         <Route path="AdminLogin" element={<Admin/>} />
         <Route path="StudentLogin" element={<Student />} />
         {/* <Route path="Signup" element={<Signup />} />
         <Route path="Service" element={<Service />} /> */}
         <Route path="/Student" element={<Complain/>}/>
         <Route path="/Complain" element={<Complainform/>}/>
         
         <Route path="/Admin" element={<Page/>}/>
         <Route path="/Users" element={<Userlist/>}/>
      </Routes>
      </BrowserRouter>
);


