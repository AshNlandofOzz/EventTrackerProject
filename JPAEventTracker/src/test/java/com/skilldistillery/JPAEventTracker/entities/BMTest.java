package com.skilldistillery.JPAEventTracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class BMTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private BM bm;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAEventTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		bm = em.find(BM.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		bm = null;
	}

	@Test
	void test_Category_entity_mapping() {
		assertNotNull(bm);
		assertEquals("dark brown", bm.getColor());
		assertEquals("10-21-2022", bm.getDate());
	}

}
