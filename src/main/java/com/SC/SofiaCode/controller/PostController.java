package com.SC.SofiaCode.controller;

import com.SC.SofiaCode.dto.PostRequest;
import com.SC.SofiaCode.dto.PostResponse;
import com.SC.SofiaCode.model.Post;
import com.SC.SofiaCode.service.PostService;
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
import java.util.Objects;

@Controller
@RequiredArgsConstructor
@CrossOrigin("http://127.0.0.1:5173/")
public class PostController {
    @Autowired
    private PostService postService;
    CommonResponse commonResponse = new CommonResponse();
    CommonResponseList commonResponseList = new CommonResponseList();

    @PostMapping("/api/new/add-post")
    ResponseEntity<?> savePost(@RequestBody PostRequest postRequest) {
        try {
            String postRequestSlug = postRequest.getSlug();
            List<PostResponse> postList = postService.getAllPosts();
            Integer checkSlug = 0;
            for (PostResponse p: postList
                 ) {
                if (postRequestSlug.equals(p.getSlug())== true){

                    checkSlug++;

                }
            }

            if (checkSlug == 0){
                postService.addNewPost(postRequest);
                commonResponse.setErrorCode(ErrorCode.SUCCESS.getKey());
                commonResponse.setMessage(ErrorCode.SUCCESS.getValue());
            }else{
                commonResponse.setErrorCode(ErrorCode.SLUG_DUPLICATE.getKey());
                commonResponse.setMessage(ErrorCode.SLUG_DUPLICATE.getValue());
            }

        } catch (Exception e) {
            e.getMessage();
            commonResponse.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponse.setMessage(ErrorCode.FAIL.getValue());
        }
        return ResponseEntity.ok(commonResponse);
    }
    @GetMapping("/view/posts")
    ResponseEntity<CommonResponseList> getAllPosts(){

        List<PostResponse> postResponseList = new ArrayList<>();
        List<Object>  result = new ArrayList<>();
        try {
            postResponseList = postService.getAllPosts();
            for (PostResponse p: postResponseList
                 ) {
                result.add(p);
            }
            if (result != null){
                commonResponseList.setDataResponseList(result);
                commonResponseList.setErrorCode(ErrorCode.SUCCESS.getKey());
                commonResponseList.setMessage(ErrorCode.SUCCESS.getValue());
            }



        }catch (Exception e){
            e.getMessage();
            commonResponse.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponse.setMessage(ErrorCode.FAIL.getValue());
        }


        return ResponseEntity.ok(commonResponseList);
    }
    @GetMapping ("/view/get-post")
    ResponseEntity<?> getPost(@RequestParam Long id) {
        try {

            PostResponse postResponse = postService.getPostById(id);
            commonResponse.setDataResponse(postResponse);
            commonResponse.setErrorCode(ErrorCode.SUCCESS.getKey());
            commonResponse.setMessage(ErrorCode.SUCCESS.getValue());
        } catch (Exception e) {
            e.getMessage();
            commonResponse.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponse.setMessage(ErrorCode.FAIL.getValue());
        }
        return ResponseEntity.ok(commonResponse);
    }

    @GetMapping("/view/get-post-by-slug")
    ResponseEntity<CommonResponse> getPostBySlug(@RequestParam String slug){
        PostResponse postResponse = null;
        try {
            Post post = postService.getPostBySlug(slug);
            postResponse = new PostResponse(post.getId(),post.getTitle(),post.getDescription(),post.getImage(),post.getSlug(),post.getCreateAt(),post.getUpdateAt(),post.getContent(),post.getIsDelete(),post.getCategory().getSlug(),post.getAuthor().getUsername());
            commonResponse.setErrorCode(ErrorCode.SUCCESS.getKey());
            commonResponse.setMessage(ErrorCode.SUCCESS.getValue());
            commonResponse.setDataResponse(postResponse);
        }catch (Exception e){
            e.getMessage();
            commonResponse.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponse.setMessage(ErrorCode.FAIL.getValue());
        }

        return ResponseEntity.ok(commonResponse);
    }

