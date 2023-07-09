import { Grid } from "@mui/material";
import React from "react";
import "../index.css";
import Fade from "react-reveal/Fade";

function Title(props) {
  const text = props.text;
  return (
    <Grid container className="header-container" style={{ paddingTop: "15px" }}>
      <Fade top>
        <h1>
          <u>{text}</u>
        </h1>
      </Fade>
    </Grid>
  );
}

export default Title;
