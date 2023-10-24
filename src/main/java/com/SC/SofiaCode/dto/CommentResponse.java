package com.SC.SofiaCode.dto;

import com.SC.SofiaCode.model.Post;
import com.SC.SofiaCode.model.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CommentResponse {

    private Long id;


    private String content;


    private Long parentId;


    private Long postId;


    private String username;

    public CommentResponse(Long id, String content, Long parentId, Long postId, String username) {
        this.id = id;
        this.content = content;
        this.parentId = parentId;
        this.postId = postId;
        this.username = username;
    }
}
