import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Footer from "./Footer";
import s3 from '../Images/s3.jpg';


function contact() {
    return (
        <div style={{ backgroundImage: `url(${s3})`, backgroundSize: 'cover' }} className="App">
            
            
            <Typography gutterButtom variant="h4" align="center">Contact-Us</Typography>
            <Card style={{maxWidth:600,margin:"0 auto",padding:"20px 10px"}}>
                <CardContent>
                    {/* <Typography gutterbottom variant="h6">Contact Us</Typography> */}
                    <form>
                    <Grid container spacing={1}>



                        <Grid xs={12} sm={6} item>
                            <TextField label="First Name" placeholder="Enter First Name" variant="outlined" fullWidth required/>

                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField label="LastName" placeholder="Enter Last Name" variant="outlined" fullWidth required/>
                        </Grid>

                        <Grid xs={12}  item>
                            <TextField type="Email" label="Email" placeholder="Enter your Email" variant="outlined" fullWidth required/>

                        </Grid>

                        <Grid xs={12}  item>
                            <TextField type="number" label="Contact Number" placeholder="Enter your Contact Number" variant="outlined" fullWidth required/>

                        </Grid>

                        <Grid xs={12}  item>
                            <TextField type="message" multiline rows={8} label="Comments(optional)" placeholder="Write Comments here" variant="outlined"  fullWidth/>

                        </Grid>

                        <Grid xs={12}  item>

                            <Button type="submit" variant="contained" color="primary" fullWidth > Submit</Button>
                            
                        </Grid>



                    </Grid>
                    </form>
                </CardContent>
                
            </Card>
            <Footer/>
        </div>

    )
}
export default contact