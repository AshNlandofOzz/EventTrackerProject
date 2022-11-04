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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Person create(Person person) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Person update(int personId, Person person) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int bmId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<BM> listAllBMForPerson() {
		// TODO Auto-generated method stub
		return null;
	}

}
