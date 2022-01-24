import React from "react";
import Card from '@mui/material/Card';
import { CardActions, CardActionArea, CardMedia, Typography,CardContent } from "@mui/material";
import {Grid, Link, makeStyles} from "@material-ui/core";
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


function Employeem(){
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return(
        <Grid container spacing={4} className={classes.gridContainer} justify="center">

      <Grid item xs={12} sm={10} md={5}>
      <Card sx={{ maxWidth: 345, margin: "80px 2px" }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom >
              Bug Tracking System
          </Typography>

          <Typography variant="h5" component="h2">
            Bug Module
          </Typography>

          <Typography variant="body2" component="p">
              <p>Bug Id: 1</p>
          <p> In-progress</p>
          <p> On-Hold</p>
          <p> Closed</p>
          </Typography>
        </CardContent>
      <CardActions>
      <Link href="/bugv">
          Know More..
        </Link>
      </CardActions>
    </Card>
    </Grid>
<Grid item xs={12} sm={10} md={5}>
<Card sx={{ maxWidth: 345, margin: "80px 2px" }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom >
              Bug Tracking System
          </Typography>

          <Typography variant="h5" component="h2">
            Bug Module
          </Typography>

          <Typography variant="body2" component="p">
              <p>Bug Id:2</p>
          <p> In-progress</p>
          <p> On-Hold</p>
          <p> Closed</p>
          </Typography>
        </CardContent>
      <CardActions>
      <Link href="/bugv">
          Know More..
        </Link>
      </CardActions>
    </Card>

</Grid>
<Grid item xs={12} sm={10} md={5}>
<Card sx={{ maxWidth: 345, margin: "80px 2px" }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom >
              Bug Tracking System
          </Typography>

          <Typography variant="h5" component="h2">
            Bug Module
          </Typography>

          <Typography variant="body2" component="p">
              <p>Bug Id:3</p>
          <p> In-progress</p>
          <p> On-Hold</p>
          <p> Closed</p>
          </Typography>
        </CardContent>
      <CardActions>
      <Link href="/bugv">
          Know More..
        </Link>
      </CardActions>
    </Card>

</Grid>
</Grid>


       );
}
export default Employeem;