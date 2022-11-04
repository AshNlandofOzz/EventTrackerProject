package com.skilldistillery.JPAEventTracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}
