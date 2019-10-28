package com.service;

import com.entity.Game;
import com.entity.User;
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
                .sizeVertical(10)
                .sizeHorizontal(3)
                .id(1L)
                .build());

        items.add(Game.builder()
                .title("second")
                .gameUrl("url")
                .status("created")
                .numberOfUsers(2)
                .sizeVertical(10)
                .sizeHorizontal(3)
                .id(2L)
                .build());

        items.add(Game.builder()
                .title("Third")
                .gameUrl("url")
                .status("created")
                .sizeVertical(10
                ).sizeHorizontal(3)
                .numberOfUsers(2)
                .id(3L)
                .build());
    }

    @Autowired
    private GameRepository gameRepository;

    @PostConstruct
    public void init() {
       // gameRepository.save(items);
    }
    public String getInvitedLink(User user){
        return gameRepository.findById(user.getGameId()).get().getGameUrl();
    }
    public String generateInviteLink() {
        String link = "http//game";
        return "link";
    }

    public Game createGame(String title,Integer numberOfUsers, Integer sizeVertical, Integer sizeHorizontal) {
        String gameUrl = generateInviteLink();
        Game game = new Game();
        game.setTitle(title);
        game.setGameUrl(gameUrl);
        game.setSizeHorizontal(sizeHorizontal);
        game.setSizeVertical(sizeVertical);
        game.setNumberOfUsers(numberOfUsers);
        game = gameRepository.save(game);
        return game;
    }
}

