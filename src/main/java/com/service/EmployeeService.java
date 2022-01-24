package com.service;

import java.util.List;
import com.entity.Employee;


public interface EmployeeService  {
	public Employee createEmployee(Employee employee);
	public Employee updateEmployee(Employee employee) throws Throwable;
	public void deleteEmployeeById(int id);
	public Employee getEmployeeById(int empId);
	public  List<Employee> getAllEmployees();

}
