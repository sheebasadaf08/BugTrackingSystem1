package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.entity.Project;
/**
 * @author User contains API for basic CRUD operations and also API for sorting.
 */
@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

}
