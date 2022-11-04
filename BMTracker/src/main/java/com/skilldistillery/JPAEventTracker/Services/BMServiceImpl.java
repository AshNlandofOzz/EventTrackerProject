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
		bmRepo.saveAndFlush(bm);
		return bm;
	}

	@Override
	public BM update(int bmId, BM bm) {
		BM updated = null;
		updated = bmRepo.queryById(bmId);
		if(updated!= null) {
			updated.setColor(bm.getColor());
			updated.setConsistency(bm.getConsistency());
			updated.setPerson(bm.getPerson());
			return bmRepo.saveAndFlush(updated);
		}
		return updated;
	}

	@Override
	public boolean delete(int bmId) {
		BM bm = bmRepo.queryById(bmId);
		if(bm != null) {
			bmRepo.delete(bm);
		}
		return !bmRepo.existsById(bmId);
	}

}
