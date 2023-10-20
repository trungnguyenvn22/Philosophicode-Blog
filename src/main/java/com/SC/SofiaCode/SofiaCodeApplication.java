package com.SC.SofiaCode;

import com.SC.SofiaCode.model.user.Role;
import com.SC.SofiaCode.model.user.User;
import com.SC.SofiaCode.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.HashSet;

@SpringBootApplication
@EnableWebSecurity
@EnableJpaRepositories
public class SofiaCodeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SofiaCodeApplication.class, args);
	}

	@Bean
	BCryptPasswordEncoder PasswordEncoder(){
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner lineRunner(UserService userService){
		return args -> {
			userService.saveRole(new Role("ROLE_ADMIN"));
			userService.saveRole(new Role("ROLE_USER"));
			userService.saveRole(new Role("MANAGER"));

			userService.saveUser(new User("TrungAdmin","hoangtrung210400@gmail.com","123456", new HashSet<>()));
			userService.saveUser(new User("TrungUser","demodecoding@gmail.com","123456", new HashSet<>()));
			userService.saveUser(new User("TrungManager","trungnhhe141622@fpt.edu.vn","123456", new HashSet<>()));

			userService.addToUser("hoangtrung210400@gmail.com","ROLE_ADMIN");
			userService.addToUser("demodecoding@gmail.com","ROLE_USER");
			userService.addToUser("trungnhhe141622@fpt.edu.vn","MANAGER");
		};
	}


}
