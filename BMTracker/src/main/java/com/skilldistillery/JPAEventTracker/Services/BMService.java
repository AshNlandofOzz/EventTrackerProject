package com.skilldistillery.JPAEventTracker.Services;

import java.util.List;

import com.skilldistillery.JPAEventTracker.entities.BM;

public interface BMService {
	List<BM> listAllBM();

	BM showBM(int bmId);
	
	BM create(BM bm);
	
	BM update(int bmId, BM bm);
	
	boolean delete(int bmId);
	
	BM createBmOnPerson(int personId, BM bm);
	
}
