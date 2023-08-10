package com.soldesk.c.sqlboard;


import com.soldesk.c.database.Db;
import com.soldesk.c.display.Disp;
import com.soldesk.c.util.Ci;
import com.soldesk.c.util.Cw;

public class ProcBoard {
	void run() {
		Disp.showTitle();
		Db.dbInit();
		Db.dbPostCount();
		
		loop:
			while(true) {
				Disp.showMainMenu();
				String cmd=Ci.r("명령입력");
				switch(cmd) {
				case "1":	//글리스트
					ProcList.run();
					break;
				case "2":	//글읽기
					ProcRead.run();
					break;
				case "3":	//글쓰기
					ProcWrite.run();		
					break;
				case "4":	//글삭제
					ProcDel.run();
					break;
				case "5":	//글수정
					ProcEdit.run();
					break;
				case "6":	//글수정
					ProcList.search();
					break;
				case "0":	//관리자
					break;
				case "e":	//프로그램 종료
					Cw.wn("프로그램종료");
					break loop;
				}
			}
		
	}
}


