import React from "react";
import Card from '@mui/material/Card';
import { CardActions, CardActionArea, CardMedia, Typography,CardContent,Grid } from "@mui/material";
import {Button, Link} from "@material-ui/core";
import h3 from '../Images/h3.png';
import h1 from '../Images/h1.webp'
import h from '../Images/h.png';
import s3 from '../Images/s3.jpg';
import { makeStyles } from "@material-ui/styles";
import Footer from "./Footer";
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles({
  root: {
      minwidth: 200,

   
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});



function Admin(){
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  
  
  
    return(
      <div style={{ backgroundImage: `url(${s3})`, backgroundSize: "cover" }} >
          <a href="/" class="btn btn-info btn-lg" style={{marginLeft:"1200px",backgroundColor:"2E3B55"}} > Logout  </a>


        
        <h1 align="center">Welcome admin!!!!!!</h1>
    
      
        
        
        <Grid container spacing={4} className={classes.gridContainer} justify="center">
        <Grid item xs={12} sm={10} md={6}>
        <Card sx={{ maxWidth: "auto", margin: "80px 20px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={h3}
          alt="bug"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Manage Employees
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href="/employee">
          Click Here.....
        </Link>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={10} md={5}>
    <Card sx={{ maxWidth: "auto", margin: "80px 2px"}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image={h}
        alt="bug"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Manage Bugs
        </Typography>
       
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Link href="/bug">
        Click Here.....
      </Link>
    </CardActions>
  </Card>
  </Grid>
  <Grid item xs={12} sm={10} md={7}>
  <Card sx={{ maxWidth: "auto", margin: "80px 100px"}}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="200"
      image={h1}
      alt="bug"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Manage Projects
      </Typography>
      
    </CardContent>
  </CardActionArea>
  <CardActions>
  <Link href="/project">
      Click Here......
    </Link>
  </CardActions>
</Card>
</Grid>
</Grid>

<Footer/>
    </div>
       );
}
export default Admin;