package com.SC.SofiaCode.repository.user;

import com.SC.SofiaCode.model.user.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


@Repository
public interface roleRepository extends JpaRepository<Role, Long> {

    Role findByTitle(String title);

}
