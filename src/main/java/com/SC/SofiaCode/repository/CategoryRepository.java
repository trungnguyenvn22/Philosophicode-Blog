package com.SC.SofiaCode.repository;

import com.SC.SofiaCode.model.Category;
import jakarta.persistence.TypedQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>, CrudRepository<Category,Long> {

    @Query(" select c from Category c")
    List<Category> getListCategory();


    @Query(value = "insert into category (title, slug) values (?1, ?2)", nativeQuery = true)
    void addCategory(Category category);

    Category findCategoryByTitle(String categoryName);

    @Query("Select c from Category c where c.slug =?1")
    Category getCategoryBySlug(String Slug);

    Category findCategoryById(Long id);
}
