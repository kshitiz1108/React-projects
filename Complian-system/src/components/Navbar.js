import React from "react";
import {Outlet,NavLink} from 'react-router-dom';
export default function Navbar(){
    return(
        <div className="nav1">
          
            <h1 className="head1">CPMS</h1>
            <div className="nav">
            
           <div className="n1"> <NavLink className="b1"  to = '/Register'>Register here</NavLink> </div>            
           <div className="n2"><NavLink  className='b2'  to = '/AdminLogin'>Admin</NavLink></div>
           <div className="n3"> <NavLink className='b3'  to = '/StudentLogin'>Student/Faculty</NavLink></div>
            </div>
        </div>
    )
}