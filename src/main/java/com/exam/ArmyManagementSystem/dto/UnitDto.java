package com.exam.ArmyManagementSystem.dto;

import org.antlr.v4.runtime.misc.NotNull;

import com.exam.ArmyManagementSystem.entity.Soldier;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Size;

public class UnitDto {

    private String unitName;
	 private String unitType;
	 private String baseLocation;
	 private Long commander;
	public String getUnitName() {
		return unitName;
	}
	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}
	public String getUnitType() {
		return unitType;
	}
	public void setUnitType(String unitType) {
		this.unitType = unitType;
	}
	public String getBaseLocation() {
		return baseLocation;
	}
	public void setBaseLocation(String baseLocation) {
		this.baseLocation = baseLocation;
	}
	public Long getCommander() {
		return commander;
	}
	public void setCommander(Long commander) {
		this.commander = commander;
	}

	
	 
}
