import { Grid } from "@mui/material";
import React from "react";
import Title from "../Components/title";
import "../Styles/about.css";
import Fade from 'react-reveal/Fade';
function About() {
  return (
    <div id="about">
      <Title text="About Me" />

      <Grid className="about-container">
      <Fade top> 
        <ul>
          <li>Product Developed Intern, @KIVIO SOLUTION, Bangalore, India</li>
          <li>Ex-Intern, @Unisight, Pune, India</li>
        </ul>
        </Fade>
      </Grid>
    </div>
  );
}

export default About;
