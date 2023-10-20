package com.SC.SofiaCode.service;

import com.SC.SofiaCode.dto.PostRequest;
import com.SC.SofiaCode.dto.PostResponse;
import com.SC.SofiaCode.model.Post;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PostService {

    PostResponse getPostById(Long id);
    Post getPostByName(String postName);

    Post getPostBySlug(String categorySlug);

    void addNewPost(PostRequest postRequest);
    Boolean updatePost(Long idPost, Post postUpdate);

    List<PostResponse> getAllPostWithPagination();
    List<PostResponse> getAllPosts();

    List<PostResponse> searchPostByName(String strPostName);

    List<Post> sortPostByDate(String conditionSort);

    Post getFirstPost();
    Post getFeaturePost();

    List<PostResponse> getPostsByCategorySlug(String categorySlug);

    PostResponse getPostByCategory(String categorySlug);

   Boolean DeletePost(Long postId);

   List<PostResponse> searchAllPostsByTitle(String searchReq);

   List<PostResponse> searchPostByCategorySlugAndTitle(String categorySlug, String searchReq);

   Boolean updatePostById(Long id, PostRequest postRequest);

   List<PostResponse> getPostLikedByUser(String email);




}
