package com.nazacodes.re_amigos_practice.exception;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/error")
public class OnError {

    @jakarta.websocket.OnError
    public String error(){
        return "Error on backend";
    }
}
