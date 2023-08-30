package com.peisia.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peisia.spring.dto.Cat;

@RequestMapping("/api/*")
@RestController
public class ApiCatController {
	@GetMapping("/catOne")
	public Cat getCatOne() {
		Cat cat = new Cat();
		cat.setName("야옹이");
		cat.setAge(5);
		return cat;
	}
	
	@GetMapping("/catTwo")
	public Cat getCatTwo() {
		Cat cat = new Cat();
		cat.setName("떼껄룩");
		cat.setAge(10);
		return cat;
	}
	
}
