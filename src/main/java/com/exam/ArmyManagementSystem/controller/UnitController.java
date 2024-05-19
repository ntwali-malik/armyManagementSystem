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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.ArmyManagementSystem.dto.UnitDto;
import com.exam.ArmyManagementSystem.entity.Soldier;
import com.exam.ArmyManagementSystem.entity.Unit;
import com.exam.ArmyManagementSystem.repository.SoldierRepository;
import com.exam.ArmyManagementSystem.repository.UnitRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/Unit")
@CrossOrigin(origins = "http://localhost:3000")
public class UnitController {

	@Autowired
	private UnitRepository repo;
	
	@Autowired
    private SoldierRepository soldierRepository;
	//Display all Units
	
	
	@GetMapping("/all")
	public List<Unit> getAllUnits(){
		return repo.findAll();
	}
	
	//Display Unit Based on ID
	@GetMapping("/{unitID}")
	public ResponseEntity<Object> getUnit(@PathVariable int unitID){
		Unit unit = repo.findById(unitID).orElse(null);
		 if (unit == null) {
		        return new ResponseEntity<>("Unit with ID " + unitID + " not found", HttpStatus.NOT_FOUND);
		    } else {
		        return ResponseEntity.ok(unit);
		    }
	}
	
	// creating a Unit
	@PostMapping("/addUnit")
	public ResponseEntity<Object> saveUnit(@Valid @RequestBody UnitDto unitDto){
		
		Unit units = new Unit();
		units.setUnitName(unitDto.getUnitName());
		units.setUnitType(unitDto.getUnitType());
		units.setBaseLocation(unitDto.getBaseLocation());
		//units.setCommander(unitDto.getCommander());
		
		Soldier commander = soldierRepository.findById(unitDto.getCommander())
                .orElseThrow(() -> new RuntimeException("Commander not found"));
		units.setCommander(commander);
		
		repo.save(units);
		
		return ResponseEntity.ok(units);
	}
	// Updating an existing Unit
    @PutMapping("/updateUnit/{unitID}")
    public ResponseEntity<Object> updateUnit(@PathVariable Integer unitID, @Valid @RequestBody UnitDto unitDto) {
        Unit existingUnit = repo.findById(unitID)
                .orElseThrow(() -> new RuntimeException("Unit not found"));

        existingUnit.setUnitName(unitDto.getUnitName());
        existingUnit.setUnitType(unitDto.getUnitType());
        existingUnit.setBaseLocation(unitDto.getBaseLocation());

        Soldier commander = soldierRepository.findById(unitDto.getCommander())
                .orElseThrow(() -> new RuntimeException("Commander not found"));
        existingUnit.setCommander(commander);

        repo.save(existingUnit);

        return ResponseEntity.ok(existingUnit);
    }
    
    // Deleting an existing Unit
    @DeleteMapping("/deleteUnit/{unitID}")
    public ResponseEntity<Object> deleteUnit(@PathVariable Integer unitID) {
        Unit existingUnit = repo.findById(unitID)
                .orElseThrow(() -> new RuntimeException("Unit not found"));

        repo.delete(existingUnit);

        return ResponseEntity.ok("Unit with ID " + unitID + " has been deleted");
    }
	
}
