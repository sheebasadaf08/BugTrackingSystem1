import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import BasicCard from './Components/empView'
import Navbar from './Components/Header';
import About from './Components/about';
import contact from './Components/contact';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/login';
import Signup from './Components/Signup';
import ListBugComponent from './Components/ListBugComponent';
import CreateBugComponent from './Components/CreateBugComponent';
import Admin from './Components/Admin';
import ChangePassword from './Components/ChangePassword';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';
import ViewBugComponent from './Components/ViewBugComponent';
import ListProjectComponent from './Components/ListProjectComponent';
import CreateProjectComponent from './Components/CreateProjectComponent';
import ViewProjectComponent from './Components/ViewProjectComponent';
import Employeem from './Components/Employeem';
import bugv from './Components/bugv';




function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
    <Route path='/' exact component={Home}/>
     <Route  path="/about" component={About} />
      <Route  path="/contact" component={contact} />
      <Route  path="/login" component={Login} />
      <Route  path="/signup" component={Signup} />
      <Route  path="/admin" component={Admin} />
      <Route path="/employeem" component={Employeem}></Route>
      <Route path='/changepassword' component={ChangePassword}></Route>
      <Route  path="/employee" component={ListEmployeeComponent} />
      <Route path = "/add-employee/:id" component={CreateEmployeeComponent}></Route>
      <Route  path="/bug" component={ListBugComponent} />
      <Route path = "/add-bug/:id" component={CreateBugComponent}></Route>
      <Route  path="/project" component={ListProjectComponent} />
      <Route path = "/add-project/:id" component={CreateProjectComponent}></Route>
      <Route path = "/view-employee/:id" component={ViewEmployeeComponent} ></Route>
      <Route path = "/view-bug/:id" component={ViewBugComponent} ></Route>
      <Route path = "/view-project/:id" component={ViewProjectComponent} ></Route>
      <Route  path="/bugv" component={bugv} />
      </Switch>
     </BrowserRouter>
 
  
  
);
}


export default App;
