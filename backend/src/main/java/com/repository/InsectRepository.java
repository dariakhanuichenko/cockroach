package main.java.com.repository;

import main.java.com.entity.Insect;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InsectRepository extends MongoRepository<Insect, Long> {
}
