import React from "react";

import {  Typography } from "@mui/material";
import s3 from '../Images/s3.jpg'
import Footer from "./Footer";
function About(){

    
return(
    <div style={{ backgroundImage: `url(${s3})`, backgroundSize: 'cover' }} className="App">
    <div>
    <Typography variant="h3" component="div" gutterBottom  >
           About Us
     </Typography>
     <Typography variant="body1" gutterBottom>
    <p> A bug tracking system or defect tracking system is a software application that keeps track of reported software bugs in software development projects. It may be regarded as a type of issue tracking system.</p>
    </Typography>

    <Typography variant="body1" gutterBottom>
    <p>Many bug tracking systems, such as those used by most open-source software projects, allow end-users to enter bug reports directly.Other systems are used only internally in a company or organization doing software development. 
    Typically bug tracking systems are integrated with other project management software.</p>
     
    </Typography>

    <Typography>

    <p>A bug tracking system is usually a necessary component of a professional software development infrastructure, and consistent use of a bug or issue tracking system is considered one of the "hallmarks of a good software team".</p>
           
    </Typography>
    <Typography>

<p>The main benefit of a bug-tracking system is to provide a clear centralized overview of development requests (including both bugs and improvements, the boundary is often fuzzy), and their state. The prioritized list of pending items (often called backlog) provides valuable input when defining the product road map, or maybe just "the next release</p>
       
</Typography> 
<Typography>

<p>In a corporate environment, a bug-tracking system may be used to generate reports on the productivity of programmers at fixing bugs. However, this may sometimes yield inaccurate results because different bugs may have different levels of severity and complexity. The severity of a bug may not be directly related to the complexity of fixing the bug. There may be different opinions among the managers and architects.</p>
       
</Typography>
<Typography>

<p>Bug and issue tracking systems are often implemented as a part of integrated project management systems. This approach allows including bug tracking and fixing in a general product development process, fixing bugs in several product versions, automatic generation of a product knowledge base and release notes.</p>
       
</Typography>  
      
    </div>
    <Footer/>
    
    

    </div>

    
  
);
}



export default About