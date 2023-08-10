package com.soldesk.c.lotto;

public class Lotto {
	void run() {
		int lotto[] = new int[7];
		int user[] = {1, 4, 11, 12, 23, 29};
		System.out.print("내 로또번호 : ");
		for(int i = 0; i < user.length; i++) {
			System.out.print(user[i]);
			if( i < (user.length -1)) {
        		System.out.print(" , ");
    		}
		}
		System.out.println();

		int index = 0;
		System.out.print("로또 번호 : ");
		for(int i = 0; i<lotto.length;i++) {
            do {
                index = (int)(Math.random()*45+1);
            }while(exists(lotto,index));
            lotto[i] = index;
    		System.out.print(index);
    		if( i < (lotto.length -1)) {
        		System.out.print(" , ");
    		}
        }
		int cnt = 0;
		for(int i = 0; i < 6; i++) {
			for(int j = 0; j < 6; j++) {
				if(user[i] == lotto[j]) {
					cnt++;
				}
			}
		}
		System.out.println();

		System.out.println("숫자 "+cnt+"개 일치!");
		if(cnt == 6) {
			System.out.println("1등 당첨!!!");
		}
		else if(cnt == 5) {
			for(int i = 0; i < 6; i++) {
				if(lotto[7] == user[i]){
					System.out.println("2등 당첨!!");
				}
			}
			System.out.println("3등 당첨!!");
		}
		else if(cnt == 4) {
			System.out.println("4등 당첨!!");
		}
		else if(cnt == 3) {
			System.out.println("5등 당첨!!");
		}
		else if(cnt < 3 && cnt >= 0) {
			System.out.println("꽝...");
		}
		else {
			System.out.println("뭔가 이상한데요?");
		}
	}
	
	private static boolean exists(int n[], int index) {
		for (int i = 0; i < n.length; i++) {
            if(n[i] == index)
                return true;
        }
        return false;
	}
}
