package com.nazacodes.re_amigos_practice.services;

import com.nazacodes.re_amigos_practice.SoftwareEngineer;
import com.nazacodes.re_amigos_practice.SoftwareEngineerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SoftwareEngineerService {
    private final SoftwareEngineerRepository softwareEngineerRepository;

    public SoftwareEngineerService(SoftwareEngineerRepository softwareEngineerRepository) {
        this.softwareEngineerRepository = softwareEngineerRepository;
    }

    public List<SoftwareEngineer> getSoftwareEngineers(){
        return softwareEngineerRepository.findAll();
    }

    public SoftwareEngineer getSoftwareEngineerById(Integer id){
        return softwareEngineerRepository.findById(id).orElseThrow(()->new IllegalStateException("ID " + id + " not found"));
    }

    public SoftwareEngineer getSoftwareEngineerByName(String name){
        return softwareEngineerRepository.findByName(name).orElseThrow(()->new RuntimeException("Software Engineer not found with name: " + name));
    }

    public void addSoftwareEngineers(SoftwareEngineer softwareEngineer){
        softwareEngineerRepository.save(softwareEngineer);
    }
}
