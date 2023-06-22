import React, { useState } from "react";
import contactimg from "../assets/img/contact-img.svg"

function Connect() {

    const initialformdetails = {
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        message:''
    }
    const [formdetails,setformdetails] = useState(initialformdetails);
    const [status,setstatus] = useState({});
    const [send ,setsend ] = useState("send");
    const onformupdate  = (category,value) =>{
        setformdetails({...formdetails,[category]:value});
    }
    const handlesubmit = (e) =>{
            console.log(e)
    }

    return ( 
        <div className="contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col md-6">
                        <img src={contactimg} alt="contactimg" />
                    </div>
                    <div className="col md-6">
                    <h2>get in touch</h2>
                    <div className="card" style={{width:"auto"}}>
                    <form onSubmit={handlesubmit}>
                        <div className="row">
                            <div className="col ">
                                <input value={formdetails.firstname} type="text" placeholder="firstname"
                                onChange={(e)=>{onformupdate('firstname',e.target.value)}} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col ">
                                <input value={formdetails.lastname} type="text" placeholder="lastname"
                                onChange={(e)=>{onformupdate('lastname',e.target.value)}} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col ">
                                <input value={formdetails.email} type="text" placeholder="email"
                                onChange={(e)=>{onformupdate('email',e.target.value)}} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col ">
                                <input value={formdetails.phonenumber} type="text" placeholder="phonenumber"
                                onChange={(e)=>{onformupdate('phonenumber',e.target.value)}} />
                            </div>
                        </div>
                         <div className="row">
                            <div className="col">
                                <textarea rows={6} value={formdetails.message} type="text" placeholder="message"
                                onChange={(e)=>{onformupdate('message',e.target.value)}} />
                                <button type="submit" className="btn btn-primary btn-sm" >{send}</button>
                            </div>
                        </div>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Connect;