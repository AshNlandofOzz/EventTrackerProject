package com.skilldistillery.JPAEventTracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.JPAEventTracker.Services.PersonService;
import com.skilldistillery.JPAEventTracker.entities.Person;

@RestController
@RequestMapping("api")
public class PersonController {

	@Autowired
	private PersonService personServ;

	@GetMapping("persons")
	public List<Person> listAllPersons() {
		return personServ.listAllPersons();
	}

	@GetMapping("persons/{id}")
	public Person showPerson(@PathVariable int id) {
		return personServ.showPerson(id);
	}

	@PostMapping("persons/person")
	public Person createPerson(@RequestBody Person person) {
		return personServ.create(person);
	}
	
	@DeleteMapping("persons/{id}")
	public boolean deletePerson(@PathVariable int id){
	boolean deleted = personServ.delete(id);
	return deleted;
	}
	
	@PutMapping("persons/{id}")
	public Person updatePerson(@PathVariable int id, @RequestBody Person person) {
		return personServ.update(id, person);
	}
	
	

}
