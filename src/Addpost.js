import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { ref, uploadBytes } from "firebase/storage";
import { auth, storage } from "./firebase";
import { MdOutlineDriveFileMove } from "react-icons/md";
import "./App.css";
import { Appcontext } from "./Navi";


function Addpost() {
    const [typefile,settypefile] = useState();
    const [text,settext] = useState("");
    const {userauth} = useContext(Appcontext);
    const handleclick = () => {
    if(typefile== null) return;
    const imageref = ref(storage,`Post/${typefile.name +userauth.currentUser.uid}`)
    uploadBytes(imageref,typefile).then(()=>{settext("image uploaded")})

    }

    return ( <div>
    <Navbar />
    <div className="d-flex align-items-center justify-content-center">
    <div className="fileupload">
        <input  type="file" id="up" style={{display:"none"}} onChange={(e)=>{settypefile(e.target.files[0])}}/>
        <label for="up" style={{cursor:"pointer"}}><MdOutlineDriveFileMove size={100} ></MdOutlineDriveFileMove></label>
        <br></br>
        <button type="submit" className="btn2" onClick={handleclick}>AddPost</button>
    </div>
    </div>
    <br></br>
    <center className="text1" style={{color:"burlywood",fontFamily:"fantasy",fontSize:"larger"}}>
    <input type="text"/>
    {text}</center>
    </div>);
}


export default  Addpost;