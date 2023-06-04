import React from "react";
import Adminnav from "./Adminnav";

export default function Userlist(){
    return(
        <>
        <Adminnav/>
        <div className="list">
            <table>
                <th>Name</th>
                <tr>Ayush</tr>
                <th>Enrollment Number</th>
                <tr></tr>
                <th>Age</th>
                <tr></tr>
                <th>E-mail</th>
                <tr></tr>
                <th>Mobile Number</th>
                <tr></tr>
            </table>
            </div>
        </>
    )
}