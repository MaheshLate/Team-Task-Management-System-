package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

//import com.example.security.JwtFilter;

@Configuration
public class SecurityConfig {

	@SuppressWarnings("unused")
//	private final JwtFilter jwtFilter;
	
//	public SecurityConfig(JwtFilter jwtFilter) {
//        this.jwtFilter = jwtFilter;
//    }
	
	 @Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

	        http
	            .csrf(csrf -> csrf.disable())   
	            .authorizeHttpRequests(auth -> auth
	                .requestMatchers("/api/auth/**").permitAll()
	                .requestMatchers("/h2-console/**").permitAll() 
	                .anyRequest().permitAll()
	            )
	            //.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
	            .headers(headers -> headers.frameOptions(frame -> frame.disable()));
	        return http.build();
	    }
}