package main.java.com.controller;

import main.java.com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    public void viewAllUsers(){

        userService.findAll().ifPresent(System.out::println);
    }
}
