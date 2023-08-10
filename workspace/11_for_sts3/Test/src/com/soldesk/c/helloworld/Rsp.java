package com.soldesk.c.helloworld;

import java.util.Scanner;

public class Rsp {
	void run(){
		boolean check = true;
		Scanner sc = new Scanner(System.in);
		while(check) {
			System.out.print("가위바위보 입력해주세요 : ");
			String temp = sc.next();
			if(temp.equals("0")) {
				break;
			}
			int rand = (int) (Math.random()*3);
			int user = 0;
			switch(temp) {
			case "가위":
				user = 0;
				break;
			case "바위":
				user = 1;
				break;
			case "보":
				user = 2;
				break;
			}
			
			System.out.print("컴퓨터가 낸 것 : ");
			switch(rand) {
			case 0:
				System.out.println("가위");
				break;
			case 1:
				System.out.println("바위");
				break;
				
			case 2:
				System.out.println("보");
				break;
			}
			int calc = user - rand;
			if(calc == 1 || calc == -2) {
				System.out.println("당신의 승리!");
			}
			else if(calc == -1 || calc == 2) {
				System.out.println("컴퓨터의 승리...");
			}
			else if(calc == 0){
				System.out.println("비겼습니다");
			}
			else {
				System.out.println("뭔가 이상한데요");
			}
		}
		System.out.println("프로그램 종료...");
		sc.close();
	}
}
