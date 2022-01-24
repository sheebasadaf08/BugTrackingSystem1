package com.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import com.entity.Employee;
import com.repository.EmployeeRepository;
@SpringBootTest
class EmployeeServiceImplTest {
	@Autowired
	EmployeeService empService;
	
	
	@MockBean
	EmployeeRepository repo;

	@Test
	void testCreateEmployee() {
		Employee e1 = new Employee();
		e1.setId(1234);
		e1.setEmpName("zzzz");
		e1.setContactNo("99999999");
		e1.setEmail("zzzz@gmail.com");
		Mockito.when(repo.save(e1)).thenReturn(e1);
		assertThat(empService.createEmployee(e1)).isEqualTo(e1);
		
	}

	@Test
	void testGetAllEmployees() {
		Employee e1= new Employee();
		e1.setId(1234);
		e1.setEmpName("zzzz");
		e1.setContactNo("99999999");
		e1.setEmail("zzzz@gmail.com");
		Employee e2= new Employee();
		e2.setId(1234);
		e2.setEmpName("zzzz");
		e2.setContactNo("99999999");
		e2.setEmail("zzzz@gmail.com");
		List<Employee> employeeList = new ArrayList<>();
		employeeList.add(e1);
		employeeList.add(e2);
		Mockito.when(repo.findAll()).thenReturn(employeeList);
		assertThat(empService.getAllEmployees()).isEqualTo(employeeList);
		
	}

	@Test
	void testDeleteEmployeeById() {
		Employee e1= new Employee();
		e1.setId(1234);
		e1.setEmpName("zzzz");
		e1.setContactNo("99999999");
		e1.setEmail("zzzz@gmail.com");
		Optional<Employee> e2=Optional.of(e1);
		Mockito.when(repo.findById(1)).thenReturn(e2);
		 Mockito.when(repo.existsById(e1.getId())).thenReturn(false);
		   assertFalse(repo.existsById(e1.getId()));
		
	}


	@Test
	void testUpdateEmployee()  {
		Employee e1= new Employee();
		e1.setId(1234);
		e1.setEmpName("zzzz");
		e1.setContactNo("99999999");
		e1.setEmail("zzzz@gmail.com");
		//e1.setBug(null);
		Optional<Employee> e2=Optional.of(e1);
        Mockito.when(repo.findById(1)).thenReturn(e2);
		Mockito.when(repo.save(e1)).thenReturn(e1);
		e1.setId(9999);
		e1.setEmpName("zzzz");
		e1.setContactNo("888888");
		e1.setEmail("zz@gmail.com");
		//e1.setBug(null);
		try {
			assertThat(empService.updateEmployee(e1)).isEqualTo(e1);
		} catch (Throwable e) {
			e.printStackTrace();
		}
		
		
	}
	

	@Test
	void testGetEmployeeById() throws Throwable {
		Employee e3=new Employee();
		e3.setId(9999);
		e3.setEmpName("zzzz");
		e3.setContactNo("888888");
		e3.setEmail("zz@gmail.com");
		Optional<Employee> e2=Optional.of(e3);
		Mockito.when(repo.findById(1)).thenReturn(e2);
		assertThat(empService.getEmployeeById(1)).isEqualTo(e3);
		
		
		
	}

}
