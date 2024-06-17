import React, { useState } from "react";
import { storage } from "./firebase";
import { getMetadata,ref} from "firebase/storage";
import {FaUserTag} from "react-icons/fa";
export function Post(props) {
  
  const [metadata,setmetadata] = useState({});
  const url1 = new URL(props.url);
  const path = url1.pathname; 
  const urlPath = path;
  const decodedPath = decodeURIComponent(urlPath.substring(urlPath.indexOf('/o/') + 3));
  const forestref = ref(storage,decodedPath);
  getMetadata(forestref).then((metadata1)=>{setmetadata(metadata1.customMetadata);}).catch((error)=>{console.log(error)})


  return ( 
   <div  class="card " style={{width:" 20rem" ,height:"auto",justifyContent:"center",alignItems:"center",display:"flex"}}>
        <img src={props.url} class="card-img-top" style={{width:"200px",height:"200px"}} alt="..."/>
          <div class="card-body">
            <p class="card-text" ></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Post by <br></br>  <FaUserTag></FaUserTag> {metadata?.name} </li>
          <li class="list-group-item" >Description <br></br>{metadata?.description} </li>
        </ul>
   </div>

    );
}

