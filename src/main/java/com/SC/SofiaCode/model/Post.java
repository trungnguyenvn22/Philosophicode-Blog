package com.SC.SofiaCode.model;

import com.SC.SofiaCode.model.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "post")
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "post_image")
    private String image;
    @Column(name = "slug")
    private String slug;
    @Temporal(TemporalType.DATE)
    @Column(name = "create_At")
    private Date createAt;
    @Temporal(TemporalType.DATE)
    @Column(name = "update_At")
    private Date updateAt;
    @Column(name = "content",columnDefinition = "TEXT")

    private String content;
    @Column(name = "isDelete")
    private Boolean isDelete;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User author;

    @OneToMany(mappedBy = "post")
    Set<User_Post_Liked> userPostLiked;



    public Post( String title,String description, String image, String slug, Date createAt, Date updateAt, String content, Boolean isDelete, Category category, User author) {

        this.title = title;
        this.description= description;
        this.image = image;
        this.slug = slug;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.content = content;
        this.isDelete = isDelete;
        this.category = category;
        this.author = author;
    }
}