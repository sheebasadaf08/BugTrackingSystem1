package com.service;

import java.util.List;
import java.util.function.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.advices.RecordNotFoundException;
import com.entity.Employee;
import com.repository.EmployeeRepository;
//Writting all the Business Functionalities and logic

@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	EmployeeRepository emprepo;

	@Override
	public Employee createEmployee(Employee employee) {
		return emprepo.save(employee);
	}

	@Override
	public Employee updateEmployee(Employee employee) throws Throwable {
		int id = employee.getId();
		Supplier s1 = () -> new RecordNotFoundException("Record Id Does not exist in the database");
		Employee e1 = emprepo.findById(id).orElseThrow(s1);

		e1.setEmpName(employee.getEmpName());
		e1.setContactNo(employee.getContactNo());
		e1.setEmail(employee.getEmail());
		// e1.setBug(employee.getBug());

		emprepo.save(e1);
		return e1;

	}

	@Override
	public void deleteEmployeeById(int id) {
		Employee employee = getEmployeeById(id);
		emprepo.delete(employee);
	}

	@Override
	public Employee getEmployeeById(int id) {
		return emprepo.findById(id)
				.orElseThrow(() -> new RecordNotFoundException("employee with id" + id + " not found"));

	}

	@Override
	public List<Employee> getAllEmployees() {

		return emprepo.findAll();
	}

}
