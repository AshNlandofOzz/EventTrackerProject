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

import com.skilldistillery.JPAEventTracker.Services.BMService;
import com.skilldistillery.JPAEventTracker.entities.BM;

@RestController
@RequestMapping("api")
public class BMController {
	
	@Autowired
	private BMService bmServ;
	
	@GetMapping("bms")
	public List<BM> listAllBM(){
		return bmServ.listAllBM();
	}
	
	@GetMapping("bms/{id}")
	public BM showBM(@PathVariable int id) {
		return bmServ.showBM(id);
	}
	
	@PostMapping("bms/bm")
	public BM createBM(@RequestBody BM bm) {
		return bmServ.create(bm);
	}
	
	@DeleteMapping("bms/{id}")
	public boolean deleteBM(@PathVariable int id) {
		boolean deleted = bmServ.delete(id);
		return deleted;
	}

	@PutMapping("bms/{id}")
	public BM updateBM(@PathVariable int id,@RequestBody BM bm) {
		return bmServ.update(id, bm);
	}
}
