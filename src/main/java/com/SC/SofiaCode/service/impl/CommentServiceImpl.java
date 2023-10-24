package com.SC.SofiaCode.service.impl;

import com.SC.SofiaCode.dto.CommentRequest;
import com.SC.SofiaCode.dto.CommentResponse;
import com.SC.SofiaCode.dto.PostResponse;
import com.SC.SofiaCode.model.Comment;
import com.SC.SofiaCode.model.Post;
import com.SC.SofiaCode.model.user.User;
import com.SC.SofiaCode.repository.CommentRepository;
import com.SC.SofiaCode.repository.PostRepository;
import com.SC.SofiaCode.repository.user.UserRepository;
import com.SC.SofiaCode.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PostRepository postRepository;

    @Override
    public List<CommentResponse> getCommentByPost(Long postId) {
            List<Comment> commentList = new ArrayList<>();
            List<CommentResponse> result = new ArrayList<>();
        try{
            commentList = commentRepository.getCommentByPost(postId);
            if(commentList != null){

                for (Comment c: commentList
                     ) {
                    result.add(new CommentResponse(c.getId(), c.getContent(), c.getParentId(),c.getPost().getId(), c.getUser().getUserName()));
                }
                return result;
            }

        }catch (Exception e){
            e.getMessage();
        }

        return null;
    }

    @Override
    public List<CommentResponse> getRepliesByComment(Long commentId) {
        List<Comment> commentList = new ArrayList<>();
        List<CommentResponse> result = new ArrayList<>();
        try{
            commentList = commentRepository.getReplies(commentId);
            if(commentList != null){
                for (Comment c:commentList
                     ) {
                    result.add(new CommentResponse(c.getId(),c.getContent(),c.getParentId(),c.getPost().getId(),c.getUser().getUserName()));
                }
                return result;
            }

        }catch (Exception e){
            e.getMessage();
        }

        return null;
    }

    @Override
    public Boolean saveComment(CommentRequest commentRequest) {
        Comment comment = null;
        try{
            User user = userRepository.findByEmail(commentRequest.getEmail()).orElseThrow();
            Post post = postRepository.getPostById(commentRequest.getPostId());
            if(user != null && post!= null){
                comment = new Comment(commentRequest.getContent(), commentRequest.getParentId(), post, user);
                if (comment != null){
                    commentRepository.save(comment);
                    return true;
                }else {
                    return false;
                }

            }

        }catch (Exception e){
            e.getMessage();
        }
        return false;
    }

    @Override
    public Boolean saveReplies(CommentRequest commentRequest) {
        return null;
    }
}
