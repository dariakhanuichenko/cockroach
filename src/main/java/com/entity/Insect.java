package com.entity;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Insect {

    private Integer x;

    private Integer y;

    private Long gameId;

    private String type;
}
