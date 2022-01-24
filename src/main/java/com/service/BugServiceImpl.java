package com.service;

import java.util.List;
import java.util.function.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.advices.RecordNotFoundException;
import com.entity.Bug;
import com.repository.BugRepository;
// Writting all the Business Functionalities and logic

@Service
public class BugServiceImpl implements BugService {
	@Autowired
	BugRepository bugrepo;

	@Override
	public Bug createBug(Bug bug) {
		return bugrepo.save(bug);
	}

	@Override
	public Bug updateBug(Bug bug) throws Throwable {
		int id = bug.getId();
		Supplier s1 = () -> new RecordNotFoundException("Bug with " + id + "Id Not Found For Updating Data");
		// @SuppressWarnings("unchecked")
		Bug b1 = bugrepo.findById(id).orElseThrow(s1);

		b1.setBugDesc(bug.getBugDesc());
		b1.setStatus(bug.getStatus());
		b1.setStartDate(bug.getStartDate());
		b1.setEndDate(bug.getEndDate());
		b1.setAssignee(bug.getAssignee());
		b1.setType(bug.getType());
		b1.setPriority(bug.getPriority());
		b1.setProjectId(bug.getProjectId());

		bugrepo.save(b1);
		return b1;
	}

	@Override
	public void deleteBugById(int id) {
		Bug bug = getBugById(id);
		bugrepo.delete(bug);

	}

	@Override
	public Bug getBugById(int bugId) {
		return bugrepo.findById(bugId)
				.orElseThrow(() -> new RecordNotFoundException("Bug with id" + bugId + " not found"));
	}

	@Override
	public List<Bug> getAllBugs() {
		return bugrepo.findAll();
	}

}
