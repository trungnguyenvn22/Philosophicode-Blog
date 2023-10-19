package com.SC.SofiaCode.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class PostResponse {

    private Long id;
    private String title;
    private String description;


    private String image;

    private String slug;

    private Date createAt;

    private Date updateAt;


    private String content;

    private Boolean isDelete;


    private String categoryName;


    private String authorName;

    public PostResponse(String title,String description, String image, String slug, Date createAt, Date updateAt, String content, Boolean isDelete, String categoryName, String authorName) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.slug = slug;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.content = content;
        this.isDelete = isDelete;
        this.categoryName = categoryName;
        this.authorName = authorName;
    }
    public PostResponse(Long id,String title,String description, String image, String slug, Date createAt, Date updateAt, String content, Boolean isDelete, String categoryName, String authorName) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.slug = slug;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.content = content;
        this.isDelete = isDelete;
        this.categoryName = categoryName;
        this.authorName = authorName;
    }
}
