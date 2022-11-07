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
	public BM createBM(HttpServletRequest request, HttpServletResponse resp, @RequestBody BM bm) {
		BM newBm = null;
		try {
		newBm = bmServ.create(bm);
		resp.setStatus(201);
		StringBuffer urlSb = request.getRequestURL();
		urlSb.append("/").append(bm.getId());
		String url = urlSb.toString();
		resp.setHeader("Location", url);
		}
		catch(Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			newBm = null;
		}
		return newBm;
	}
	
	@PostMapping("persons/{id}/bms") 
	public BM createBmByPerson(@PathVariable int id, @RequestBody BM bm) {
		return bmServ.createBmOnPerson(id, bm);
	}
	
	@DeleteMapping("bms/{id}")
	public void deleteBM(@PathVariable int id, HttpServletResponse resp) {
		try {
			if(bmServ.delete(id)) {
				resp.setStatus(204);
			}
			else {
				resp.setStatus(404);
			}
		}
		catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
	}

	@PutMapping("bms/{id}")
	public BM updateBM(@PathVariable int id,@RequestBody BM bm, HttpServletResponse resp) {
		BM updated = null;
		try {
		updated = bmServ.update(id, bm);
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
