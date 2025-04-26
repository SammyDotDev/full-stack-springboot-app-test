package com.nazacodes.re_amigos_practice;

import com.nazacodes.re_amigos_practice.services.SoftwareEngineerService;
import jakarta.websocket.OnError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v2/software-engineer")
public class SoftwareEngineerController {
    private final SoftwareEngineerService softwareEngineerService;

    public SoftwareEngineerController(SoftwareEngineerService softwareEngineerService){
        this.softwareEngineerService = softwareEngineerService;
    }

    @GetMapping
    public List<SoftwareEngineer> getSoftwareEngineers(){
        return softwareEngineerService.getSoftwareEngineers();
    }

    @GetMapping("/id/{id}")
    public SoftwareEngineer getSoftwareEngineerById(@PathVariable Integer id){
        return softwareEngineerService.getSoftwareEngineerById(id);
    }

    @PostMapping
    public Map<String, String> addSoftwareEngineer(@RequestBody SoftwareEngineer softwareEngineer){
        Map<String, String> message = new HashMap<>();
        if(softwareEngineer.getEmail()==null){
            message.put("message", "Email address cannot be null");
        }else if(softwareEngineer.getName()==null){
            message.put("message", "Name cannot be null");
        }else if(softwareEngineer.getTechStack().isEmpty()){
            message.put("message", "Empty tech stack, please input your tech stack");
        }else{
            message.put("message", "successfully added software engineer");
            softwareEngineerService.addSoftwareEngineers(softwareEngineer);
        }
        return message;
    }

    @GetMapping("/name/{name}")
    public SoftwareEngineer getSoftwareEngineerByName(@PathVariable String name){
        return softwareEngineerService.getSoftwareEngineerByName(name);
    }

}
