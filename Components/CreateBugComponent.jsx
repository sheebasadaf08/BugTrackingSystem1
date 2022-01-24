import { Button, FormControl, FormGroup, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react'

import BugService from '../Service/BugService';
import s3 from '../Images/s3.jpg'
import Footer from './Footer';

class CreateBugComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            bugDesc: '',

            status: '',
            startDate:'',
            endDate:'',
            assignee:'',
            type:'',
            priority:'',
            projectId:''
        }
        this.changebugDescHandler = this.changebugDescHandler.bind(this);
      
        this.changestatusHandler=this.changestatusHandler.bind(this);
        this.changestartDateHandler=this.changestartDateHandler.bind(this);
        this.changeendDateHandler=this.changeendDateHandler.bind(this);
        this.changeassigneeHandler=this.changeassigneeHandler.bind(this);
        this.changetypeHandler=this.changetypeHandler.bind(this);
        this.changepriorityHandler=this.changepriorityHandler.bind(this);
        this.changeprojectIdHandler=this.changeprojectIdHandler.bind(this);
        this.saveOrUpdateBug = this.saveOrUpdateBug.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            BugService.getBugById(this.state.id).then( (res) =>{
                let bug = res.data;
                this.setState({bugDesc: bug.bugDesc,
                   
                    status : bug.status,
                    startDate:bug.startDate,
                    endDate: bug.endDate,
                    assignee:bug.assignee,
                    type:bug.type,
                    priority:bug.priority,
                    projectId:bug.projectId



                });
            });
        }        
    }
    saveOrUpdateBug = (e) => {
        e.preventDefault();
        let bug = {bugDesc: this.state.bugDesc, status:this.state.status , startDate: this.state.startDate,endDate:this.state.endDate, assignee:this.state.assignee,type:this.state.type,priority:this.state.priority,projectId:this.state.projectId};
        let bug1 = {id:this.state.id,bugDesc: this.state.bugDesc, status:this.state.status , startDate: this.state.startDate,endDate:this.state.endDate, assignee:this.state.assignee,type:this.state.type,priority:this.state.priority,projectId:this.state.projectId};
        console.log('bug => ' + JSON.stringify(bug1));

        // step 5
        if(this.state.id === '_add'){
            BugService.createBugs(bug).then(res =>{
                this.props.history.push('/bug');
            });
        }else{
            BugService.updateBug(bug1).then( res => {
                this.props.history.push('/bug');
            });
        }
    }
    
    changebugDescHandler= (event) => {
        this.setState({bugDesc: event.target.value});
    }
    changestatusHandler= (event) => {
        this.setState({status: event.target.value});
    }

   

    changestartDateHandler= (event) => {
        this.setState({startDate: event.target.value});
    }
    changeendDateHandler= (event) => {
        this.setState({endDate: event.target.value});
    }
  

    changeassigneeHandler= (event) => {
        this.setState({assignee: event.target.value});
    }
    changetypeHandler= (event) => {
        this.setState({type: event.target.value});
    }
    changepriorityHandler= (event) => {
        this.setState({priority: event.target.value});
    }
    changeprojectIdHandler= (event) => {
        this.setState({projectId: event.target.value});
    }

    cancel(){
        this.props.history.push('/bug');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Bug</h3>
        }else{
            return <h3 className="text-center">Update Bug</h3>
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
                                          
                                            <TextField placeholder="bugDesc" name="bugDesc" className="form-control" 
                                                value={this.state.bugDesc} onChange={this.changebugDescHandler}/> <br></br>
                                        </FormControl>
                                        <label>Status</label>

<select value={this.state.status} onChange={this.changestatusHandler}>

<option value='select'>select Status </option>

 <option value='open'>open </option>



<option value='In-Progress'>In-Progress</option>

  <option value='On-Hold'>On-Hold</option>

  <option value='Closed'>Closed</option>

 

         </select>
                                            
                                     

<lable>Start Date</lable>

<input type="date"  name="startDate" className="form-control"

    value={this.state.startDate} onChange={this.changestartDateHandler}/>



<FormControl>

<lable> End Date </lable>

<input type="date"  name="startDate" className="form-control"

    value={this.state.endDate} onChange={this.changeendDateHandler}/>

</FormControl>
                                        <FormControl className = "form-group">
                                            
                                            <TextField placeholder="assignee" name="assignee" className="form-control" 
                                                value={this.state.assignee} onChange={this.changeassigneeHandler}/> <br></br>
                                        </FormControl>
                                        <FormControl className = "form-group">
                                            
                                            <TextField placeholder="type" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.changetypeHandler}/> <br></br>
                                        </FormControl>
                                        <label>Priority</label>

<select value={this.state.priority} onChange={this.changepriorityHandler}>

<option value='select Priority'>select Priority </option>

 <option value='High'>High </option>



<option value='Medium'>Medium</option>

  <option value='Low'>Low</option>

 

 

         </select>
                                        <FormControl className = "form-group">
                                            
                                            <TextField placeholder="projectId" name="projectId" className="form-control" 
                                                value={this.state.projectId} onChange={this.changeprojectIdHandler}/> <br></br>
                                        </FormControl>
                                       

                                        <Button variant="contained" color="primary" onClick={this.saveOrUpdateBug} >Save</Button> <br></br>
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
