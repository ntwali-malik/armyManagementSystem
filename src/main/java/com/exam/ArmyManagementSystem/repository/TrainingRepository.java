package com.exam.ArmyManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.ArmyManagementSystem.entity.Training;

public interface TrainingRepository extends JpaRepository<Training, Integer> {

}
