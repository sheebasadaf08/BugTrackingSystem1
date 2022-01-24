package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
/**
 * @author  creating database with table name Employee
 */
@Entity
public class Employee {
	@Id

	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

	@NotEmpty
	private String empName;

	@NotEmpty
	@Email
	private String email;

	@NotEmpty
	@Size(max=10)
	private String contactNo;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", empName=" + empName + ", email=" + email + ", contactNo=" + contactNo + "]";
	}




	//@OneToOne(cascade = CascadeType.ALL)

	//@JoinColumn(name = "bug_id", referencedColumnName = "id")

	//private Bug bug;


}


