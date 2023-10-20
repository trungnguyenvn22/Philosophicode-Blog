package com.SC.SofiaCode.service;

import org.springframework.stereotype.Service;



public interface User_Post_Liked_Service {
    boolean addUserPostLiked(String email, Long postId);
}
