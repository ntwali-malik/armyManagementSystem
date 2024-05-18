package com.exam.ArmyManagementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.exam.ArmyManagementSystem.dto.SoldierDto;
import com.exam.ArmyManagementSystem.entity.Soldier;
import com.exam.ArmyManagementSystem.repository.SoldierRepository;
//import jakarta.validation.Valid;
//
//import jakarta.validation.Valid;

@RestController
@RequestMapping("/Soldier")
@CrossOrigin(origins = "http://localhost:3000")
public class SoldierController {

	@Autowired
	private SoldierRepository repo;
	
	//Display all Soldiers
	public List<Soldier> getAllSoldiers(){
		return repo.findAll();
	}
	
	//Display Soldier Based on ID
	@GetMapping("/{soldierId}")
	public ResponseEntity<Object> getSoldier(@PathVariable Long id) {
		   Soldier soldier = repo.findById(id).orElse(null);
		    if (soldier == null) {
		        return new ResponseEntity<>("Soldier with ID " + id + " not found", HttpStatus.NOT_FOUND);
		    } else {
		        return ResponseEntity.ok(soldier);
		    }
		}
	//Saving A Soldier
		@PostMapping
		@RequestMapping("/addSoldier")
		public ResponseEntity<Object> createStudent(@Validated @RequestBody SoldierDto soldierDto){
			
			Soldier soldier = new Soldier();
			soldier.setFirstName(soldierDto.getFirstName());
			soldier.setLastName(soldierDto.getLastName());
			soldier.setRank(soldierDto.getRank());
			soldier.setDateOfBirth(soldierDto.getDateOfBirth());
			soldier.setDateOfEnlistment(soldierDto.getDateOfEnlistment());
			soldier.setContactInfo(soldierDto.getContactInfo());
			
			repo.save(soldier);
			
			return ResponseEntity.ok(soldier);
			
		}
		
		// UPDATE
		
		@PutMapping("/{soldierId}")
		public ResponseEntity<Object> updateStudent(@PathVariable Long soldierId, @Validated @RequestBody SoldierDto soldierDto) {
		    // Retrieve the existing student from the repository
		    Soldier soldier = repo.findById(soldierId).orElse(null);
		    if (soldier == null) {
		        return new ResponseEntity<>("Student with ID " + soldierId + " not found", HttpStatus.NOT_FOUND);
		    }
		    soldier.setFirstName(soldierDto.getFirstName());
		    soldier.setLastName(soldierDto.getLastName());
		    soldier.setRank(soldierDto.getRank());
		    soldier.setDateOfBirth(soldierDto.getDateOfBirth());
		    soldier.setDateOfEnlistment(soldierDto.getDateOfEnlistment());
		    soldier.setContactInfo(soldierDto.getContactInfo());
		    repo.save(soldier);
		    return ResponseEntity.ok(soldier);
		}
}
