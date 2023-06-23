import React, { useState } from "react";
import "../App.css";
import astronauts from "../assets/img/astronaut.png";
import {styled} from "styled-components";
import Three from "../components/Three";



function Home() {

  const Img = styled.img`

  position:absolute;
  animation: motion 3s infinite ease alternate ;
  object-fit: contain;

  @keyframes motion {
    to{
      transform: translateY(60px);
    }
  }
`;
  return ( 
      <div>
        <div className="home" >
          <div className="container">
          <div className="row">
              <div className="col">
                  <div className="about">
                    <h2>Hi, My Name is Anantha NanagaiRaj N</h2>
                    <p>A software developer with a passion for learning and developing skills and creating.</p>
                  </div>
              </div>
              <div className="col">
                <div className="homeimage">
                  <Img src={astronauts} alt="imageastronauts"/>
                </div>
              </div>
            </div>
           
          </div>
        </div>
  
      </div>
      );
}

export default Home;