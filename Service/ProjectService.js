import axios from 'axios';


const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api";

class ProjectServices {

    getProjects(){
        return axios.get('http://localhost:8080/api/allProjects');
    }

    createProjects(project){
        return axios.post('http://localhost:8080/api/addproject', project);
    }

    getProjectById(projectId){
        return axios.get('http://localhost:8080/api/project/'+projectId);
    }

    updateProject(project){
        return axios.put('http://localhost:8080/api/updateproject',project);
    }

    deleteProject(id){
        return axios.delete('http://localhost:8080/api/deleteProject'+id);
    }
}

export default new ProjectServices()