package com.SC.SofiaCode.service.impl;

import com.SC.SofiaCode.model.Category;
import com.SC.SofiaCode.repository.CategoryRepository;
import com.SC.SofiaCode.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategory() {
        List<Category> categories = new ArrayList<>();
        categories = categoryRepository.getListCategory();
        return categories;
    }

    @Override
    public List<Category> getAllCategoryWithPagination() {
        return null;
    }

    @Override
    public Category getCategoryById(Long id) {
        return null;
    }

    @Override
    public List<Category> searchCategoryByName(String categoryName) {
        return null;
    }

    @Override
    public void addCategory(Category category) {
        String categoryName = category.getTitle();
        String categorySlug = category.getSlug();
        Category category1 = new Category();
        category1.setSlug(categorySlug);
        category1.setTitle(categoryName);
        categoryRepository.save(category1);
        try {
        } catch (Exception e) {
            e.getMessage();
        }
    }

    @Override
    public Category getCategoryBySlug(String slug) {
        Category category = null;
        try {
            category = categoryRepository.getCategoryBySlug(slug);
            if (category != null){
                return category;
            }

        }catch (Exception e){
            e.getMessage();
            System.out.println(e.getMessage());
        }
        return null;
    }
}
