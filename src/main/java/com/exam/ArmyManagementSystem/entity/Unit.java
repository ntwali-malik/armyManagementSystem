package com.exam.ArmyManagementSystem.entity;

import org.antlr.v4.runtime.misc.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Units")
public class Unit {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int unitID;
	
	@NotNull
    @Size(max = 100)
    private String unitName;
	
	 @NotNull
	 @Size(max = 50)
	 private String unitType;
	 
	 @NotNull
	 @Size(max = 100)
	 private String baseLocation;
	 
	 @ManyToOne
	 @JoinColumn(name = "commanderID", nullable = false)
	 private Soldier commander;

	public Unit() {
		super();
	}

	public Unit(int unitID, @Size(max = 100) String unitName, @Size(max = 50) String unitType,
			@Size(max = 100) String baseLocation, Soldier commander) {
		super();
		this.unitID = unitID;
		this.unitName = unitName;
		this.unitType = unitType;
		this.baseLocation = baseLocation;
		this.commander = commander;
	}

	public int getUnitID() {
		return unitID;
	}

	public void setUnitID(int unitID) {
		this.unitID = unitID;
	}

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

	public Soldier getCommander() {
		return commander;
	}

	public void setCommander(Soldier commander) {
		this.commander = commander;
	}
	 
	 
}
