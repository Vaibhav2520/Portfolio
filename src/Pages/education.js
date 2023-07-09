import { Grid, Paper } from "@mui/material";
import React from "react";
import Title from "../Components/title";
import collegeimg from "../Images/mit-world-peace-university-wpu-pune-logo1.png";
import "../Styles/education.css";
import scalerimg from "../Images/Scaler_Logo_WhiteBG.jpg";
import Fade from "react-reveal/Fade";

function Education() {
  const educationList = [
    {
      img: <img src={collegeimg} alt="CollegeImg" width={220} />,
      heading: "Bachelor of Technology",
      date: "June'18 - July'22",
      place: "Pune,India",
      cgpa: "CGPA: 8.82",
    },
    {
      img: <img src={scalerimg} alt="ScalerImg" width={300} />,
      heading: "Course Certification",
      date: "Oct'22 - Present",
      place: "Bangalore,India",
      cgpa: "",
    },
  ];
  return (
    <div id="education">
      <Title text="Education" />

      {educationList.map((list) => (
        <Grid container className="education-container">
          <Fade left>
          <Grid items>{list.img}</Grid>
        </Fade>
        <Fade right>
          <Grid item className="education-info">
            <b>
              <h2>{list.heading}</h2>
            </b>
            <br />
            {list.date} &emsp;&emsp;&emsp;&emsp;&emsp; {list.place}
            <br />
            <br />
            {list.cgpa}
          </Grid>
        </Fade>
        </Grid>
      ))}
    </div>
  );
}

export default Education;
