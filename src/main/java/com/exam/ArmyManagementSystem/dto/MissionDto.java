package com.exam.ArmyManagementSystem.dto;

import com.exam.ArmyManagementSystem.entity.Unit;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class MissionDto {

    private String missionName;
    private String missionType;
    private String startDate;
    private String endDate;
	private int unit;
	public String getMissionName() {
		return missionName;
	}
	public void setMissionName(String missionName) {
		this.missionName = missionName;
	}
	public String getMissionType() {
		return missionType;
	}
	public void setMissionType(String missionType) {
		this.missionType = missionType;
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
	public int getUnit() {
		return unit;
	}
	public void setUnit(int unit) {
		this.unit = unit;
	}
	
	
	
}
