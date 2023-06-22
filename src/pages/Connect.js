import React, { useState } from "react";
import contactimg from "../assets/img/contact-img.svg"
import {BsBoxArrowRight} from "react-icons/bs";
import "../App.css";

function Connect() {

    const initialformdetails = {
        name:'',
        email:'',
        subject:'',
        message:''
    }
    const [formdetails,setformdetails] = useState(initialformdetails);
    const [state,setstate] = useState(false);
    const onformupdate  = (category,value) =>{
        setformdetails({...formdetails,[category]:value});
    }
    const handlesubmit = () =>{
            console.log(formdetails);
            setstate(true);
    }

    return ( 
        <div className="contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col md-6">
                        <img src={contactimg}  class="img-fluid"  alt="contactimg" />
                    </div>
                    <div className="col md-6">
                    <div className="card">
                    <div className="row">
                        <div className="col">
                        <h5  class="fw-bolder"><center>Get in Touch</center></h5>
                        <form onSubmit={handlesubmit} >
                            <input type="text" onChange={(e)=>{onformupdate('name',(e.target.value))}} placeholder="name" value={formdetails.name}/>
                            <input type="email" onChange={(e)=>{onformupdate('email',(e.target.value))}} placeholder="email" value={formdetails.email}/>
                            <input type="text" onChange={(e)=>{onformupdate('subject',(e.target.value))}} placeholder="subject" value={formdetails.subject}/>
                            <textarea rows={4} onChange={(e)=>{onformupdate('message',(e.target.value))}} placeholder="message" value={formdetails.message} />
                            <br></br>
                            <center><button type="submit" className="btn btn-success ">send email {"   "}<BsBoxArrowRight ></BsBoxArrowRight></button></center>
                        </form>
                        {state && <h5>Message Sent</h5>}
                        </div>
                    </div>
                
                    </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Connect;