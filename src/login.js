import React, { useState } from "react";
import './login.css';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, googleprovider } from "./firebase";
import {useNavigate } from 'react-router-dom';
 
export function Login() {

    const [visible,setvisible] = useState(false);
    const [type,settype] = useState("password");
    const navigate = useNavigate();

    const handlevisible = () => {
        type==="password" ? settype("text") : settype("password");
        setvisible(!visible);
    }

    const handleclick = async() =>{
        const res = await(signInWithPopup(auth,googleprovider));
        console.log(res);
        navigate('/app');
    }
    const handlesubmit = ()=>{
        navigate('/app');
    }


    return ( 
        <div className="login">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLkHEGZo-Sj8I4jJ-AL1kVcqlCTHYNFPxKQ&usqp=CAU" alt="no" height={"100px"} width={"100px"}></img>
                <div className="col">
                    <div className="logininside">
                        <center>
                        <div className="inputbox">
                        <input type="text"  placeholder="email.."/>
                        </div>
                        <div className="inputbox">
                        <input type={type}  placeholder="password.."/>
    
                        {visible===false ? <AiFillEyeInvisible onClick={handlevisible} size={25}></AiFillEyeInvisible> : <AiFillEye onClick={handlevisible} size={25}> </AiFillEye> }
                
                        </div>
                        </center>
                        <button type="submit" className="btn" onClick={handlesubmit}>submit</button> 
                        <FcGoogle onClick={handleclick} size={20}></FcGoogle>
                        
                    </div>
                </div>
        </div>
     );
}

