import { Button, FormControl, FormGroup, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react'

import ProjectService from '../Service/ProjectService';
import Footer from './Footer';
import s3 from '../Images/s3.jpg'

class CreateProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            projectOwner:'',
            status: ''
        }
       
        this.changeprojectOwnerHandler=this.changeprojectOwnerHandler.bind(this);
        this.changestatusHandler=this.changestatusHandler.bind(this);

        
        this.saveOrUpdateProject = this.saveOrUpdateProject.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProjectService.getProjectById(this.state.id).then( (res) =>{
                let project = res.data;
                this.setState({id: project.id,
                    projectOwner :project.projectOwner,
                    status : project.status


                });
            });
        }        
    }
    saveOrUpdateProject = (e) => {
        e.preventDefault();
        let project = { projectOwner:this.state.projectOwner , status: this.state.status};
        let project1 = {id:this.state.id,projectOwner:this.state.projectOwner, status:this.state.status };
        console.log('project => ' + JSON.stringify(project1));

        // step 5
        if(this.state.id === '_add'){
            ProjectService.createProjects(project).then(res =>{
                this.props.history.push('/project');
            });
        }else{
            ProjectService.updateProject(project1).then( res => {
                this.props.history.push('/project');
            });
        }
    }
    
    
    changeprojectOwnerHandler= (event) => {
        this.setState({projectOwner: event.target.value});
    }

   

    changestatusHandler= (event) => {
        this.setState({status: event.target.value});
    }
    
    

    cancel(){
        this.props.history.push('/project');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Project</h3>
        }else{
            return <h3 className="text-center">Update Project</h3>
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
                                          
                                            <TextField placeholder="projectOwner" name="projectOwner" className="form-control" 
                                                value={this.state.projectOwner} onChange={this.changeprojectOwnerHandler}/> <br></br>
                                        </FormControl>
                                        <FormControl className = "form-group">
                                            
                                            <TextField placeholder="status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changestatusHandler}/> <br></br>
                                        </FormControl>
                                       

                                        <Button variant="contained" color="primary" onClick={this.saveOrUpdateProject} >  Add Project</Button> <br></br>
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

export default CreateProjectComponent
