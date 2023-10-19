package com.SC.SofiaCode.dto;

import com.SC.SofiaCode.model.Category;
import com.SC.SofiaCode.model.user.User;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostRequest {


    private String title;

    private String description;;


    private String image;

    private String slug;

    private Date createAt;

    private Date updateAt;

    @Column(columnDefinition = "TEXT")
    private String content;

    private Boolean isDelete;


    private String categoryName;


    private String email;
}
