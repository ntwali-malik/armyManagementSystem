package com.exam.ArmyManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.ArmyManagementSystem.entity.Soldier;

public interface SoldierRepository extends JpaRepository<Soldier, Long> {

}
