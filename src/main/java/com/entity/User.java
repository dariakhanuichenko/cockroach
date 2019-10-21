package com.entity;


import lombok.*;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class User {
    @Id
    private Long id;

    private String username;

}
