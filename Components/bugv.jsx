import React, { Component } from 'react'
import BugService from '../Service/BugService'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@material-ui/icons/Create';
import PersonAdd from '@material-ui/icons/PersonAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import s3 from '../Images/s3.jpg';

import { Route , history} from 'react-router-dom';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Footer from './Footer';
import LogoutIcon from '@mui/icons-material/Logout';

class bugv extends Component {
    constructor(props) {
        super(props)

        this.state = {
                bugs: []
        }
        this.addBug = this.addBug.bind(this);
        this.editBug = this.editBug.bind(this);
        this.deleteBug = this.deleteBug.bind(this);
    }

    deleteBug(id){
        BugService.deleteBug(id).then( res => {
            this.setState({bugs: this.state.bugs.filter(bug => bug.id !== id) });
            this.props.history.push('/bug');
            
        });
    }
    bugreturn(id){
        this.props.history.push(`/view-bug/${id}`);
    }
    editBug(id){
        this.props.history.push(`/add-bug/${id}`);
    }

    componentDidMount(){
        BugService.getBugs().then((res) => {
            this.setState({ bugs: res.data});
        });
    }
    addBug(){
        this.props.history.push('/add-bug/_add');
    }
    cancel(){

        this.props.history.push('/');

    }

    render() {
        return(
        <div style={{ backgroundImage: `url(${s3})`, backgroundSize: "cover" }} id="site-wrapper">
            <div id="page-content">
            <div>    

<Button style={{marginLeft:"1300px",color:'blue' }} variant="contained"  onClick={this.cancel.bind(this)}><LogoutIcon /></Button>



</div>  
          
                   
              
            
            <TableContainer component={Paper} style={{marginTop:'100px',backgroundColor:'lavender'}}>
                    <Table className="material-table"aria-label="simple table">
                        <TableHead  style={{backgroundColor:'rgba(52, 52, 52, 0.8)'}}>
                            <TableRow>
                               
                                <TableCell align="center">Bug Id</TableCell>
                                <TableCell align="center">Bug Desc</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Start date</TableCell>
                                <TableCell align="center">End date</TableCell>
                                <TableCell align="center">Assignee</TableCell>
                                <TableCell align="center">Type</TableCell>
                                <TableCell align="center">Priority</TableCell>
                                <TableCell align="center">Project Id</TableCell>
                              <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        {
                                    this.state.bugs.map(
                                        bug =>
                                            <TableBody >
                                                <TableRow>
                                                  
                                                    <TableCell align="center">{bug.id}</TableCell>
                                                    <TableCell align="center">{bug.bugDesc}</TableCell>
                                                    <TableCell align="center">{bug.status}</TableCell>
                                                    <TableCell align="center">{bug.startDate}</TableCell>
                                                    <TableCell align="center">{bug.endDate}</TableCell>
                                                    <TableCell align="center">{bug.assignee}</TableCell>
                                                    <TableCell align="center">{bug.type}</TableCell>
                                                    <TableCell align="center">{bug.priority}</TableCell>
                                                    <TableCell align="center">{bug.projectId}</TableCell>
                                                   
                                          
                                       
                                             
                                          
                                          <Button style={{marginLeft: "10px"}} onClick={ () => this.bugreturn(bug.id)}variant ="contained" ><VisibilityIcon/> </Button>      
                                                    </TableRow>
                                                    </TableBody>
                                                    
                                        )
                                                    
                                    }
                                
                        </Table>
                </TableContainer>
                
                </div>
                
                
            <Footer/>
        </div>
        
    )
    }
}
export default bugv
