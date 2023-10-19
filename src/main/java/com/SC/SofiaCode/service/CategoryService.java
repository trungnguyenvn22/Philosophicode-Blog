package com.SC.SofiaCode.service;


import com.SC.SofiaCode.model.Category;
import com.SC.SofiaCode.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CategoryService {

    List<Category> getAllCategory();
    List<Category> getAllCategoryWithPagination();

    Category getCategoryById(Long id);

    List<Category> searchCategoryByName(String categoryName);

    void addCategory(Category category);

    Category getCategoryBySlug(String slug);






}
