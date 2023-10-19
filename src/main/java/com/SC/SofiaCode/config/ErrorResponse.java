package com.SC.SofiaCode.config;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ErrorResponse {
    private HttpStatus statusCode;
    private String errorMessage;
    private Object body;
    public ErrorResponse(HttpStatus statusCode, String errorMessage){
        this(statusCode,errorMessage,errorMessage);
    }
    public int getStatusCode(){
        return statusCode.value();
    }
}
