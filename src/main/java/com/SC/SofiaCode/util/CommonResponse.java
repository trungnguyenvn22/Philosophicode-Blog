package com.SC.SofiaCode.util;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommonResponse {
    private String errorCode;
    private String message;
    private Object dataResponse;
}
