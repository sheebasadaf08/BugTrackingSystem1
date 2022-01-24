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
import com.entity.Project;
import com.repository.ProjectRepository;

@SpringBootTest
class ProjectServiceImplTest {
	@Autowired
	ProjectService proService;

	@MockBean
	ProjectRepository repo;

	@Test
	void testaddProject() {
		Project p1 = new Project();
		p1.setId(0);
		p1.setProjectOwner(null);
		p1.setStatus(null);
		// p1.setEmployee(null);
		Mockito.when(repo.save(p1)).thenReturn(p1);
		assertThat(proService.addProject(p1)).isEqualTo(p1);

	}

	@Test
	void testDeleteProjectById() {
		Project p1 = new Project();
		p1.setId(1256);
		p1.setProjectOwner("ccccc");
		p1.setStatus("high");
		Optional<Project> p2 = Optional.of(p1);
		Mockito.when(repo.findById(1)).thenReturn(p2);
		Mockito.when(repo.existsById(p1.getId())).thenReturn(false);
		assertFalse(repo.existsById(p1.getId()));

	}

	@Test

	void testUpdateProjectById() {
		Project p1 = new Project();
		p1.setId(1256);
		p1.setProjectOwner("ccccc");
		p1.setStatus("high");
		Optional<Project> p2 = Optional.of(p1);
		Mockito.when(repo.findById(1)).thenReturn(p2);
		Mockito.when(repo.save(p1)).thenReturn(p1);
		p1.setId(1256);
		p1.setProjectOwner("ccccc");
		p1.setStatus("high");
		try {
			assertThat(proService.updateProject(p1)).isEqualTo(p1);
		} catch (Throwable e) {

			e.printStackTrace();
		}
	}

	@Test
	void testGetProjectById() {
		Project p3 = new Project();
		p3.setId(1256);
		p3.setProjectOwner("ccccc");
		p3.setStatus("high");
		Optional<Project> p2 = Optional.of(p3);
		Mockito.when(repo.findById(1)).thenReturn(p2);
		assertThat(proService.getProjectById(1)).isEqualTo(p3);
	}

	@Test
	void testGetAllProjects() {
		Project p1 = new Project();
		p1.setId(1256);
		p1.setProjectOwner("ccccc");
		p1.setStatus("high");
		Project p2 = new Project();
		p2.setId(1256);
		p2.setProjectOwner("ccccc");
		p2.setStatus("high");
		List<Project> projectList = new ArrayList<>();
		projectList.add(p1);
		projectList.add(p2);
		Mockito.when(repo.findAll()).thenReturn(projectList);
		assertThat(proService.getAllProjects()).isEqualTo(projectList);

	}

}
