package com.controller;

import com.entity.User;
import com.service.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

    @Autowired
    private UserSevice userSevice;

    public void viewAllUsers() {

        userSevice.findAll().ifPresent(System.out::println);
    }

    @GetMapping(value = "user")
    public @ResponseBody
    User registrateUser(@RequestParam  String userName, @RequestParam String url) {
        return userSevice.createUser(userName, url);
    }
    @GetMapping(value = "creator")
    public @ResponseBody
    User registrateCreator(@RequestParam String userName, @RequestParam String title,@RequestParam Integer numberOfUsers,
                           @RequestParam Integer sizeVertical,
                           @RequestParam Integer sizeHorizontal) {
        return userSevice.createCreatorUser(userName,title,numberOfUsers,sizeVertical,sizeHorizontal);
    }
}