    @GetMapping("/view/posts-by-category-slug")
    ResponseEntity<?> getPostsByCategorySlug(@RequestParam String slug){
        List<Object> objects = new ArrayList<>();
        try{
            List<PostResponse> postResponseList = postService.getPostsByCategorySlug(slug);
            for (PostResponse pr: postResponseList
                 ) {
                objects.add(pr);
            }
            commonResponseList.setErrorCode(ErrorCode.SUCCESS.getKey());
            commonResponseList.setMessage(ErrorCode.SUCCESS.getValue());
            commonResponseList.setDataResponseList(objects);

        }catch (Exception e){
            e.getMessage();
            commonResponseList.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponseList.setMessage(ErrorCode.FAIL.getValue());

        }
        return ResponseEntity.ok(commonResponseList);
    }

    @PostMapping("api/remove/remove-post")
    ResponseEntity<?> deletePostById(@RequestParam String id){
        Long postId = Long.parseLong(id);
        try{
           Boolean result = postService.DeletePost(postId);
            if (result != false){
                commonResponse.setDataResponse(result);
                commonResponse.setErrorCode(ErrorCode.SUCCESS.getKey());
                commonResponse.setMessage(ErrorCode.SUCCESS.getValue());
            }else{
                commonResponse.setErrorCode(ErrorCode.FAIL.getKey());
                commonResponse.setMessage(ErrorCode.FAIL.getValue());
            }

        }catch (Exception e){
            commonResponse.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponse.setMessage(ErrorCode.FAIL.getValue());

        }
        return ResponseEntity.ok(commonResponse);
    }

    @PostMapping("api/edit/update-post")
    ResponseEntity<?> updatePostById(@RequestParam String id, @RequestBody PostRequest postRequest){
        Long postId = Long.parseLong(id);
        try{
            Boolean result = postService.updatePostById(postId, postRequest);
            if (result != false){
                commonResponse.setDataResponse(result);
                commonResponse.setErrorCode(ErrorCode.SUCCESS.getKey());
                commonResponse.setMessage(ErrorCode.SUCCESS.getValue());
            }else{
                commonResponse.setErrorCode(ErrorCode.FAIL.getKey());
                commonResponse.setMessage(ErrorCode.FAIL.getValue());
            }

        }catch (Exception e){
            commonResponse.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponse.setMessage(ErrorCode.FAIL.getValue());
            e.getMessage();
        }
        return ResponseEntity.ok(commonResponse);
    }

    @GetMapping("/view/search-post-by-name")
    ResponseEntity<CommonResponseList> searchPostByName(@RequestParam String strSearch){
        try{
            List<PostResponse> listPost = postService.searchPostByName(strSearch);
            List<Object> result = new ArrayList<>();
            if(listPost != null){
                for (PostResponse p: listPost
                     ) {
                    result.add(p);
                }


                commonResponseList.setErrorCode(ErrorCode.SUCCESS.getKey());
                commonResponseList.setMessage(ErrorCode.SUCCESS.getValue());
                commonResponseList.setDataResponseList(result);
            }

        }catch (Exception e){
            e.getMessage();
            commonResponseList.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponseList.setMessage(ErrorCode.FAIL.getValue());
        }
        return ResponseEntity.ok(commonResponseList);
    }

    @GetMapping("api/user/post-liked")
    ResponseEntity<CommonResponseList> getPostLikedByUser(@RequestParam String email){
        try {
            List<PostResponse> responseList = postService.getPostLikedByUser(email);
            List<Object> result = new ArrayList<>();
            if(responseList != null) {
                for (PostResponse p : responseList
                ) {
                    result.add(p);
                }
            }
            commonResponseList.setErrorCode(ErrorCode.SUCCESS.getKey());
            commonResponseList.setMessage(ErrorCode.SUCCESS.getValue());
            commonResponseList.setDataResponseList(result);

        }catch (Exception e){
            e.getMessage();
            commonResponseList.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponseList.setMessage(ErrorCode.FAIL.getValue());
        }
        return ResponseEntity.ok(commonResponseList);
    }
}
