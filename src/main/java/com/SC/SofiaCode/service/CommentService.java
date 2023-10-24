package com.SC.SofiaCode.service;

import com.SC.SofiaCode.dto.CommentRequest;
import com.SC.SofiaCode.dto.CommentResponse;
import com.SC.SofiaCode.model.Comment;

import java.util.List;

public interface CommentService {

    List<CommentResponse> getCommentByPost(Long postId);
    List<CommentResponse> getRepliesByComment(Long commentId );

    Boolean saveComment(CommentRequest commentRequest);

    Boolean saveReplies(CommentRequest commentRequest);

}
