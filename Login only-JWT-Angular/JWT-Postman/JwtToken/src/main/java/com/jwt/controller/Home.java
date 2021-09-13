package com.jwt.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class Home {

    @GetMapping ("/welcome")
    public String  welcome(){

        return "This is private page";
    }

    @RequestMapping("/getUsers")
    public String getUser(){

        return "{\"name\":\"Tiraj\"}";
    }

}
