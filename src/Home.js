import React, { useEffect, useState } from "react";
import './home.css'
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { getDownloadURL,  listAll, ref } from "firebase/storage";
import { storage } from "./firebase";
import {Post} from "./Post";



function Home() {
    const[imageList,setimagelist] = useState([]);
    const imagelistref = ref(storage,"Post/");
    useEffect(()=>{
        listAll(imagelistref).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setimagelist((prev)=>[...prev,url])
                })
            })
        })
        // console.log(imageList);
    },[])
   
       
    
    return ( 
        <div>
        <div>
            <Navbar/>
        </div >
        <div>
            {
            imageList.map((url)=><>
            <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
            <Post url ={url}/>
            </div></>
            )}
        </div>
        </div>
        
     );
}

export default Home;
