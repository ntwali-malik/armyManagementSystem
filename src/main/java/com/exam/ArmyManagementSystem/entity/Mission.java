package com.exam.ArmyManagementSystem.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "Missions")
public class Mission {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int missionID;
	
	@NotNull
    @Size(max = 100)
    private String missionName;
	
	@NotNull
    @Size(max = 50)
    private String missionType;
	
	@NotNull
    private String startDate;
	
	@NotNull
    private String endDate;
	
	@ManyToOne
	@JoinColumn(name = "unitID")
	private Unit unit;

	public int getMissionID() {
		return missionID;
	}

	public void setMissionID(int missionID) {
		this.missionID = missionID;
	}

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

	public Unit getUnit() {
		return unit;
	}

	public void setUnit(Unit unit) {
		this.unit = unit;
	}
	
	
}
