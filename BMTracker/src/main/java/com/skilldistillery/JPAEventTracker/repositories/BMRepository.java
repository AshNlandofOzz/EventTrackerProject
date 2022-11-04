package com.skilldistillery.JPAEventTracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.JPAEventTracker.entities.BM;

public interface BMRepository extends JpaRepository<BM, Integer> {

		public BM queryById(int id);
}
