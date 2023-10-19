package com.SC.SofiaCode.service.impl;

import com.SC.SofiaCode.model.user.Role;
import com.SC.SofiaCode.model.user.User;
import com.SC.SofiaCode.repository.user.roleRepository;
import com.SC.SofiaCode.repository.user.UserRepository;
import com.SC.SofiaCode.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.HashSet;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class userServiceImpl implements UserService {

    @Autowired
    private  roleRepository roleRepository;
   @Autowired
    private UserRepository userRepository;
   @Autowired
   public PasswordEncoder passwordEncoder;

    @Override
    public User saveUser(User user) {
        String pass = user.getPassword();

        if (pass != null){
            String passParse = passwordEncoder.encode(pass);
            user.setPassword(passParse);
        }

        user.setRoles(new HashSet<>());

        return userRepository.save(user);
    }

    @Override
    public void addToUser(String username, String roleName) {
        if (!userRepository.findByEmail(username).isPresent()){
            throw  new IllegalArgumentException("User with email " + username + " does not exits");
        }
        Role role = roleRepository.findByTitle(roleName);
        if (role == null){
            throw new IllegalArgumentException("Role with title "+ roleName + "does not exits");

        }
        User user = userRepository.findByEmail(username).get();
        user.getRoles().add(role);

    }
    @Override
    public Role saveRole(Role role) {

        return roleRepository.save(role);

    }
}
