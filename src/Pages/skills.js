import { Button, Grid } from "@mui/material";
import React from "react";
import Title from "../Components/title";
import "../Styles/skill.css";
import "boxicons";

function Skills() {
  const skillsList = [
    {
      name: "Java",
      logo: "java",
    },
    {
      name: "JavaScript",
      logo: "javascript",
    },
    {
      name: "HTML5",
      logo: "html5",
    },
    {
      name: "CSS3",
      logo: "css3",
    },
    {
      name: "ReactJS",
      logo: "react",
    },
    {
      name: "Spring-Boot",
      logo: "spring-boot",
    },
    {
      name: "GitHub",
      logo: "github",
    },
    {
      name: "BootStrap",
      logo: "bootstrap",
    },
  ];
  return (
    <div className="div-container">
      <Title text="Skills" />
      <Grid container xs={12} md={6} sm={12} className="skill-container" justifyContent='space-around'>
        {skillsList.map((skill) => (
          <Grid item xs={6} md={3} sm={3} className="skill-item">
            <Button variant="contained" className="button-skill">
              <box-icon type="logo" name={skill.logo} size="lg"></box-icon>
              {skill.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Skills;
