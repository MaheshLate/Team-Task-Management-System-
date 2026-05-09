package com.example.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.User;
import com.example.repository.UserRepository;

@Service
public class UserService 
{
	@Autowired
	private UserRepository  userRepository;
	
	public User save(User user)
	{
		return userRepository.save(user);
	}
	
	@SuppressWarnings("unused")
	private Optional<User> findByEmail(String email)
	{
		return userRepository.findByEmail(email);
	}
	
	public User login(String email, String password) {

	    User user = userRepository.findByEmail(email)
	            .orElseThrow(() -> new RuntimeException("User not found"));

	    if (!user.getPassword().equals(password)) {
	        throw new RuntimeException("Invalid password");
	    }

	    return user;
	}
}
