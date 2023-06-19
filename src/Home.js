import React, { useEffect, useState } from "react";
import './home.css'
import Navbar from "./Navbar";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./firebase";


function Home() {
    const[imagelist,setimagelist] = useState([]);
    const imagelistref = ref(storage,"Post/");
    useEffect(()=>{
        listAll(imagelistref).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setimagelist((prev)=>[...prev,url])
                })
            })
        })
    },[])
    return ( 
        <div>
            <Navbar/>
            {imagelist.map((url)=>{
               return <img src= {url}  alt="userpost" style={{margin:"30px"}} height={"300"} width={"200"}/>
            })}
        </div>
        
     );
}

export default Home;
