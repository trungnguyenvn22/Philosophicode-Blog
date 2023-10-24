package com.SC.SofiaCode.repository;

import com.SC.SofiaCode.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long>, CrudRepository<Comment, Long> {


    @Query(value = "select c from Comment c where c.post.id =?1 and c.parentId = null")
    List<Comment> getCommentByPost(Long postId);

    @Query(value = "select c from Comment c where c.parentId =?1")
    List<Comment> getReplies(Long parentId);
}
