package com.skilldistillery.JPAEventTracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.JPAEventTracker.entities.Person;

public interface PersonRepository extends JpaRepository<Person, Integer> {

		public Person queryById(int id);
}
