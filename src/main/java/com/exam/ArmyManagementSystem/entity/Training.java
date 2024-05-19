package com.exam.ArmyManagementSystem.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Training")
public class Training {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int trainingID;
	
	@NotNull
    @Size(max = 100)
    private String trainingName;
	
	@NotNull
    @Size(max = 50)
    private String trainingType;
	
	@NotNull
    private String startDate;
	
	@NotNull
    private String endDate;
	
	@ManyToOne
    @JoinColumn(name = "soldierID")
    private Soldier soldier;

	public int getTrainingID() {
		return trainingID;
	}

	public void setTrainingID(int trainingID) {
		this.trainingID = trainingID;
	}

	public String getTrainingName() {
		return trainingName;
	}

	public void setTrainingName(String trainingName) {
		this.trainingName = trainingName;
	}

	public String getTrainingType() {
		return trainingType;
	}

	public void setTrainingType(String trainingType) {
		this.trainingType = trainingType;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public Soldier getSoldier() {
		return soldier;
	}

	public void setSoldier(Soldier soldier) {
		this.soldier = soldier;
	}
	
	

}
