package com.soldesk.kiosk;

public class Product {
	String name;
	int price;
	Product(int price, String name){
		this.name = name;
		this.price = price;
	}
	Product(String name, int price){
		this.name = name;
		this.price = price;
	}
	Product(String name){
		this.name = name;
//		this.price = 1000;
	}
	Product(){
	}

	public void info() {
		System.out.println(name+" 가격:"+price+"원");
	}
}
