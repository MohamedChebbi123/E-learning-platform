package com.elearning.user.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisterResponse {

    private Long id;
    private String email;
    private String username;
    private String fullName;
    private String message;
}
