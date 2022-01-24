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
import com.entity.Project;
import com.service.ProjectService;
/**
 * @author User Restfull web services
 *
 */
@RestController
@CrossOrigin
@RequestMapping(path = "/api")
public class ProjectController {
	@Autowired
	ProjectService projectService;

	@PostMapping("/addproject")
	public Project saveProject(@RequestBody Project project) {
		return projectService.addProject(project);
	}

	@GetMapping("/allProjects")
	public List<Project> getAllProjects() {
		return projectService.getAllProjects();

	}

	@DeleteMapping("/deleteProject/{id}")
	public String deleteProjectById(@PathVariable int id) {
		projectService.deleteProjectById(id);
		ResponseEntity re = new ResponseEntity<String>("Deleted", HttpStatus.OK);
		return "Project Delete Sccessfully!";

	}

	@PutMapping("/updateproject")
	public ResponseEntity<Project> updateProject(@RequestBody Project p) throws Throwable {
		Project p1 = projectService.updateProject(p);

		ResponseEntity re = new ResponseEntity<Project>(p1, HttpStatus.OK);
		return re;

	}

	@GetMapping("/project/{id}")
	public ResponseEntity<Project> getProjectById(@PathVariable int id) {
		Project p = projectService.getProjectById(id);
		ResponseEntity re = new ResponseEntity<Project>(p, HttpStatus.OK);
		return re;
	}

}
