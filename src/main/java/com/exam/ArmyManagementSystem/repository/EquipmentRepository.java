package com.exam.ArmyManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.ArmyManagementSystem.entity.Equipment;

public interface EquipmentRepository extends JpaRepository<Equipment, Integer> {

}
