package com.SC.SofiaCode.controller;

import com.SC.SofiaCode.dto.CommentRequest;
import com.SC.SofiaCode.dto.CommentResponse;
import com.SC.SofiaCode.model.Comment;
import com.SC.SofiaCode.repository.CommentRepository;
import com.SC.SofiaCode.service.CommentService;
import com.SC.SofiaCode.util.CommonResponse;
import com.SC.SofiaCode.util.CommonResponseList;
import com.SC.SofiaCode.util.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequiredArgsConstructor
@CrossOrigin("http://127.0.0.1:5173/")
public class CommentController {

    @Autowired
    CommentService commentService;
    CommonResponseList commonResponseList = new CommonResponseList();

    CommonResponse commonResponse = new CommonResponse();

    @GetMapping ("api/user/new/get-comment")
    ResponseEntity<?> getComment(@RequestParam String postId){

        try{
            Long postIdRequest = Long.parseLong(postId);
            List<CommentResponse> commentList = commentService.getCommentByPost(postIdRequest);
            List<Object> result = new ArrayList<>();
            for (CommentResponse c: commentList
                 ) {
                result.add(c);
            }
            if (result!= null){
                commonResponseList.setErrorCode(ErrorCode.SUCCESS.getKey());
                commonResponseList.setMessage(ErrorCode.SUCCESS.getValue());
                commonResponseList.setDataResponseList(result);
            }else{
                commonResponseList.setErrorCode(ErrorCode.FAIL.getKey());
                commonResponseList.setMessage(ErrorCode.FAIL.getValue());
            }


        }catch (Exception e){
            e.getMessage();
            commonResponseList.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponseList.setMessage(ErrorCode.FAIL.getValue());

        }

        return ResponseEntity.ok(commonResponseList);

    }

    @GetMapping ("api/user/new/get-replies")

    ResponseEntity<?> getReplies(@RequestParam String commentId){
        try{
            Long commentIdRequest = Long.parseLong(commentId);
            List<CommentResponse> commentList = commentService.getRepliesByComment(commentIdRequest);
            List<Object> result = new ArrayList<>();
            for (CommentResponse c: commentList
            ) {
                result.add(c);
            }
            if (result!= null){
                commonResponseList.setErrorCode(ErrorCode.SUCCESS.getKey());
                commonResponseList.setMessage(ErrorCode.SUCCESS.getValue());
                commonResponseList.setDataResponseList(result);
            }else{
                commonResponseList.setErrorCode(ErrorCode.FAIL.getKey());
                commonResponseList.setMessage(ErrorCode.FAIL.getValue());
            }


        }catch (Exception e){
            e.getMessage();
            commonResponseList.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponseList.setMessage(ErrorCode.FAIL.getValue());

        }

        return ResponseEntity.ok(commonResponseList);

    }

    @PostMapping("api/user/new/add-comment")
    ResponseEntity<?> addComment(@RequestBody CommentRequest commentRequest){
        try{
            Boolean result = commentService.saveComment(commentRequest);
            if (result == true){
                commonResponse.setErrorCode(ErrorCode.SUCCESS.getKey());
                commonResponse.setMessage(ErrorCode.SUCCESS.getValue());
            }else {
                commonResponse.setErrorCode(ErrorCode.FAIL.getKey());
                commonResponse.setMessage(ErrorCode.FAIL.getValue());
            }


        }catch (Exception e){
            commonResponse.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponse.setMessage(ErrorCode.FAIL.getValue());
        }
        return ResponseEntity.ok(commonResponse);
    }

    @PostMapping("")
    ResponseEntity<?> addReplies(CommentRequest commentRequest){
        return null;
    }
}
