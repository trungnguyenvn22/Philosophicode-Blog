package com.SC.SofiaCode.service;

import com.SC.SofiaCode.auth.AuthenticationRequest;
import com.SC.SofiaCode.auth.AuthenticationResponse;
import com.SC.SofiaCode.auth.SignupRequest;
import com.SC.SofiaCode.model.user.Role;
import com.SC.SofiaCode.model.user.User;
import com.SC.SofiaCode.repository.user.RoleCustomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;
import com.SC.SofiaCode.repository.user.UserRepository;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final RoleCustomRepository roleCustomRepository;
    private final UserService userService;

    public ResponseEntity<?> authenticate(AuthenticationRequest authenticationRequest) {
        try {
            User user = userRepository.findByEmail(authenticationRequest.getEmail()).orElseThrow(() -> new NoSuchElementException("Not Found"));
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
            List<Role> role = null;
            if (user != null) {
                role = roleCustomRepository.getRole(user);
            }
            Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
            Set<Role> set = new HashSet<>();
            role.stream().forEach(
                    c -> {
                        set.add(new Role(c.getTitle()));
                        authorities.add(new SimpleGrantedAuthority(c.getTitle()));
                    }

            );
            user.setRoles(set);
            set.stream().forEach(
                    i->authorities.add(new SimpleGrantedAuthority(i.getTitle()))
            );
            var jwtAccessToken = jwtService.generateToken(user,authorities);
            var jwtFreshToken = jwtService.generateFreshToken(user,authorities);
            return ResponseEntity.ok(AuthenticationResponse.builder().access_token(jwtAccessToken).refresh_token(jwtFreshToken).email(user.getEmail()).user_name(user.getUserName()).build());

        }catch (NoSuchElementException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (BadCredentialsException e){
            return ResponseEntity.badRequest().body("Invalid Credential");

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");

        }
    }

    public ResponseEntity<?> Signup(SignupRequest signupRequest) {
        try{

            if(userRepository.findByEmail(signupRequest.getEmail()).isPresent()== true){
//                throw new IllegalArgumentException("User with "+signupRequest.getEmail().toString()+"exists");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with "+signupRequest.getEmail().toString()+" exists");

            }

                userService.saveUser(new User(signupRequest.getUser_name(), signupRequest.getEmail(), signupRequest.getPassword(), new HashSet<>()));
                userService.addToUser(signupRequest.getEmail(), "ROLE_USER");
                User user = userRepository.findByEmail(signupRequest.getEmail()).orElseThrow();
                return ResponseEntity.ok(user);

        } catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

    }
}
