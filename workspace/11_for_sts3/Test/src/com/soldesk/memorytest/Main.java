package com.soldesk.memorytest;

import java.util.ArrayList;

public class Main {
	public static void main(String[] args) {

		ArrayList<String> animals = new ArrayList<>();
		animals.add("고양이");
		animals.add("개");
		animals.add("토끼");
		
		for(int i=0;i<animals.size();i=i+1) {
			System.out.println(animals.get(i));
		}
		
		//향상된 for문(for-each라고도 함)
		for(String x:animals) {
			System.out.println(x);
		}
		
		int a[]= {1,2,3};
		for(int n:a) {
			System.out.println(n);
		}
		
		Cat cat1 = new Cat("키티",5);
		Cat cat2 = new Cat("괭이",4);
		ArrayList<Cat> cats = new ArrayList<Cat>();
		cats.add(cat1);
		cats.add(cat2);
		for(Cat x:cats) {
			System.out.println("고양이이름:"+x.name);
			System.out.println("고양이나이:"+x.age);
		}
		
		Cat cat3;
		cat3 = new Cat();
		cat3.name = "test";
		
		Cat cat4;
		cat4 = cat3;
		cat4.name = "test2";
		cats.add(cat3);
		cats.add(cat4);
		
		for(int i = 0; i < cats.size(); i++) {
			System.out.println(cats.get(i).name);
		}
	}
}
