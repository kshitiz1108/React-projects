import React from "react";
import { NavLink } from "react-router-dom";
export default function Adminnav(){
    return(
        <div className="nav1">
        <h3>CPMS</h3>
        <div className="nav">
        
        <div className="n1"> <NavLink className="b1"  to = '/AdminDashboard'>Dasboard</NavLink></div>
        <div className="n1"><NavLink  className='b2'  to = '/Users'>Users list</NavLink></div>
        <div className="n1"><NavLink  className='b2'  to = '/List'>Complain list</NavLink></div>
        <div className="n1"><NavLink  className='b2'  to = '/'>Logout</NavLink></div>

        
        </div>
    </div>
    )
}