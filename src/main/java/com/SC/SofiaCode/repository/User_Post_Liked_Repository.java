package com.SC.SofiaCode.repository;

import com.SC.SofiaCode.model.Post;
import com.SC.SofiaCode.model.User_Post_Liked;
import com.SC.SofiaCode.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface User_Post_Liked_Repository extends JpaRepository<User_Post_Liked, Long>, CrudRepository<User_Post_Liked,Long> {

    @Query(value = "select upl from User_Post_Liked upl where upl.user =?1 and upl.post=?2")
    User_Post_Liked getUser_Post_LikedByUserAndPost(User user, Post post);


}
