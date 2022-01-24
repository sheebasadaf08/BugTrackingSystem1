package com.service;

import java.util.List;
import java.util.function.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.advices.RecordNotFoundException;
import com.entity.Project;
import com.repository.ProjectRepository;
//Writting all the Business Functionalities and logic

@Service
public class ProjectServiceImpl implements ProjectService {
	@Autowired
	ProjectRepository projectrepo;
	@Autowired
	EmployeeService empService;

	@Override
	public Project addProject(Project project) {
		return projectrepo.save(project);
	}

	@Override
	public void deleteProjectById(int id) {
		Project project = getProjectById(id);
		projectrepo.delete(project);
	}

	@Override
	public Project updateProject(Project project) throws Throwable {
		int id = project.getId();
		Supplier s1 = () -> new RecordNotFoundException("project with " + id + "Id Not Found For Updating Data ");
		Project p1 = projectrepo.findById(id).orElseThrow(s1);
		p1.setProjectOwner(project.getProjectOwner());
		// p1.setEmployee(project.getEmployee());
		p1.setStatus(project.getStatus());
		projectrepo.save(p1);
		return p1;

	}

	@Override
	public Project getProjectById(int id) {
		return projectrepo.findById(id)
				.orElseThrow(() -> new RecordNotFoundException("project with id" + id + " not found"));

	}

	@Override
	public List<Project> getAllProjects() {
		return projectrepo.findAll();
	}

}
