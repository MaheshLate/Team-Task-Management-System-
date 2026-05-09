//package com.example.service;
//
//
//
//
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.example.dto.AuthResponse;
//import com.example.dto.LoginRequest;
//import com.example.dto.RegisterRequest;
//import com.example.entity.Role;
//import com.example.entity.RoleName;
//import com.example.entity.User;
//import com.example.repository.RoleRepository;
//import com.example.repository.UserRepository;
//import com.example.security.JwtTokenProvider;
//
//import lombok.RequiredArgsConstructor;
//
//@Service
//@RequiredArgsConstructor
//public class AuthService
//{
//
//    private final UserRepository userRepository;
//    private final RoleRepository roleRepository;
//    private final PasswordEncoder passwordEncoder;
//    private final JwtTokenProvider jwtTokenProvider;
//
//    // REGISTER
//    public AuthResponse register(RegisterRequest request)
//    {
//
//        RoleName roleName = RoleName.valueOf(request.getRole());
//
//        Role role = roleRepository
//                .findByName(roleName)
//                .orElseThrow(() -> new RuntimeException("Role not found"));
//
//        User user = User.builder()
//                .name(request.getName())
//                .email(request.getEmail())
//                .password(passwordEncoder.encode(request.getPassword()))
//                .role(role)
//                .build();
//
//        userRepository.save(user);
//
//        String token = jwtTokenProvider.generateToken(user.getEmail());
//System.out.println(request.toString());
//        return new AuthResponse(token, user.getEmail(), role.getName().name());
//    }
//
//     
//    public AuthResponse login(LoginRequest request) {
//
//        User user = userRepository
//                .findByEmail(request.getEmail())
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
//            throw new RuntimeException("Invalid password");
//        }
//
//        String token = jwtTokenProvider.generateToken(user.getEmail());
//
//        return new AuthResponse(
//                token,
//                user.getEmail(),
//                user.getRole().getName().name()
//        );
//    }
//}