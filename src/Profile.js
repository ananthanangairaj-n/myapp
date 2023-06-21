import React, { useContext, useState ,useEffect} from "react";
import { Appcontext } from "./Navi";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { getDownloadURL, listAll, ref ,getMetadata  } from "firebase/storage";
import { updateProfile ,signOut } from "firebase/auth";
import { storage ,auth} from "./firebase";
import {Post} from "./Post";
import "./profile.css";
import { useNavigate } from "react-router";
import { Profilepost } from "./Profilepost";


export function Profile() {
    const {userauth } = useContext(Appcontext);
    const [text,settext] = useState("");
    const [name,setname] = useState(userauth.displayName);
    const [email,setemail] = useState(userauth.email);
    const [phonenumber,setphonenumber] = useState(userauth?.phoneNumber==="" ? "0" : userauth.phoneNumber);
    const [photo,setphoto] = useState(userauth?.photoURL);
    const  navigate = useNavigate();
    const [style,setstyle] = useState({});
    const[imageList,setimagelist] = useState([]);
    const imagelistref = ref(storage,"Post/");
   

    useEffect(()=>{
        listAll(imagelistref).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    const url1 = new URL(url);
                    const path = url1.pathname; 
                    const urlPath = path;
                    const decodedPath = decodeURIComponent(urlPath.substring(urlPath.indexOf('/o/') + 3));
                    const forestref = ref(storage,decodedPath);
                    getMetadata(forestref).then((metadata1)=>{
                        if(metadata1.customMetadata.uid === userauth.uid)
                        {
                            setimagelist((prev)=>[...prev,url])
                        }
                    }).catch((error)=>{console.log(error)})
                 
                })
            })
        })
        // console.log(imageList);
    },[])

    const imagedelete = (url) =>{
        console.log(url);
        const con =imageList.filter((itemurl)=> {return itemurl!=url});
        setimagelist(con);
    }

    const handleLOgout = async() =>{
        await signOut(auth);
        navigate("/");
    }

    const handleupdate = () =>{
        console.log(name,email,phonenumber);
        updateProfile(userauth, {displayName:name,photoURL:photo,email:email,phoneNumber:phonenumber});
        settext("profile updated");
    }
    
    React.useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 900) {
            setstyle({width:" 31rem",float:"none",marginTop:"3%"});
          } else {
            setstyle({width:" 20rem",float:"none",marginTop:"3%"});
          }
        }
    handleResize();
    })

    return ( 
        <div>
        <Navbar />
       <center>      
          <img src={photo} alt="userlogo" style={{marginTop:"2.5%"}}/>
         <div className="card" style={style}>

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
        </div>   
        <div class="row">
                 <div class="col-sm">
                 <button class="btn2" onClick={handleupdate} >Update</button>
                </div>
                <div class="col-sm">
                 <button   class="btn2" onClick={handleLOgout}> logout</button>
                </div>
            </div>
        </div>
        <h4  className="text1"  style={{color:"burlywood",fontFamily:"fantasy",fontSize:"larger"}}>{text}</h4>
        </center>
        <div>
            {
            imageList.map((url)=>
            <Profilepost url ={url} onDelete = {imagedelete} />    
            )}
        </div> 
            
        </div> );
}

