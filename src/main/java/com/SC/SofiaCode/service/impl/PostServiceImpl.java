package com.SC.SofiaCode.service.impl;

import com.SC.SofiaCode.dto.PostRequest;
import com.SC.SofiaCode.dto.PostResponse;
import com.SC.SofiaCode.model.Category;
import com.SC.SofiaCode.model.Post;
import com.SC.SofiaCode.model.user.User;
import com.SC.SofiaCode.repository.CategoryRepository;
import com.SC.SofiaCode.repository.PostRepository;
import com.SC.SofiaCode.repository.user.UserRepository;
import com.SC.SofiaCode.service.CategoryService;
import com.SC.SofiaCode.service.PostService;
import com.SC.SofiaCode.util.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepository postRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    CategoryService categoryService;
    @Override
    public PostResponse getPostById(Long id) {
        Post post = new Post();
        PostResponse postResponse = null;


        post = postRepository.getPostById(id);


        if (post != null){
            Category category = new Category();
            category = post.getCategory();
            User user = new User();
            user = post.getAuthor();
            String categoryName = category.getTitle();
            String authorName = user.getUsername();
            postResponse = new PostResponse(post.getTitle(),post.getDescription(),post.getImage(),post.getSlug(),post.getCreateAt(),post.getUpdateAt(),post.getContent(),post.getIsDelete(),categoryName,authorName);
        }
        return postResponse;
    }

    @Override
    public Post getPostByName(String postName) {
        return null;
    }

    @Override
    public Post getPostBySlug(String categorySlug) {

        Post post = new Post();
        try {
            post = postRepository.getPostBySlug(categorySlug);
            if(post != null){
                return post;
            }
        }catch (Exception e){
            e.getMessage();
        }


        return null;
    }

    @Override
    public void addNewPost(PostRequest postRequest) {

        Category category = new Category();
        category = categoryRepository.findCategoryByTitle(postRequest.getCategoryName());
        User user = new User();
        user = userRepository.findByEmail(postRequest.getEmail()).orElseThrow(()-> new NoSuchElementException(ErrorCode.DATA_NOT_FOUND.getValue()));

        String title = postRequest.getTitle();
        String image = postRequest.getImage();
        String slug = postRequest.getSlug();
        Date createdDate = new Date(System.currentTimeMillis());
        Date updateDate = postRequest.getUpdateAt();
        String content = postRequest.getContent();
        String description = postRequest.getDescription();
        Boolean isDelete = false;
        Post postNew = new Post(title,description,image,slug,createdDate,updateDate,content,isDelete,category, user);
        postRepository.save(postNew);



    }

    @Override
    public Boolean updatePost(Long idPost, Post postUpdate) {
        return null;
    }

    @Override
    public List<PostResponse> getAllPostWithPagination() {
        return null;
    }

    @Override
    public List<PostResponse> getAllPosts() {
        List<Post> posts = new ArrayList<>();
        List<PostResponse>  result= new ArrayList<>();

        try {
            posts = postRepository.getAllPost();

            for (Post p: posts
                 ) {
                result.add(new PostResponse(p.getId(),p.getTitle(),p.getDescription(),p.getImage(),p.getSlug(),p.getCreateAt(),p.getUpdateAt(),p.getContent(),p.getIsDelete(),p.getCategory().getSlug(),p.getAuthor().getUsername()));
            }
            if (result != null){
                return result;
            }

        }catch (Exception e){
            e.getMessage();
        }
        return null;
    }

    @Override
    public List<PostResponse> searchPostByName(String strPostName) {
        try {
            List<Post> postsSearch = postRepository.searchPostsByName(strPostName);
            List<PostResponse> result = new ArrayList<>();

            for (Post p: postsSearch
            ) {

                result.add(new PostResponse(p.getId(),p.getTitle(),p.getDescription(),p.getImage(),p.getSlug(),p.getCreateAt(),p.getUpdateAt(),p.getContent(),p.getIsDelete(),p.getCategory().getTitle(), p.getAuthor().getUsername()));
            }
            return result;

        }catch(Exception e){
            e.getMessage();
        }
        return null;
    }

    @Override
    public List<Post> sortPostByDate(String conditionSort) {
        return null;
    }

    @Override
    public Post getFirstPost() {
        return null;
    }

    @Override
    public Post getFeaturePost() {
        return null;
    }

    @Override
    public List<PostResponse> getPostsByCategorySlug(String categorySlug) {

        List<Post> listPost = new ArrayList<>();
        List<PostResponse> result = new ArrayList<>();
        
        
        
        try {
            
            listPost = postRepository.getPostsByCategorySlug(categorySlug);
            if (listPost != null){
                for (Post p:listPost
                     ) {
                    result.add(new PostResponse(p.getId(),p.getTitle(),p.getDescription(), p.getImage(), p.getSlug(), p.getCreateAt(),p.getUpdateAt(), p.getContent(), p.getIsDelete(),p.getCategory().getTitle(), p.getAuthor().getUsername()));
                }
            }
            if (result != null){
                return result;
            }
            
        }catch (Exception e){
            e.getMessage();
            System.out.println(e.getMessage());
        }


        return null;
    }

    @Override
    public PostResponse getPostByCategory(String categorySlug) {
        return null;
    }

    @Override
    public Boolean DeletePost(Long postId) {
        try{
            Post postRequest = postRepository.getPostById(postId);
            if (postRequest != null){
                postRequest.setIsDelete(true);
                postRepository.save(postRequest);
//                postRepository.deletePost(postId);
//                Post post = postRepository.getPostById(postId);
                return true;
            }else {
                throw new NoSuchElementException("No Post to found");

            }



        }catch (Exception e){
            e.getMessage();
        }


        return false;
    }

    @Override
    public List<PostResponse> searchAllPostsByTitle(String searchReq) {
        return null;
    }

    @Override
    public List<PostResponse> searchPostByCategorySlugAndTitle(String categorySlug, String searchReq) {
        return null;
    }

    @Override
    public Boolean updatePostById(Long id, PostRequest postRequest) {
        try{
            Post post = postRepository.getPostById(id);
            Category category = categoryRepository.getCategoryBySlug(postRequest.getSlug());

            if (post != null){
                post.setUpdateAt(new Date(System.currentTimeMillis()));
                post.setTitle(postRequest.getTitle());
                post.setSlug(postRequest.getSlug());
                post.setContent(postRequest.getContent());
                post.setDescription(postRequest.getDescription());
                post.setImage(postRequest.getImage());
                if (category != null){
                    post.setCategory(category);
                }
                postRepository.save(post);


                return true;
            }else {
                throw new NoSuchElementException("No Post to found");

            }



        }catch (Exception e){
            e.getMessage();
        }


        return false;
    }

    @Override
    public List<PostResponse> getPostLikedByUser(String email) {
        List<Post> post = new ArrayList<>();
        List<PostResponse> result = new ArrayList<>();

        try{
            post = postRepository.getPostLikedByUser(email);
            if(post != null){
                for (Post p: post
                     ) {

                    result.add(new PostResponse(p.getId(),p.getTitle(),p.getDescription(),p.getImage(),p.getSlug(),p.getCreateAt(),p.getUpdateAt(),p.getContent(),p.getIsDelete(),p.getAuthor().getUsername(), p.getCategory().getTitle()));
                }
            }
            if (result != null){
                return result;
            }else{
                return null;
            }


        }catch (Exception e){
            e.getMessage();
        }

        return null;
    }

}
