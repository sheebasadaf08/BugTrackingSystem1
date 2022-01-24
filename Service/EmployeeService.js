import axios from 'axios';


const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api";

class EmployeeServices {

    getEmployees(){
        return axios.get('http://localhost:8080/api/allEmp');
    }

    createEmployee(employee){
        return axios.post('http://localhost:8080/api/createEmp', employee);
    }

    getEmployeeById(empId){
        return axios.get('http://localhost:8080/api/Emp/'+empId);
    }

    updateEmployee(employee){
        return axios.put('http://localhost:8080/api/updateEmp',employee);
    }

    deleteEmployee(id){
        return axios.delete('http://localhost:8080/api/empDelete/'+ id);
    }
}

export default new EmployeeServices()