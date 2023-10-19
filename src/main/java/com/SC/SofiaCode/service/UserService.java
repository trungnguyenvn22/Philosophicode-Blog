package com.SC.SofiaCode.service;

import com.SC.SofiaCode.model.user.Role;
import com.SC.SofiaCode.model.user.User;

public interface UserService {
    User saveUser(User user);
    void addToUser( String username, String roleName);
    Role saveRole(Role role);
}
