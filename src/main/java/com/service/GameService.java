package com.service;

import com.entity.Game;
import com.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Service
public class GameService {

    private static List<Game> items = new ArrayList<>();

    static {
        items.add(Game.builder()
                .title("First")
                .gameUrl("url")
                .status("created")
                .numberOfUsers(2)
                .size(10)
                .id(1L)
                .build());

        items.add(Game.builder()
                .title("second")
                .gameUrl("url")
                .status("created")
                .numberOfUsers(2)
                .size(10)
                .id(2L)
                .build());

        items.add(Game.builder()
                .title("Third")
                .gameUrl("url")
                .status("created")
                .size(10)
                .numberOfUsers(2)
                .id(3L)
                .build());
    }

    @Autowired
    private GameRepository gameRepository;

//    @PostConstruct
//    public void init() {
//        gameRepository.save(items);
//    }
}

