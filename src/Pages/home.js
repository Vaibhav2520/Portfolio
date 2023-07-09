import "../Styles/home.css";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import linkedinlogo from "../Images/linkedin-logo-24.png";
import geeksforgeekslogo from "../Images/geeksforgeeks_logo_icon_248241.png";
import githublogo from "../Images/github-logo-24.png";
import coverimg from "../Images/IMG_2392.PNG";
import About from "./about";
import Skills from "./skills";
import Education from "./education";
import Experince from "./experince";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

function Home() {
  const socialList = [
    {
      name: "LinkedIn",
      logo: <img src={linkedinlogo} alt="linkedin" width={45} />,
      url: "https://www.linkedin.com/in/vaibhav-sulakhe-340b3a193/",
    },
    {
      name: "GeeksforGeeks",
      logo: <img src={geeksforgeekslogo} alt="geeksforgeeks" width={45} />,
      url: "https://auth.geeksforgeeks.org/user/sulakhevaibhav",
    },
    {
      name: "GitHub",
      logo: <img src={githublogo} alt="github" width={45} />,
      url: "https://github.com/Vaibhav2520",
    },
  ];

  return (
    <>
      <div>
        <Grid container className="main-container">
          <Grid item>
            <div className="home-container" id="home">
              <div className="intro-section">
                <p>
                  Hi I'm{" "}
                  <span className="dark-color">
                    <Slide right>Vaibhav Sulakhe</Slide>{" "}
                  </span>
                </p>
                <p>Software Engineer</p>
                <Button
                  variant="contained"
                  className="resume-button"
                  href="https://drive.google.com/file/d/1nYQIxkV-f1LMa7xoh8iuzkG2OAzz8N4-/view?usp=drive_link"
                  target='_blank'
                >
                  RESUME
                </Button>
                <Grid container xs={12} md={6} className="social-container">
                  {socialList.map((list) => (
                    <Grid item xs={3} className="social-item">
                      <a href={list.url} className="social-anchor">
                        {list.logo}
                      </a>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item className="cover-container">
            <Fade top>
              <img
                src={coverimg}
                alt="coverphoto"
                className="width-container"
              />
            </Fade>
          </Grid>
        </Grid>
        <About />

        <Skills />

        <Education />
        <Experince />
      </div>
    </>
  );
}

export default Home;
