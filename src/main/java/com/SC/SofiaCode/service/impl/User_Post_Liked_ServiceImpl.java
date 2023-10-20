package com.SC.SofiaCode.service.impl;

import com.SC.SofiaCode.model.Post;
import com.SC.SofiaCode.model.User_Post_Liked;
import com.SC.SofiaCode.model.user.User;
import com.SC.SofiaCode.repository.CategoryRepository;
import com.SC.SofiaCode.repository.PostRepository;
import com.SC.SofiaCode.repository.User_Post_Liked_Repository;
import com.SC.SofiaCode.repository.user.UserRepository;
import com.SC.SofiaCode.service.CategoryService;
import com.SC.SofiaCode.service.User_Post_Liked_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;


@Service
public class User_Post_Liked_ServiceImpl implements User_Post_Liked_Service {

    @Autowired
    PostRepository postRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    CategoryService categoryService;
    @Autowired
    User_Post_Liked_Repository userPostLikedRepository;
    @Override
    public boolean addUserPostLiked(String email, Long postId) {

        try{
            Post post = postRepository.getPostById(postId);
            User user = userRepository.findByEmail(email).orElseThrow();
            if(post == null && user == null){
                throw new NoSuchElementException("Don't have "+ email + " and "+ postId + " in database");
            }else{
                User_Post_Liked checkExist = userPostLikedRepository.getUser_Post_LikedByUserAndPost(user,post);
                if(checkExist == null){
                    User_Post_Liked userPostLiked = new User_Post_Liked(user,post);
                    userPostLikedRepository.save(userPostLiked);
                    return true;
                }else{
                    return false;
                }
            }


        }catch (Exception e){
            e.getMessage();
        }

        return false;
    }
}
