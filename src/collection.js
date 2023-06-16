import React from "react";
import './App.css';
function Collection(props) {
    return ( 
        <div className="card">
        <h3>Name:{props.person.name}</h3><h4>age:{props.person.age}</h4><h4>about:{props.person.description}</h4>
        <button className="btn1" onClick={()=>{props.onupdateuser(props.person.id,props.person.name,props.person.age,props.person.description)}}>update</button>
        <button className="btn1" onClick={()=>{props.ondeleteuser(props.person.id)}}>delete</button>
        </div>
     );
}

export default Collection;
