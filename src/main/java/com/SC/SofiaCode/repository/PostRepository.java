package com.SC.SofiaCode.repository;

import com.SC.SofiaCode.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>, CrudRepository<Post, Long> {

    Post getPostById(Long id);

    @Query("select p from Post p join Category c on p.category.id = c.id where c.slug = ?1 and p.isDelete = false ")
    List<Post> getPostsByCategorySlug(String slug);

    Post getPostBySlug(String slug);

    @Query("select p from Post p where p.isDelete = false ")
    List<Post> getAllPost();

    @Modifying
    @Query(value = "update Post  set is_Delete = true where id=?1", nativeQuery = true)
    void deletePost(Long id);

    @Query(value = "select p from Post p where p.title like %?1% and p.isDelete = false ")
    List<Post> searchPostsByName(String postName);




}
