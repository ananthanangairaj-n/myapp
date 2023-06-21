import React, { useState } from "react";
import { storage } from "./firebase";
import { deleteObject, getMetadata,ref} from "firebase/storage";
import {FaUserTag} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router";

export function Profilepost(props) {
  
  const [metadata,setmetadata] = useState({});
  const [state,setstate] = useState(false);
  const url1 = new URL(props.url);
  const path = url1.pathname; 
  const urlPath = path;
  const decodedPath = decodeURIComponent(urlPath.substring(urlPath.indexOf('/o/') + 3));
  const forestref = ref(storage,decodedPath);
  const navigate = useNavigate();
  getMetadata(forestref).then((metadata1)=>{setmetadata(metadata1.customMetadata);}).catch((error)=>{console.log(error)})
  const handledelete =(url) =>{
   deleteObject(forestref).then(()=>{console.log("imageDeletedSuccess")}).catch((error)=>{console.log(error)});
   props.onDelete(url,forestref);
   setstate(!state);
   // navigate("/profile");
}

  return ( 
   <>
   <div  class="card"  style={{width:" 14rem" ,cursor:"pointer"}} onClick={()=>{ //handledelete(props.url)
     setstate(!state)}} >
        <img src={props.url} class="card-img-top" style={{width:"160px",height:"170px"}} alt="..."/>
          <div class="card-body">
            <p class="card-text" ></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Post by <br></br>  <FaUserTag></FaUserTag> {metadata?.name} </li>
          <li class="list-group-item">Description <br></br>{metadata?.description} </li>
        </ul>
   </div> 
   { state &&
    
    <div class="card" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Delete Message</h5>
        <button type="button" class="close" onClick={()=>{setstate(!state)}}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Are you sure you want to delete?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" style={{width:"50%"}} onClick={()=>{setstate(!state)}}>Close</button>
        <button type="button" class="btn btn-danger" style={{width:"50%"}} data-dismiss="modal" onClick={()=>{handledelete(props.url)}}>delete</button>
      </div>
    </div>
  </div>
   }
  
   </>

    );
}

