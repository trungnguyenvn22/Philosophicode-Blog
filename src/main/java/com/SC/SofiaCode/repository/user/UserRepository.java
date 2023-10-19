package com.SC.SofiaCode.repository.user;

import com.SC.SofiaCode.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

}
