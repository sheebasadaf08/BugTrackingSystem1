package com.service;

import java.util.List;
import com.entity.Bug;
public interface BugService {
	public Bug createBug(Bug bug);
	public Bug updateBug(Bug bug) throws Throwable;
	public void deleteBugById(int id);
	public Bug getBugById(int bugId);
	public  List<Bug> getAllBugs();

}
