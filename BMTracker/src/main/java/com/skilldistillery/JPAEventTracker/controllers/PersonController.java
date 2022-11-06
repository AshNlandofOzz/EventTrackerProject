package com.skilldistillery.JPAEventTracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

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
	public Person createPerson(@RequestBody Person person, HttpServletResponse resp) {
		Person newPerson = null;
		try {
		newPerson = personServ.create(person);
		resp.setStatus(201);
		}
		catch(Exception e) {
			resp.setStatus(400);
		}
		return newPerson;
	}
	
	@DeleteMapping("persons/{id}")
	public void deletePerson(@PathVariable int id, HttpServletResponse resp){
		try {
			if(personServ.delete(id)) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
	}
	
	@PutMapping("persons/{id}")
	public Person updatePerson(@PathVariable int id, @RequestBody Person person, HttpServletResponse resp) {
		Person updated = null;
		try {
		updated = personServ.update(id, person);
		}
		catch(Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
		return updated;
	}
	
	
	

}
