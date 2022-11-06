package com.skilldistillery.JPAEventTracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
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
	public Person createPerson(@RequestBody Person person, HttpServletResponse resp, HttpServletRequest request) {
		Person newPerson = null;
		try {
		newPerson = personServ.create(person);
		resp.setStatus(201);
		StringBuffer urlSb = request.getRequestURL();
		urlSb.append("/").append(person.getId());
		String url = urlSb.toString();
		resp.setHeader("Location", url);
		}
		catch(Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			newPerson = null;
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
		if(updated == null) {
			resp.setStatus(404);
		}
		}
		catch(Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			updated = null;
		}
		return updated;
	}
	
	
	

}
