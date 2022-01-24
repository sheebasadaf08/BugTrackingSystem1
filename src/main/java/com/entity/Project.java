package com.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
/**
 * @author  creating database with table name project
 */
@Entity
@Table(name = "project")
public class Project {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "projectOwner")
	private String projectOwner;
	@Column(name = "status")
	private String status;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProjectOwner() {
		return projectOwner;
	}

	public void setProjectOwner(String projectOwner) {
		this.projectOwner = projectOwner;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Project [id=" + id + ", projectOwner=" + projectOwner + ", status=" + status + "]";
	}

	// @OneToMany(fetch = FetchType.EAGER)
	// @JoinTable(name = "project_employee", joinColumns = @JoinColumn(name =
	// "projectId"), inverseJoinColumns = @JoinColumn(name = "empId"))
	// private List<Employee> employee;

}
