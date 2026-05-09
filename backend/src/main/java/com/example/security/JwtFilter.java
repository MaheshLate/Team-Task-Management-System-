package com.example.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.io.IOException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilter extends OncePerRequestFilter
{
	
	@Autowired
	private JwtUtil jwtUtil;
	
	
	 @Override
	    protected void doFilterInternal(HttpServletRequest request,
	                                    HttpServletResponse response,
	                                    FilterChain filterChain)
	            throws ServletException, IOException {

	        String header = request.getHeader("Authorization");

	        if (header != null && header.startsWith("Bearer ")) {

	            String token = header.substring(7);

	            try {
	                String email = jwtUtil.extractEmail(token);
	                // we can later load user here
	                System.out.println("User authenticated: " + email);
	            } catch (Exception e) {
	                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
	                return;
	            }
	        }

	        try {
				filterChain.doFilter(request, response);
			} catch (java.io.IOException | ServletException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    }
	}
