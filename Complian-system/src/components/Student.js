import React from "react";
import Navbar from "./Navbar";
import {Outlet,NavLink} from 'react-router-dom';
import Footer from "./Footer";
export default function Student(){
    return(
        <>
        <Navbar/>
        <div className="main12">
        <h1 className="header12">Log in</h1>
              <form>
            <label className="contact12">
                <input className="in12" type='text' placeholder="Username"/>
                
                <input className="in3" name="password"  placeholder = 'Password' />
                <NavLink className='button2'  to = '/Student'>Log in</NavLink>
                </label>
            
           
           
            </form>
            </div>
            <Footer/>
        </>
    )
}