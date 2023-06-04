import React from "react";
import {Outlet,NavLink} from 'react-router-dom';
export default function Navbar2(){
    return(
        <div className="nav1">
            <h3>CPMS</h3>
            <div className="nav">
            
            <div className="n1"><NavLink className="b1"  to = '/Dasboard'>Dashboard</NavLink></div>
            <div className="n1"><NavLink  className='b2'  to = '/Complain'>Complain Box</NavLink></div>
            <div className="n1"><NavLink  className='b2'  to = '/'>Logout</NavLink></div>
            
            </div>
        </div>
    )
}