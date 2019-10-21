package com.controller;

import com.service.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class UserController {

    @Autowired
    private UserSevice userSevice;

    public void viewAllUsers(){

        userSevice.findAll().ifPresent(System.out::println);
    }
}
