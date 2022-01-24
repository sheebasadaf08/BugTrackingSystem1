package com.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.entity.Employee;
import com.service.EmployeeService;
/**
 * @author User Restfull web services
 *
 */
@RestController
@RequestMapping(path = "/api")
@CrossOrigin

public class EmployeeController {
	@Autowired
	EmployeeService empService;

	/**
	 * @return the employee added
	 */
	@PostMapping("/createEmp")
	public Employee createEmployee(@RequestBody Employee employee) {
		return empService.createEmployee(employee);
	}

	@GetMapping("/Emp/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
		Employee e = empService.getEmployeeById(id);
		ResponseEntity re = new ResponseEntity<Employee>(e, HttpStatus.OK);
		return re;
	}

	@GetMapping("/allEmp")
	public List<Employee> getAllEmployees() {
		return empService.getAllEmployees();

	}

	@DeleteMapping(path = "/empDelete/{id}")
	public String deleteEmployeeById(@PathVariable int id) {
		empService.deleteEmployeeById(id);

		ResponseEntity re = new ResponseEntity<String>("Deleted", HttpStatus.OK);
		return "Deleted Employee  for EmployeeId " + id + "";
	}

	@PutMapping(path = "/updateEmp")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee e) throws Throwable {
		Employee e1 = empService.updateEmployee(e);

		ResponseEntity re = new ResponseEntity<Employee>(e1, HttpStatus.OK);
		return re;
	}

}
