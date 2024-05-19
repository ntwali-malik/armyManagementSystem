package com.exam.ArmyManagementSystem.dto;



public class TrainingDto {
    private String trainingName;
    private String trainingType;
    private String startDate;
    private String endDate;
    private Long soldier;
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
	public Long getSoldier() {
		return soldier;
	}
	public void setSoldier(Long soldier) {
		this.soldier = soldier;
	}
	
    
    
}
