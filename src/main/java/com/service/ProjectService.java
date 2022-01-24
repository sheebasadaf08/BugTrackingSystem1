package com.service;

import java.util.List;
import com.entity.Project;

public interface ProjectService {
	public Project addProject(Project project);
	public void deleteProjectById(int id);
	public Project updateProject(Project project) throws Throwable;
	public Project getProjectById(int projectId);
	public List<Project> getAllProjects();

}
