import React from 'react';
import { Grid,Paper,Avatar, TextField, FormControlLabel, Checkbox, Button,Typography,Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import s3 from '../Images/s3.jpg';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Footer from './Footer';

const ChangePassword=()=>{
    const PaperStyle={padding:20,height:'80vh',width:300,margin:'20px auto',backgroundColor:'rgba(52, 52, 52, 0.8)',
    border:'2px solid white',
    borderRadius: 50
    }
    const avatarstyle={backgroundColor:'#1c54b2'}
    const btnstyle={margin:'10px 0'}

    const initialValues = {
        newPassword: '',
        confirmPassword: ''
    }
    const validationSchema = Yup.object().shape({
        newPassword: Yup.string().min(8, "Password length should be in length 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password doesn't match").required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
    return(
        <div>
        <Grid style={{backgroundImage:`url(${s3})`, backgroundSize:"cover"}}>
            <Paper elevation={20} style={PaperStyle}>
                <Grid align="center">
            <Avatar style={avatarstyle}><LockOutlinedIcon/></Avatar> 
            <h2 style={{color:"white"}}>Change Password</h2>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props) => (
                <Form>
                <Field as={TextField} label="New Password" style={{color:"white"}}placeholder='Enter New Password' name="newPassword" type='password' required fullWidth helperText={<ErrorMessage name="newPassword" />}style={{color:"white"}}/>
                <Field as={TextField} label="Confirm Password" placeholder='Confirm Password' name="confirmPassword" type='password' required fullWidth helperText={<ErrorMessage name="confirmPassword" />}/>
                 <Button type="submit"  color='primary' variant='contained' disabled={props.isSubmitting} style={btnstyle} fullWidth >{props.isSubmitting ? "Loading" : "Submit"}</Button>
                 <br></br> 
                 </Form>
                    )}
                </Formik>
                </Paper>
          </Grid>  
          <Footer/>
          </div>      
    )
}

export default ChangePassword