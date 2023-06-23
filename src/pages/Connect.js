import React, { useRef, useState } from "react";
import contactimg from "../assets/img/contact-img.svg"
import {BsBoxArrowRight} from "react-icons/bs";
import "../App.css";
import emailjs from '@emailjs/browser';


function Connect() {

    const [state,setstate] = useState(false);
    const form = useRef();

    const handlesubmit = (event) =>{
         event.preventDefault();
        emailjs.sendForm('service_uae4ztb', 'template_tr5fmao', form.current, 'mrzdArcaEQm1EUp1b')
        .then((result) => {
            console.log(result.text);
            setstate(true);
        }, (error) => {
            console.log(error.text);
         
        });
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
                        <form  ref={form} onSubmit={handlesubmit} >
                            <input type="text" placeholder="name" name="name" />
                            <input type="email"  placeholder="email"   name="email"/>
                            <textarea rows={4}  placeholder="message"  name="message" />
                            <br></br>
                            <center><button type="submit" value="send" className="btn btn-success ">send email {"   "}<BsBoxArrowRight ></BsBoxArrowRight></button></center>
                        </form>
                        {state && <h5>Message Sent</h5> }
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