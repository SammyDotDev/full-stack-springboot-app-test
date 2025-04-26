package com.nazacodes.re_amigos_practice;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SoftwareEngineerRepository extends JpaRepository<SoftwareEngineer, Integer> {
    Optional<SoftwareEngineer> findByName(String name);
}
