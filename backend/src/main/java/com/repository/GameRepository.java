package main.java.com.repository;

import main.java.com.entity.Game;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GameRepository extends MongoRepository<Game, Long> {
}
