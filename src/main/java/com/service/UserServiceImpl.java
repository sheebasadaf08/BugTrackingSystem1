package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.entity.User;

import com.repository.UserRepository;
//Writting all the Business Functionalities and logic

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userrepo;

	@Override
	public User createUser(User user) {

		return userrepo.save(user);
	}

}
