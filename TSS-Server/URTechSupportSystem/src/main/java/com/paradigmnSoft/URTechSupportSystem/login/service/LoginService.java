package com.paradigmnSoft.URTechSupportSystem.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.paradigmnSoft.URTechSupportSystem.login.repository.ILoginRepository;

@RestController  
public class LoginService implements ILoginService {
	
	@Autowired
	private ILoginRepository loginRepo;

	@GetMapping("/authenticate/{userName}/{password}")
	public Boolean authenticateUser(@PathVariable String userName, @PathVariable String password) {
		return loginRepo.authenticate(userName, password);
	}

	@GetMapping("/logMessage")
	public String showLogMessage() {
		return "Login is ready";
	}
}