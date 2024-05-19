package com.exam.ArmyManagementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.ArmyManagementSystem.dto.MissionDto;
import com.exam.ArmyManagementSystem.entity.Mission;
import com.exam.ArmyManagementSystem.entity.Unit;
import com.exam.ArmyManagementSystem.repository.MissionRepository;
import com.exam.ArmyManagementSystem.repository.UnitRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/Mission")
@CrossOrigin(origins = "http://localhost:3000")
public class MissionController {

	
	 @Autowired
	 private MissionRepository missionRepository;

	 @Autowired
	 private UnitRepository unitRepository;
	 
	// Get all missions
	@GetMapping("/all")
	public List<Mission> getAllMissions() {
	    return missionRepository.findAll();
	  }
	
	 // Get mission by ID
    @GetMapping("/{missionID}")
    public ResponseEntity<Object> getMission(@PathVariable int missionID) {
        Mission mission = missionRepository.findById(missionID).orElse(null);
        if (mission == null) {
            return new ResponseEntity<>("Mission with ID " + missionID + " not found", HttpStatus.NOT_FOUND);
        } else {
            return ResponseEntity.ok(mission);
        }
    }
    
 // Create a new mission
    @PostMapping("/addMission")
    public ResponseEntity<Object> saveMission(@Valid @RequestBody MissionDto missionDto) {
        Mission mission = new Mission();
        mission.setMissionName(missionDto.getMissionName());
        mission.setMissionType(missionDto.getMissionType());
        mission.setStartDate(missionDto.getStartDate());
        mission.setEndDate(missionDto.getEndDate());

        Unit unit = unitRepository.findById(missionDto.getUnit())
                .orElseThrow(() -> new RuntimeException("Unit not found"));
        mission.setUnit(unit);

        missionRepository.save(mission);

        return ResponseEntity.ok(mission);
    }
    
 // Update an existing mission
    @PutMapping("/updateMission/{missionID}")
    public ResponseEntity<Object> updateMission(@PathVariable int missionID, @Valid @RequestBody MissionDto missionDto) {
        Mission existingMission = missionRepository.findById(missionID)
                .orElseThrow(() -> new RuntimeException("Mission not found"));

        existingMission.setMissionName(missionDto.getMissionName());
        existingMission.setMissionType(missionDto.getMissionType());
        existingMission.setStartDate(missionDto.getStartDate());
        existingMission.setEndDate(missionDto.getEndDate());

        Unit unit = unitRepository.findById(missionDto.getUnit())
                .orElseThrow(() -> new RuntimeException("Unit not found"));
        existingMission.setUnit(unit);

        missionRepository.save(existingMission);

        return ResponseEntity.ok(existingMission);
    }
    
 // Delete an existing mission
    @DeleteMapping("/deleteMission/{missionID}")
    public ResponseEntity<Object> deleteMission(@PathVariable int missionID) {
        Mission existingMission = missionRepository.findById(missionID)
                .orElseThrow(() -> new RuntimeException("Mission not found"));

        missionRepository.delete(existingMission);

        return ResponseEntity.ok("Mission with ID " + missionID + " has been deleted");
    }
}
