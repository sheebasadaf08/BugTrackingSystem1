package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.entity.User;
import com.service.UserService;
/**
 * @author User Restfull web services
 *
 */
@RestController
public class UserController {
	@Autowired
    UserService userService;
    
    @PostMapping("/createUser")
    public User creatUser(@RequestBody User user)
    {
        return userService.createUser(user);
    }

}
