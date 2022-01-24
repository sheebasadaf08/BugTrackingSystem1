import { Button, FormControl, FormGroup, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react'
import s3 from '../Images/s3.jpg';


import EmployeeService from '../Service/EmployeeService';
import Footer from './Footer';

class CreateBugComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            empName: '',

            email: '',
            contactNo:''
            
        }
        this.changeempNameHandler = this.changeempNameHandler.bind(this);
       this.changeemailHandler=this.changeemailHandler.bind(this);
        this.changecontactNoHandler=this.changecontactNoHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({empName: employee.empName,
                   
                    email : employee.email,
                    contactNo:employee.contactNo



                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {empName: this.state.empName, email:this.state.email , contactNo: this.state.contactNo,bug:this.state.bug};
        let employee1 = {id:this.state.id,empName: this.state.empName, email:this.state.email , contactNo: this.state.contactNo,bug:this.state.bug};
        console.log('employee => ' + JSON.stringify(employee1));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employee');
            });
        }else{
            EmployeeService.updateEmployee(employee1).then( res => {
                this.props.history.push('/employee');
            });
        }
    }
    
    changeempNameHandler= (event) => {
        this.setState({empName: event.target.value});
    }
    changeemailHandler= (event) => {
        this.setState({email: event.target.value});
    }

   

    changecontactNoHandler= (event) => {
        this.setState({contactNo: event.target.value});
    }
   


    cancel(){
        this.props.history.push('/employee');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div style={{ backgroundImage: `url(${s3})`, backgroundSize: "cover" }}>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = " card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <FormGroup className = "card-body">
                                  
                                    <FormControl className = "form-group">
                                            <Typography>  Id: </Typography>
                                            <TextField placeholder="Id" name="id" className="form-control" 
                                                value={this.state.id} /><br></br>
                                        </FormControl>
                                       
                                        <FormControl className = "form-group">
                                          
                                            <TextField placeholder="empName" name="empName" className="form-control" 
                                                value={this.state.empName} onChange={this.changeempNameHandler}/> <br></br>
                                        </FormControl>
                                        <FormControl className = "form-group">
                                            
                                            <TextField placeholder="email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeemailHandler}/> <br></br>
                                        </FormControl>
                                        <FormControl className = "form-group">
                                            
                                            <TextField placeholder="contactNo" name="contactNo" className="form-control" 
                                                value={this.state.contactNo} onChange={this.changecontactNoHandler}/> <br></br>
                                        </FormControl>
                                       

                                        <Button variant="contained" color="primary" onClick={this.saveOrUpdateEmployee} >Save</Button> <br></br>
                                       <Button variant="contained" color="secondary" onClick={this.cancel.bind(this)}>Cancel</Button>
                                      
                                    
                                </FormGroup>
                            </div>
                        </div>

                   </div>
                   <Footer/>
             
            </div>
        )
    }
}

export default CreateBugComponent
