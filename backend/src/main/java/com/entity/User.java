package main.java.com.entity;


import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class User {
    @Id
    private Long id;

    private String username;

    private List<Long> gameId;

    private Integer score;

    private Boolean isMyTurn;


}
