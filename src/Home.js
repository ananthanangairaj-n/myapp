import React, { useEffect, useState } from "react";
import './home.css'
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import { storage } from "./firebase";
import {Post} from "./Post";



function Home() {
    const[imageList,setimagelist] = useState([]);
    const [emptylist] = useState([]);
    const imagelistref = ref(storage,"Post/");
    useEffect(()=>{
        listAll(imagelistref).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    console.log(item)
                    setimagelist((prev)=>[...prev,url])
                })
            })
        })
        console.log(imageList);
    },[])
   
        const forestRef = ref(storage, 
            "Post/wallpaperflare.com_wallpaper (7).jpgz9KSLlhkI3Y3nbj39zyCjqLzCoj1Anand N");

        // Get metadata properties
        getMetadata(forestRef)
        .then((metadata) => {
            // Metadata now contains the metadata for 'images/forest.jpg'
            console.log(metadata);
        })
        .catch((error) => {
            // Uh-oh, an error occurred!
            console.log(error);
        });


    
    return ( 
        <div>
        <div>
            <Navbar/>
        </div >
        <div>
            {
                
            imageList.map((url)=>
            <Post url ={url}/>
            )}
        </div>
        </div>
        
     );
}

export default Home;
