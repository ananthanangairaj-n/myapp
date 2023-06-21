import React, { useContext, useState } from "react";
import { Appcontext } from "./Navi";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { updateProfile  } from "firebase/auth";


export function Profile() {
    const {userauth } = useContext(Appcontext);
    const [text,settext] = useState("");
    const [name,setname] = useState(userauth.displayName);
    const [email,setemail] = useState(userauth.email);
    const [phonenumber,setphonenumber] = useState(userauth?.phoneNumber==="" ? "0" : userauth.phoneNumber);
    const [photo,setphoto] = useState(userauth?.photoURL);
    const handleupdate = () =>{
        console.log(name,email,phonenumber);
        updateProfile(userauth, {displayName:name,photoURL:photo,email:email,phoneNumber:phonenumber});
        settext("profile updated");
    }


    return ( 
        <div>
        <Navbar />
       <center>      
          <img src={photo} alt="userlogo" style={{marginTop:"2.5%"}}/>
    
         <div className="card" style={{width:" 60rem",float:"none",marginTop:"3%"}}>

         <div class="container" style={{padding:"7%"}}>
         <div class="row">
                <div class="col-sm">
                <label >userUid</label>
                </div>
                <div class="col-sm">
                <input type="text"  value={userauth.uid} readOnly/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                <label >userName</label>
                </div>
                <div class="col-sm">
                <input type="text"  onChange={(e)=>setname(e.target.value)} value={name}/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                <label >userEmail</label>
                </div>
                <div class="col-sm">
                <input type="text"  onChange={(e)=>setemail(e.target.value)} value={email}/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                <label >userPhonenumber</label>
                </div>
                <div class="col-sm">
                <input type="text"  onChange={(e)=>setphonenumber(e.target.value)} value={phonenumber}/>
                </div>
            </div>
            <div class="row">
                <center><button class="btn2" onClick={handleupdate} >Update</button></center>
            </div>
        </div>   
        </div>
        {text}
        </center>
       
        </div> );
}

