package com.controller;

import com.service.InsectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class InsectController {

    @Autowired
    private InsectService insectService;
}
