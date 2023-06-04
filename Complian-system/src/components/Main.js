import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Head(){
    const [Designation, setDesignation] = useState("");
    const [Username, setUserame] = useState("");
    const [Mobile, setMobile] = useState();
    const [Department, setDepartment] = useState("");
    const [Washroom, setWashroom] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      setUserame("");
      setDepartment("");
      setDesignation("");
      setEmail("");
      setMobile("");
      setWashroom("");
      setPassword("");
    }
  const handleChange = (event) => {
    setDesignation(event.target.value)
  }

    return(<>
        
     <Navbar/>
        <div className="register">
       
        <h1 className="header1">Register Here</h1>
              <form onSubmit={handleSubmit}>
            <label className="contact">
                <input className="in1" type='text' placeholder="Username" value={Username}
          onChange={(e) => setUserame(e.target.value)}/>
                <input className="in2" type='number' placeholder="Mobile Number" value={Mobile}
          onChange={(e) => setMobile(e.target.value)}/>
                <input className="in1" type='text' placeholder="Department" value={Department}
          onChange={(e) => setDepartment(e.target.value)}/>
                <input className="in1" type='text' placeholder="Washroom" value={Washroom}
          onChange={(e) => setWashroom(e.target.value)}/>
                <select className="in1" placeholder="Designation" value={Designation} onChange={handleChange}>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                
                </select>
                <input className="in1" type='e-mail' placeholder="E-mail" value={Email}
          onChange={(e) => setEmail(e.target.value)}/>
                <input className="in3" type='password' placeholder="Password"  value={Password}
          onChange={(e) => setPassword(e.target.value)} />
                <NavLink className='button2'  to = '/StudentLogin'>Register</NavLink>
                
               
            </label>
            
           
           
            </form>
        </div>
        <Footer/>
        </>
    )
}