package com.skilldistillery.JPAEventTracker.entities;

import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Person {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="date_of_birth")
	private String dateOfBirth;
	
	private String sex;
	
	private String allergies;
	
	@Column(name="med_history")
	private String medHistory;

	@JsonIgnore
	@OneToMany(mappedBy="person")
	private List<BM> bms;
	
	
	
	public List<BM> getBms() {
		return bms;
	}

	public void setBms(List<BM> bms) {
		this.bms = bms;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getAllergies() {
		return allergies;
	}

	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}

	public String getMedHistory() {
		return medHistory;
	}

	public void setMedHistory(String medHistory) {
		this.medHistory = medHistory;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Person other = (Person) obj;
		return id == other.id;
	}
	
	@Override
	public String toString() {
		return "Person [id=" + id + ", dateOfBirth=" + dateOfBirth + ", sex=" + sex + ", allergies=" + allergies
				+ ", medHistory=" + medHistory + ", bms=" + bms + "]";
	}

	public Person() {
		
	}
}
