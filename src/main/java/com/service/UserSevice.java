package com.service;

import com.entity.Game;
import com.entity.User;
import com.repository.GameRepository;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserSevice {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private GameRepository gameRepository;

    private static List<User> items = new ArrayList<>();

    static {
        items.add(User.builder()
                .id(1L)
                .username("marina123")
                .build());
        items.add(User.builder()
                .id(2L)
                .username("sanek")
                .build());
        items.add(User.builder()
                .id(3L)
                .username("romario")
                .build());

    }

    public Optional<List<User>> findAll() {
        return Optional.ofNullable(userRepository.findAll());
    }

    @PostConstruct
    public void init() {
      //  userRepositorysave(items);
    }

    public void isOnThePage(int userId) {

    }




    public User createCreatorUser(String userName, String title, Integer numberOfUsers, Integer sizeVertical, Integer sizeHorizontal) {
        GameService gameService = new GameService();
        Game game = gameService.createGame(title, numberOfUsers, sizeVertical, sizeHorizontal);
        User user = new User();
        user.setUsername(userName);
        user.setScore(0);
        user.setIsMyTurn(false);
        user.setGameId(game.getId());
        user = userRepository.save(user);
        return user;
    }

    public User createUser(String userName, String gameUrl) {
        Optional<Game> game = gameRepository.findByGameUrl(gameUrl);
        User user = new User();
        user.setUsername(userName);
        user.setScore(0);
        user.setIsMyTurn(false);
        user.setGameId(game.get().getId());
        user = userRepository.save(user);
        return user;

    }
}
