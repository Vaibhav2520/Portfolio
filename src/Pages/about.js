
import { Grid } from '@mui/material';
import React from 'react';
import Title from '../Components/title';
import "../Styles/about.css";
function About() {
    


  return (
    <div>
        <Title text='About Me'/>
        
        <Grid className='about-container'>
        
                <ul>
                    <li>
                        Product Developed Intern, @KIVIO SOLUTION, Bangalore, India
                    </li>
                    <li>
                        Ex-Intern, @Unisight, Pune, India 
                    </li>
                </ul>
            
        </Grid>
    </div>
  )
}

export default About