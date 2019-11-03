package main.java.com.service;

import main.java.com.entity.Game;
import main.java.com.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class GameService {

    private static AtomicLong id = new AtomicLong();

    private static List<Game> items = new ArrayList<>();

    static {
        id.set(0);
        items.add(add(Game.builder()
                .title("First")
                .gameUrl("url")
                .status("created")
                .numberOfUsers(2)
                .sizeHorizontal(10)
                .sizeVertical(15)
                .build()));

        items.add(add(Game.builder()
                .title("second")
                .gameUrl("url")
                .status("created")
                .numberOfUsers(2)
                .sizeHorizontal(10)
                .sizeVertical(15)
                .build()));

        items.add(add(Game.builder()
                .title("Third")
                .gameUrl("url")
                .status("created")
                .sizeHorizontal(10)
                .sizeVertical(15)
                .numberOfUsers(2)
                .build()));
    }

    @Autowired
    private GameRepository gameRepository;

    public static Game add(Game game) {
        game.setId(id.incrementAndGet());
        return game;
    }

    @PostConstruct
    public void init() {
        gameRepository.save(items);
    }
}

