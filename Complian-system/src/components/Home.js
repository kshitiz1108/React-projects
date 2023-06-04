import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
 
export default function Home(){
    return(<>
        
    <Navbar/>
    <div className="home1">
        <div className="home">
        
        <div className="boxes">
            <div className="box1">
             <h1>Step 1</h1>
             <p>If you haven't registered yet register from
              the Register here button in the top right corner.
              After you have registered yourself go to the 
              student/faculty and login youself</p>
            </div>
            <div className="box2">
            <h1>Step 2</h1>
             <p>After you have logged yourself in click on the
              complain now button to open the respective form 
              where you can complain regarding the washroom problems.</p>
            </div>
            <div className="box3">
            <h1>Step 3</h1>
             <p>After complaining you can check the status of your 
             complain by cicking on the dashboard where you can see 
             how many complains you have done and how many of them are 
             solved and how many of them are in processing</p>
            </div>
        </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}