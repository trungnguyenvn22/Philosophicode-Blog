package com.SC.SofiaCode.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommentRequest {

    private Long parentId;
    private String content;
    private String email;
    private Long postId;

}
