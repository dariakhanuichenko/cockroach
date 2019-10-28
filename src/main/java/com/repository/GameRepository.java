package com.repository;

import com.entity.Game;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface GameRepository extends MongoRepository<Game, Long> {
    boolean existsGameByGameUrl();

    Optional<Game> findByGameUrl(String url);

    Optional<Game> findById(Long Id);
}
