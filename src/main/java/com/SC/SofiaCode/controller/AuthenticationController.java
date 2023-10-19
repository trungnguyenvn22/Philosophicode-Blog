package com.SC.SofiaCode.controller;

import com.SC.SofiaCode.auth.AuthenticationRequest;
import com.SC.SofiaCode.auth.SignupRequest;
import com.SC.SofiaCode.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin("http://127.0.0.1:5173/")
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest){
        return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
    }
    @PostMapping("/register")
    public ResponseEntity<?> signup(@RequestBody SignupRequest signupRequest){
        return ResponseEntity.ok(authenticationService.Signup(signupRequest));
    }

}
