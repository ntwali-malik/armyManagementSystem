package com.exam.ArmyManagementSystem.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Equipment")
public class Equipment {

	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int equipmentID;
	 
	 @NotNull
	 @Size(max = 100)
	 private String equipmentName;
	 
	 @NotNull
	 @Size(max = 50)
	 private String equipmentType;
	 
	 @NotNull
	 @Min(1)
	 private int quantity;
	 
	 @NotNull
	 @Size(max = 50)
	 private String condition;
	 
	 @ManyToOne
	 @JoinColumn(name = "unitID")
	 private Unit unit;

	public int getEquipmentID() {
		return equipmentID;
	}

	public void setEquipmentID(int equipmentID) {
		this.equipmentID = equipmentID;
	}

	public String getEquipmentName() {
		return equipmentName;
	}

	public void setEquipmentName(String equipmentName) {
		this.equipmentName = equipmentName;
	}

	public String getEquipmentType() {
		return equipmentType;
	}

	public void setEquipmentType(String equipmentType) {
		this.equipmentType = equipmentType;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getCondition() {
		return condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

	public Unit getUnit() {
		return unit;
	}

	public void setUnit(Unit unit) {
		this.unit = unit;
	}
	 
	 
}
