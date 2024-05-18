package com.exam.ArmyManagementSystem.dto;

import jakarta.persistence.Column;

public class SoldierDto {
	@Column(name = "FirstName", nullable = false)
    private String firstName;

    @Column(name = "LastName", nullable = false)
    private String lastName;
    
    @Column(name = "Rank", nullable = false)
    private String rank;

    @Column(name = "DateOfBirth", nullable = false)
    private String dateOfBirth;
    
    @Column(name = "DateOfEnlistment", nullable = false)
    private String dateOfEnlistment;

    @Column(name = "Contact", nullable = false)
    private String contactInfo;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getRank() {
		return rank;
	}

	public void setRank(String rank) {
		this.rank = rank;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getDateOfEnlistment() {
		return dateOfEnlistment;
	}

	public void setDateOfEnlistment(String dateOfEnlistment) {
		this.dateOfEnlistment = dateOfEnlistment;
	}

	public String getContactInfo() {
		return contactInfo;
	}

	public void setContactInfo(String contactInfo) {
		this.contactInfo = contactInfo;
	}
    
    
}
