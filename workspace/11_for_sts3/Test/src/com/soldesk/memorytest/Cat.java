package com.soldesk.memorytest;

public class Cat {
	String name;
	int age;
	float inch = 3.5f;	
	boolean isMine = false;	
	
	Cat(){
		
	}
	
	Cat(String name, int age){
		this.name = name;
		this.age = age;
	}
	
	void info() {
		inch += 1.1;
		String s = "이름 : " + name + "\n나이 :  " + age + "\n무게 : " + inch;
		System.out.println(s);
	}
}
