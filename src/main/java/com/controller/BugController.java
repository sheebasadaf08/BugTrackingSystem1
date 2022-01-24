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
import com.entity.Bug;
import com.service.BugService;

/**
 * @author User Restfull web services
 *
 */
@RestController
@RequestMapping(path = "/api")
@CrossOrigin
public class BugController {
	@Autowired
	BugService bugService;
	/**
	 * @return the bug added
	 */
	@PostMapping("/createBug")
	public Bug createBug(@RequestBody Bug bug) {
		return bugService.createBug(bug);
	}
	

	@GetMapping("/bug/{bugId}")
	public ResponseEntity<Bug> getBugById(@PathVariable int bugId) {
		Bug b = bugService.getBugById(bugId);
		ResponseEntity re = new ResponseEntity<Bug>(b, HttpStatus.OK);
		return re;
	}

	@GetMapping("/allbug")
	public List<Bug> getAllBugs() {
		return bugService.getAllBugs();

	}

	@DeleteMapping(path = "/bugDelete/{id}")
	public String deleteBugById(@PathVariable int id) {
		bugService.deleteBugById(id);

		ResponseEntity re = new ResponseEntity<String>("Deleted", HttpStatus.OK);
		return "Deleted Bug  for BugId " + id + "";
	}

	@PutMapping("/updatebug")
	public ResponseEntity<Bug> updateBug(@RequestBody Bug b) throws Throwable {
		Bug b1 = bugService.updateBug(b);

		ResponseEntity re = new ResponseEntity<Bug>(b1, HttpStatus.OK);
		return re;

	}

}
