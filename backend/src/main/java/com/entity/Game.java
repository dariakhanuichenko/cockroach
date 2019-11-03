package main.java.com.entity;


import lombok.*;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Game {

    @Id
    private Long id;

    private String title;

    private Integer numberOfUsers;

    private String gameUrl;

    private String status;

    private Integer sizeVertical;

    private Integer sizeHorizontal;
}
