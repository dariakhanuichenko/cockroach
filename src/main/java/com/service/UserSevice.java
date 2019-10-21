package com.service;

import com.entity.User;
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

    private static  List<User> items=new ArrayList<>();

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

//    @PostConstruct
//    public void init(){
//        userRepository.save(items);
//    }
}
