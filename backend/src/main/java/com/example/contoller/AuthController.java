package com.example.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import  com.example.dto.LoginRequest;
import com.example.security.JwtUtil;
import com.example.entity.User;
import com.example.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return userService.save(user);
    }

//    @PostMapping("/login")
//    public String login(@RequestBody LoginRequest request) {
//
//        User user = userService.login(request.getEmail(), request.getPassword());
//
//        return jwtUtil.generateToken(user.getEmail());
//    }
    
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        User user = userService.login(
                request.getEmail(),
                request.getPassword()
        );

        return "Login Successful";
    }
}
