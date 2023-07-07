import { Grid } from '@mui/material'
import React from 'react'
import "../index.css";

function Title(props) {
    const text = props.text;
  return (
    <Grid container className='header-container' style={{paddingTop:'15px'}}>
    <h1>
        <u>
            {text}
        </u>
        
    </h1>
</Grid>
  )
}

export default Title