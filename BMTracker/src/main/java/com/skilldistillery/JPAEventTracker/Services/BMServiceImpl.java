package com.skilldistillery.JPAEventTracker.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.JPAEventTracker.entities.BM;
import com.skilldistillery.JPAEventTracker.repositories.BMRepository;

@Service
public class BMServiceImpl implements BMService {
	
	@Autowired
	private BMRepository bmRepo;

	@Override
	public List<BM> listAllBM() {
		return bmRepo.findAll();
	}

	@Override
	public BM showBM(int bmId) {
		return bmRepo.queryById(bmId);
	}

	@Override
	public BM create(BM bm) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BM update(int bmId, BM bm) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int bmId) {
		// TODO Auto-generated method stub
		return false;
	}

}
