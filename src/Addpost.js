import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { ref, uploadBytes} from "firebase/storage";
import { storage } from "./firebase";
import { MdOutlineDriveFileMove } from "react-icons/md";
import "./App.css";
import { Appcontext } from "./Navi";
import 'bootstrap/dist/css/bootstrap.css';


function Addpost() {
    const [typefile,settypefile] = useState();
    const [text,settext] = useState("");
    const [description,setdescription] = useState("");
    const {userauth} = useContext(Appcontext);
    const handleclick = () => {
    if(typefile== null) return;
    const metadata = {
        customMetadata:{
        uid:userauth.uid,
        name:userauth.displayName,
        email:userauth.email,
        description :description,
        }
      }
      console.log(metadata);

    const filename = `Post/${typefile.name +userauth.uid+userauth.displayName}`;
    const filename2 = `Metadata/${userauth.uid+userauth.displayName}.json`;
    const imageref = ref(storage,filename);
    const imageref2 = ref(storage,filename2);
    uploadBytes(imageref,typefile,metadata).then(()=>{settext("image uploaded")})
    //updateMetadata(imageref,metadata).then((met)=> {console.log(met)}).catch((error)=>{console.log(error)});

}

    return ( <div>
    <Navbar />
    <div class="card" style={{width:"27rem",height:"27rem",float:"none",display:"block",marginLeft:"auto",marginRight:"auto"}}>
    <div className="fileupload">
        <br></br>
        <input  type="file" id="up" style={{display:"none"}} onChange={(e)=>{settypefile(e.target.files[0])}}/>
        <label for="up" style={{cursor:"pointer"}}><MdOutlineDriveFileMove size={100} ></MdOutlineDriveFileMove></label>
        <br></br>
        <br></br>
        <button type="submit" className="btn2" onClick={handleclick}>AddPost</button>
        <br></br>
        <br></br>
        <input type="text" onChange={(e)=>{setdescription(e.target.value)}} placeholder="Description.." />
    </div>
    </div>
    <br></br>
    <center className="text1"  style={{color:"burlywood",fontFamily:"fantasy",fontSize:"larger"}}>
    <input type="text"/>
    {<center class="carousel" >{text}</center>}</center>
    
    </div>);
}


export default  Addpost;