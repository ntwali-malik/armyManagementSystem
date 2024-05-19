package com.exam.ArmyManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.ArmyManagementSystem.entity.Unit;

public interface UnitRepository extends JpaRepository<Unit, Integer> {

}
