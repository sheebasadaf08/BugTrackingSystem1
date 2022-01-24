import axios from 'axios';


const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api";

class BugServices {

    getBugs(){
        return axios.get('http://localhost:8080/api/allbug');
    }

    createBugs(bug){
        return axios.post('http://localhost:8080/api/createBug', bug);
    }

    getBugById(bugId){
        return axios.get('http://localhost:8080/api/bug/'+bugId);
    }

    updateBug(bug){
        return axios.put('http://localhost:8080/api/updatebug',bug);
    }

    deleteBug(id){
        return axios.delete('http://localhost:8080/api/bugDelete/'+ id);
    }
}

export default new BugServices()