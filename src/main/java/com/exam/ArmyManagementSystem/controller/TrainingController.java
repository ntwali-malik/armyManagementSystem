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
import com.exam.ArmyManagementSystem.dto.TrainingDto;
import com.exam.ArmyManagementSystem.entity.Soldier;
import com.exam.ArmyManagementSystem.entity.Training;
import com.exam.ArmyManagementSystem.repository.SoldierRepository;
import com.exam.ArmyManagementSystem.repository.TrainingRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/Training")
@CrossOrigin(origins = "http://localhost:3000")
public class TrainingController {

	@Autowired
    private TrainingRepository trainingRepository;

    @Autowired
    private SoldierRepository soldierRepository;
    
 // Get all training sessions
    @GetMapping("/all")
    public List<Training> getAllTraining() {
        return trainingRepository.findAll();
    }
    
 // Get training by ID
    @GetMapping("/{trainingID}")
    public ResponseEntity<Object> getTraining(@PathVariable int trainingID) {
        Training training = trainingRepository.findById(trainingID).orElse(null);
        if (training == null) {
            return new ResponseEntity<>("Training with ID " + trainingID + " not found", HttpStatus.NOT_FOUND);
        } else {
            return ResponseEntity.ok(training);
        }
    }
    
 // Create new training
    @PostMapping("/add")
    public ResponseEntity<Object> saveTraining(@Valid @RequestBody TrainingDto trainingDto) {
        Training training = new Training();
        training.setTrainingName(trainingDto.getTrainingName());
        training.setTrainingType(trainingDto.getTrainingType());
        training.setStartDate(trainingDto.getStartDate());
        training.setEndDate(trainingDto.getEndDate());

        Soldier soldier = soldierRepository.findById(trainingDto.getSoldier())
                .orElseThrow(() -> new RuntimeException("Soldier not found"));
        training.setSoldier(soldier);

        trainingRepository.save(training);

        return ResponseEntity.ok(training);
    }
    
 // Update existing training
    @PutMapping("/updateTraining/{trainingID}")
    public ResponseEntity<Object> updateTraining(@PathVariable int trainingID, @Valid @RequestBody TrainingDto trainingDto) {
        Training existingTraining = trainingRepository.findById(trainingID)
                .orElseThrow(() -> new RuntimeException("Training not found"));

        existingTraining.setTrainingName(trainingDto.getTrainingName());
        existingTraining.setTrainingType(trainingDto.getTrainingType());
        existingTraining.setStartDate(trainingDto.getStartDate());
        existingTraining.setEndDate(trainingDto.getEndDate());

        Soldier soldier = soldierRepository.findById(trainingDto.getSoldier())
                .orElseThrow(() -> new RuntimeException("Soldier not found"));
        existingTraining.setSoldier(soldier);

        trainingRepository.save(existingTraining);

        return ResponseEntity.ok(existingTraining);
    }
    
 // Delete existing training
    @DeleteMapping("/deleteTraining/{trainingID}")
    public ResponseEntity<Object> deleteTraining(@PathVariable int trainingID) {
        Training existingTraining = trainingRepository.findById(trainingID)
                .orElseThrow(() -> new RuntimeException("Training not found"));

        trainingRepository.delete(existingTraining);

        return ResponseEntity.ok("Training with ID " + trainingID + " has been deleted");
    }
}
