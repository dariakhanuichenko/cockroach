package com.repository;

import com.entity.Insect;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InsectRepository extends MongoRepository<Insect, Long> {
}
