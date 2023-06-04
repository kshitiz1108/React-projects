import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Admin(){

    
    const [Username, setUserame] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserame("");
        setPassword("");
      
      }
    return(<>
    
        <div className="admin">
        <Navbar/>
        <h1 className="header4">Admin</h1>
              <form onSubmit={handleSubmit}>
            <label className="contact">
                <input className="in1" type='text' placeholder="Username" value={Username}
          onChange={(e) => setUserame(e.target.value)}/>
                
                <input className="in3" name="password"  placeholder = 'Password' value={Password}
          onChange={(e) => setPassword(e.target.value)} />
                <NavLink to = '/Admin' className="button2">Log in</NavLink>
                
               
            </label>
            
           
           
            </form>
            
        </div>
        <Footer/>
        </>
    )
}