package com.SC.SofiaCode.controller;

import com.SC.SofiaCode.service.User_Post_Liked_Service;
import com.SC.SofiaCode.util.CommonResponse;
import com.SC.SofiaCode.util.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
@CrossOrigin("http://127.0.0.1:5173/")
public class UserPostLikedController {
    @Autowired
    private User_Post_Liked_Service service;

    @PostMapping("/api/new/add-post-liked")
    public ResponseEntity<?> addPostLikedByUser(@RequestParam String email, String postId ){
        CommonResponse commonResponse = new CommonResponse();
        Long postIdPares = Long.parseLong(postId);

        Boolean result = service.addUserPostLiked(email, postIdPares);
        if(result == true){
            commonResponse.setErrorCode(ErrorCode.SUCCESS.getKey());
            commonResponse.setMessage(ErrorCode.SUCCESS.getValue());
        }
        else{
            commonResponse.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponse.setMessage(ErrorCode.FAIL.getValue());
        }

        return ResponseEntity.ok(commonResponse);
    }
}
