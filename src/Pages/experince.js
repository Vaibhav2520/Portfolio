import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import img1 from "../Images/Logo-cropped-trans.png";
import img2 from "../Images/Screenshot 2023-07-04 at 4.28.28 PM.png"

import React from "react";
import Title from "../Components/title";

function Experince() {
  return (
    <div style={{backgroundColor:'bisque'}}>
      <Title text="Experince" />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="Jan'23-Mar'23"
          iconStyle={{ background:"#fff",color: "#fff" }}
          icon={<img src={img1} alt="img1" width={50} style={{display:'flex',position:'absolute',marginLeft:'7px',marginTop:'6px',marginRight:'5px'}}/>}
        >
          <h3 className="vertical-timeline-element-title">Unisight-Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Pune,India</h4>
          <br/>
          <ul>
            <li>
            Worked on ReactJS to develop job portal.
            </li>
            <li>
            Coordinated with UI UX team and converted wireframes into webpages.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="June'23 - Present"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<img src={img2} alt="img2" width={50} style={{display:'flex',marginTop:'17px',marginLeft:'7px'}}/>}
        >
          <h3 className="vertical-timeline-element-title">KIVIO SOLUTION - Product Development Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore, India 
          </h4>
          <br/>
          <ul>
          <li>Developing fronted UI in Client Projects.</li>
          <li>
          Worked with React.js in frontend and handled part of UI
            development.
            </li>
            <li>
            Working on Spring Boot for backend.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experince;
