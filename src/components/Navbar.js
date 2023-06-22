import React from "react";
import {useNavigate} from "react-router-dom";
import {HiHome} from "react-icons/hi";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const navigate = useNavigate();
    return ( 
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="navbar-brand">Anantha</div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
                <li className="nav-item nav-link mx-3" onClick={()=>{navigate("/")}}><HiHome size={25}></HiHome></li>
                <li className="nav-item nav-link mx-3" onClick={()=>{navigate("/skill")}}>Skill</li>
                <li className="nav-item nav-link mx-3 "onClick={()=>{navigate("/studies")}}>About</li>
         <HashLink to='/connect'>
                <button className="btn btn-secondary btn-sm mx-3"><span>Let’s Connect</span></button>
          </HashLink>
          </ul>
        </div>
      </nav>
     );
}

export default Navbar;