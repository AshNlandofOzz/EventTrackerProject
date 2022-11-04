package com.skilldistillery.JPAEventTracker.Services;

import java.util.List;

import com.skilldistillery.JPAEventTracker.entities.BM;
import com.skilldistillery.JPAEventTracker.entities.Person;

public interface PersonService {
	List<Person> listAllPersons();

	Person showPerson(int personId);
	
	Person create(Person person);
	
	Person update(int personId, Person person);
	
	boolean delete(int bmId);
	
	List<BM> listAllBMForPerson();
}
