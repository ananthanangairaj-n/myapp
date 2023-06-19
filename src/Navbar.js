import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BsPlusSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import './home.css';
import { onAuthStateChanged  } from "firebase/auth";
import { Appcontext } from "./Navi";

function Navbar() {
    const navigate = useNavigate();
    const {userauth} = useContext(Appcontext);
    const [currentuser,setcurrentuser] = useState("");
   useEffect(()=>{
     setcurrentuser(userauth);
   })

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
                <li className="nav-item nav-link" onClick={()=>{navigate("/home")}}>Home</li>
                <li className="nav-item nav-link ">Post  (<BsPlusSquare size={18} onClick={handleaddpost}></BsPlusSquare>)
                </li>
                <li className="nav-item ">{  currentuser ==="" && <button type="submit" className="btn2" onClick={()=>{navigate( "/" )}}>Login</button> 
            }</li>
             <li className="nav-item">{  currentuser ==="" && <button type="submit" className="btn2" onClick={()=>{navigate( "/createuser" )}}>signup</button> 
             }</li>
            </ul>
            </div>
            </div>
            </nav>
            {  currentuser && <img className="logo" src={currentuser.currentUser?.photoURL} style={{cursor:"pointer"}} alt="user" ></img>}
        </div>
     );
}

export default Navbar;