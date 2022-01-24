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
import com.entity.Bug;
import com.repository.BugRepository;


@SpringBootTest
class BugServiceImplTest {

	@Autowired
	BugService bugService;

	@MockBean
	BugRepository repo;

	@Test
	void testCreateBug() {
		Bug b1 = new Bug();
		b1.setId(1);
		b1.setBugDesc(null);
		b1.setAssignee(null);
		b1.setEndDate(null);
		b1.setPriority(null);
		b1.setProjectId(0);
		b1.setStartDate(null);
		b1.setStatus(null);
		b1.setType(null);
		Mockito.when(repo.save(b1)).thenReturn(b1);
		assertThat(bugService.createBug(b1)).isEqualTo(b1);
	}

	@Test
	void testUpdateBug() throws Throwable {
		Bug b1 = new Bug();
		b1.setId(1);
		b1.setBugDesc(null);
		b1.setAssignee(null);
		b1.setEndDate(null);
		b1.setPriority(null);
		b1.setProjectId(0);
		b1.setStartDate(null);
		b1.setStatus(null);
		b1.setType(null);
		Optional<Bug> b2 = Optional.of(b1);
		Mockito.when(repo.findById(1)).thenReturn(b2);
		Mockito.when(repo.save(b1)).thenReturn(b1);

		b1.setId(1);
		b1.setBugDesc(null);
		b1.setAssignee(null);
		b1.setEndDate(null);
		b1.setPriority(null);
		b1.setProjectId(0);
		b1.setStartDate(null);
		b1.setStatus(null);
		b1.setType(null);
		assertThat(bugService.updateBug(b1)).isEqualTo(b1);
	}

	@Test
	void testDeleteBugById() {
		Bug b1 = new Bug();
		b1.setId(1);
		b1.setBugDesc(null);
		b1.setAssignee(null);
		b1.setEndDate(null);
		b1.setPriority(null);
		b1.setProjectId(0);
		b1.setStartDate(null);
		b1.setStatus(null);
		b1.setType(null);
		Optional<Bug> b2 = Optional.of(b1);
		Mockito.when(repo.findById(1)).thenReturn(b2);
		Mockito.when(repo.existsById(b1.getId())).thenReturn(false);
		assertFalse(repo.existsById(b1.getId()));

	}

	@Test
	void testGetBugById() {
		Bug b3 = new Bug();
		b3.setId(1);
		b3.setBugDesc(null);
		b3.setAssignee(null);
		b3.setEndDate(null);
		b3.setPriority(null);
		b3.setProjectId(0);
		b3.setStartDate(null);
		b3.setStatus(null);
		b3.setType(null);
		Optional<Bug> b2 = Optional.of(b3);
		Mockito.when(repo.findById(1)).thenReturn(b2);
		assertThat(bugService.getBugById(1)).isEqualTo(b3);
	}

	@Test
	void testGetAllBugs() {
		Bug b1 = new Bug();
		b1.setId(1);
		b1.setBugDesc(null);
		b1.setAssignee(null);
		b1.setEndDate(null);
		b1.setPriority(null);
		b1.setProjectId(0);
		b1.setStartDate(null);
		b1.setStatus(null);
		b1.setType(null);
		Bug b2 = new Bug();
		b2.setId(1);
		b2.setBugDesc(null);
		b2.setAssignee(null);
		b2.setEndDate(null);
		b2.setPriority(null);
		b2.setProjectId(0);
		b2.setStartDate(null);
		b2.setStatus(null);
		b2.setType(null);
		List<Bug> bugList = new ArrayList<>();
		bugList.add(b1);
		bugList.add(b2);
		Mockito.when(repo.findAll()).thenReturn(bugList);
		assertThat(bugService.getAllBugs()).isEqualTo(bugList);

	}

}
