import React from "react";
import Navbar2 from "./Navbar2";
import { useState } from "react";
import Footer from "./Footer";

export default function Complainform(){
    const [Subject, setSubject] = useState("");
    const [Username, setUserame] = useState("");
    const [Complain, setComplain] = useState("");
    const [Description, setDescription] = useState("");
    const handleChange = (event) => {
      event.preventDefault();
      
     }
    const handleSubmit = (event) => {
        event.preventDefault();
        setUserame("");
        setSubject("");
        setComplain("");
        setDescription("");
      
      }
   
    return(
    <>
    <Navbar2/>
    <div className="comp">
        <h1 className="header123">Add Complain :-</h1>
              <form onSubmit={handleSubmit}>
            <label className="contact">
                <input className="in1" type='text' placeholder="Username" value={Username}
          onChange={(e) => setUserame(e.target.value)}/>
                <input className="in1" type='text' placeholder="Subject" value={Subject}
          onChange={(e) => setSubject(e.target.value)}/>
                <input className="in1" type='text' placeholder="Type of Complain" value={Complain}
          onChange={(e) => setComplain(e.target.value)}/>
                <textarea className="in1" type='text' placeholder="Description" value={Description}
          onChange={(e) => setDescription(e.target.value)}/>
                
                <button className="button21">Submit Complain</button>
                
               
            </label>
            
           
           
            </form>
            </div>
            <Footer/>
            </>
    )
}