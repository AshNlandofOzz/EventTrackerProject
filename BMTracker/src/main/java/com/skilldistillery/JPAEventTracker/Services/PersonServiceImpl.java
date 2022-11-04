package com.skilldistillery.JPAEventTracker.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.JPAEventTracker.entities.BM;
import com.skilldistillery.JPAEventTracker.entities.Person;
import com.skilldistillery.JPAEventTracker.repositories.PersonRepository;

@Service
public class PersonServiceImpl implements PersonService {
	
	@Autowired
	private PersonRepository personRepo;

	@Override
	public List<Person> listAllPersons() {
		return personRepo.findAll();
	}

	@Override
	public Person showPerson(int personId) {
		return personRepo.queryById(personId);
	}

	@Override
	public Person create(Person person) {
		personRepo.saveAndFlush(person);
		return person;
	}

	@Override
	public Person update(int personId, Person person) {
		Person updated = null;
		updated = personRepo.queryById(personId);
		if(updated!=null) {
			updated.setDateOfBirth(person.getDateOfBirth());
			updated.setAllergies(person.getAllergies());
			updated.setMedHistory(person.getMedHistory());
			updated.setSex(person.getSex());
			return personRepo.saveAndFlush(updated);
		}
		return updated;
	}

	@Override
	public boolean delete(int id) {
		Person person = personRepo.queryById(id);
		if(person != null ) {
			personRepo.delete(person);
		}
		return !personRepo.existsById(id);
	}

	@Override
	public List<BM> listAllBMForPerson() {
		// TODO Auto-generated method stub
		return null;
	}

}
