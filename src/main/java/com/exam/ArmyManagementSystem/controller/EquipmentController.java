package com.exam.ArmyManagementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.exam.ArmyManagementSystem.dto.EquipmentDto;
import com.exam.ArmyManagementSystem.entity.Equipment;
import com.exam.ArmyManagementSystem.entity.Unit;
import com.exam.ArmyManagementSystem.repository.EquipmentRepository;
import com.exam.ArmyManagementSystem.repository.UnitRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/Equipment")
@CrossOrigin(origins = "http://localhost:3000")
public class EquipmentController {

	@Autowired
    private EquipmentRepository equipmentRepository;

    @Autowired
    private UnitRepository unitRepository;
    
 // Get all equipment
    @GetMapping("/all")
    public List<Equipment> getAllEquipment() {
        return equipmentRepository.findAll();
    }
    
 // Get equipment by ID
    @GetMapping("/{equipmentID}")
    public ResponseEntity<Object> getEquipment(@PathVariable int equipmentID) {
        Equipment equipment = equipmentRepository.findById(equipmentID).orElse(null);
        if (equipment == null) {
            return new ResponseEntity<>("Equipment with ID " + equipmentID + " not found", HttpStatus.NOT_FOUND);
        } else {
            return ResponseEntity.ok(equipment);
        }
    }
    
    // Create new equipment
    @PostMapping("/addEquipment")
    public ResponseEntity<Object> saveEquipment(@Valid @RequestBody EquipmentDto equipmentDto) {
        Equipment equipment = new Equipment();
        equipment.setEquipmentName(equipmentDto.getEquipmentName());
        equipment.setEquipmentType(equipmentDto.getEquipmentType());
        equipment.setQuantity(equipmentDto.getQuantity());
        equipment.setCondition(equipmentDto.getCondition());

        Unit unit = unitRepository.findById(equipmentDto.getUnit())
                .orElseThrow(() -> new RuntimeException("Unit not found"));
        equipment.setUnit(unit);

        equipmentRepository.save(equipment);

        return ResponseEntity.ok(equipment);
    }
    
    // Update existing equipment
    @PutMapping("/updateEquipment/{equipmentID}")
    public ResponseEntity<Object> updateEquipment(@PathVariable int equipmentID, @Valid @RequestBody EquipmentDto equipmentDto) {
        Equipment existingEquipment = equipmentRepository.findById(equipmentID)
                .orElseThrow(() -> new RuntimeException("Equipment not found"));

        existingEquipment.setEquipmentName(equipmentDto.getEquipmentName());
        existingEquipment.setEquipmentType(equipmentDto.getEquipmentType());
        existingEquipment.setQuantity(equipmentDto.getQuantity());
        existingEquipment.setCondition(equipmentDto.getCondition());

        Unit unit = unitRepository.findById(equipmentDto.getUnit())
                .orElseThrow(() -> new RuntimeException("Unit not found"));
        existingEquipment.setUnit(unit);

        equipmentRepository.save(existingEquipment);

        return ResponseEntity.ok(existingEquipment);
    }
    
    // Delete existing equipment
    @DeleteMapping("/deleteEquipment/{equipmentID}")
    public ResponseEntity<Object> deleteEquipment(@PathVariable int equipmentID) {
        Equipment existingEquipment = equipmentRepository.findById(equipmentID)
                .orElseThrow(() -> new RuntimeException("Equipment not found"));

        equipmentRepository.delete(existingEquipment);

        return ResponseEntity.ok("Equipment with ID " + equipmentID + " has been deleted");
    }
}
