package com.SC.SofiaCode.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignupRequest {
    private String user_name;
    private String email;
    private String password;

}
