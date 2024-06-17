import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BiImageAdd } from "react-icons/bi";
import { FaUsersCog } from "react-icons/fa";
import {HiHome} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import './home.css';
import { Appcontext } from "./Navi";

function Navbar() {
    const navigate = useNavigate();
    const {userauth} = useContext(Appcontext);
    const [currentuser,setcurrentuser] = useState("");
   useEffect(()=>{
     setcurrentuser(userauth);
   },[userauth])

    const handleaddpost = () => {
        navigate('/Addpost');
    }
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <a href="/" className="navbar-brand fw-bolder" >instagram</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target ="#mynavbar"
            aria-controls="mynavbar" aria-label="Toggle navigation" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="mynavbar"> 
            <ul className="navbar-nav ms-auto">
                <li className="nav-item nav-link" onClick={()=>{navigate("/home")}}><HiHome size={25}></HiHome></li>
                <li className="nav-item nav-link ">Post  (<BiImageAdd size={30} onClick={handleaddpost}></BiImageAdd>)
                </li>
                <li className="nav-item ">{  currentuser ==="" && <button type="submit" className="btn2" onClick={()=>{navigate( "/" )}}>Login</button> 
            }</li>
             <li className="nav-item">{  currentuser ==="" && <button type="submit" className="btn2" onClick={()=>{navigate( "/createuser" )}}>signup</button> 
             }</li>
              <li className="nav item">
              {  currentuser !=="" && <FaUsersCog size={"30"} style={{marginTop:"15%"}} onClick={()=>{navigate( "/profile" )}}></FaUsersCog> }
              
              </li>
              <li className="nav item">
              {  currentuser && <img className="logo" src={currentuser.photoURL}  alt="user" ></img>}
              </li>
            </ul>
            </div>
            </div>
            </nav>
           
        </div>
     );
}

export default Navbar;