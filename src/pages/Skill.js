import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorsharp from "../assets/img/color-sharp.png";
import Three from "../components/Three";


function Skill() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return ( 
    <div>
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="skill-bx">
                        <h2>skills</h2>
                        <p>To  learn more skills and combine them in creative ways</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="image0"/>
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image1"/>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="image2"/>
                                <h5>React js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image3"/>
                                <h5>Java</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <Three/>
            </div>
        </div>
  
        <img className="background-image-left" src={colorsharp} alt="slide" />

    </section>
    </div> 
    );
}

export default Skill;