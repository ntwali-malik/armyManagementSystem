package com.exam.ArmyManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.ArmyManagementSystem.entity.Mission;

public interface MissionRepository extends JpaRepository<Mission, Integer> {

}
