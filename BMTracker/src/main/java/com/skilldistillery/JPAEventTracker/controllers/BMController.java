package com.skilldistillery.JPAEventTracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

}
