package com.SC.SofiaCode.controller;

import com.SC.SofiaCode.model.Category;
import com.SC.SofiaCode.service.CategoryService;
import com.SC.SofiaCode.util.CommonResponse;
import com.SC.SofiaCode.util.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
@RequestMapping("api")
public class CategoryController {

    @Autowired
    CategoryService categoryService;
    CommonResponse commonResponse = new CommonResponse();

    @GetMapping("/new/get-category")
    public ResponseEntity<?> getAllCategory(){
        return ResponseEntity.ok(categoryService.getAllCategory());
    }

    @PostMapping("new/add-category")
    public ResponseEntity<?> saveCategory(@RequestBody  Category category){

        try {
              categoryService.addCategory(category);
                commonResponse.setErrorCode(ErrorCode.SUCCESS.getKey());
                commonResponse.setMessage(ErrorCode.SUCCESS.getValue());
                commonResponse.setDataResponse(category);
        }catch (Exception e){
            e.getMessage();
            commonResponse.setErrorCode(ErrorCode.FAIL.getKey());
            commonResponse.setMessage(ErrorCode.FAIL.getValue());
        }

        return ResponseEntity.ok(commonResponse);
        }
    }



