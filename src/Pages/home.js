
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
            <div className="home-container">
              <div className="intro-section">
                <p>
                  Hi I'm <span className="dark-color">Vaibhav Sulakhe </span>
                </p>
                <p>Software Engineer</p>
                <Button variant="contained" className="resume-button">
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
            <img src={coverimg} alt="coverphoto"  className='width-container'/>
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
