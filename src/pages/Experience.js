import React from "react";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {MdSchool} from "react-icons/md";
import {GiBookmarklet} from "react-icons/gi"

export default function Experience() {
    return (  
    <div className="Experience">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="2005-2018"
            iconStyle={{background:"#3e497a",color:"#fff"}}
            icon={<GiBookmarklet></GiBookmarklet>}
            >
            <h3 className="react-timeline-element-title">
                Primary Eductaion
            </h3>
            <p> School:Senthil Kumaran Matric Hr.sec.school
                Place:Tiruchendur-Thoothukudi District.
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="2019-2021"
            iconStyle={{background:"#3e497a",color:"#fff"}}
            icon={<GiBookmarklet></GiBookmarklet>}
            >
            <h3 className="react-timeline-element-title">
                Secondary Eductaion
            </h3>
            <p>
                School:Senthil Kumaran Matric Hr.sec.school
                Place:Tiruchendur-Thoothukudi District.
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="2021-2025"
            iconStyle={{background:"#3e497a",color:"#fff"}}
            icon={<MdSchool></MdSchool>}
            >
            <h3 className="react-timeline-element-title">
                Under Graduate Eductaion (pursuing B.tech-IT)
            </h3>
            <p>College:Francis Xavier Engineering College
               Place:Tirunelveli
            </p>
            </VerticalTimelineElement>
          
        </VerticalTimeline>

    </div> 
    );
}
