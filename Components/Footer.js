import { AppBar, Box, Container, Grid, Toolbar, Typography } from "@material-ui/core";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div class="social-container">
       <h4 align="center">All Rights Reserved @BugTracking System</h4>
      <h5>Follow us on</h5>
      
    <a href="#"
      className="youtube social">
      <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>

    
<a href="#"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="#" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="#"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>

    </div>
    
  );
}

/* import React from "react";
export default function Footer(){
  return(
  <footer>
    <AppBar style={{background:'#2E3B55', position:'inherit'}}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit" >
              All Rights Reserved @Sheeba
                </Typography>
            </Toolbar>
          </Container>
        </AppBar>
  </footer>
  )
} */
