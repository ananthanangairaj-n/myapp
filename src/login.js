import React, { useContext, useState } from "react";
import './login.css';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth, googleprovider } from "./firebase";
import {useNavigate } from 'react-router-dom';
import { Appcontext } from "./Navi";
 
export function Login() {

    const [visible,setvisible] = useState(false);
    const [email,setemail] = useState("");
    const [pass,setpass] = useState("");
    const [type,settype] = useState("password");
    const navigate = useNavigate();
    const[error,seterror]= useState("");
    const {setuserauth} = useContext(Appcontext);
    
    const handlevisible = () => {
        type==="password" ? settype("text") : settype("password");
        setvisible(!visible);
    }


    const handleclick = async() =>{
        const res = await(signInWithPopup(auth,googleprovider));
        console.log(res);
        onAuthStateChanged(auth,(current)=>{setuserauth(current)})
        navigate('/home');
    }

    const handlelogin= async() =>{
        try{
        const res = await signInWithEmailAndPassword(auth,email,pass);
        console.log(res);
        onAuthStateChanged(auth,(current)=>{setuserauth(current)})
        navigate('/home');
        }
        catch(error)
        {
            seterror("Invalid password or email");
        }

    }
    const handlesubmit = async()=>{
        navigate('/home');
        setuserauth("");
    }


    return ( 
        <div className="login">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLkHEGZo-Sj8I4jJ-AL1kVcqlCTHYNFPxKQ&usqp=CAU" alt="no" className="logoimg" height={"100px"} width={"100px"}></img>
                <div className="col1">
                    <div className="logininside">
                        <center>
                        <div className="inputbox">
                        <input type="text"  placeholder="email.." onChange={(e)=>{setemail(e.target.value)}} />
                        </div>
                        <div className="inputbox">
                        <input type={type}  placeholder="password.." onChange={(e)=>{setpass(e.target.value)}}  />
                        {visible===false ? <AiFillEyeInvisible onClick={handlevisible} size={25}></AiFillEyeInvisible> : <AiFillEye onClick={handlevisible} size={25}> </AiFillEye> }
                
                        </div>
                        </center>
                        <button type="submit" className="btn1" onClick={handlelogin}>Login</button> 
                        <FcGoogle style={{cursor:"pointer"}} onClick={handleclick} size={20}></FcGoogle>
                    </div>
                </div>
                <h6 style={{color:"red",textAlign:"center"}}>{error}</h6>
                <h4 className="skip" onClick={handlesubmit}>Do you want to skip?</h4>
                <h4 className="skip" onClick={()=>{navigate('/createuser')}}>signup</h4>
                <h6>copyrights-2023 @anand</h6>
        </div>
     );
}

