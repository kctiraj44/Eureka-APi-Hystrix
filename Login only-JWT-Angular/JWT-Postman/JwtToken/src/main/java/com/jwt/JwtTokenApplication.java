package com.jwt;

import com.jwt.model.User;
import com.jwt.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Random;

@SpringBootApplication
public class JwtTokenApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	public  void createUser(){
		User user =new User();

		user.setId(1L);
		user.setUsername("kctiraj44");
		user.setEmail("kctiraj44@gmail.com");
		user.setPassword("abcd");
		user.setEnabled(true);
		user.setRole("Admin");
		this.userRepository.save(user);
	}






	public static void main(String[] args) {
		SpringApplication.run(JwtTokenApplication.class, args);

		JwtTokenApplication jwt = new JwtTokenApplication();


	}


	@Override
	public void run(String... args) throws Exception {
		createUser();
	}
}
