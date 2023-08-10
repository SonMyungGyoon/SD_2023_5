package com.soldesk.c.sqlboard;

import java.sql.SQLException;

import com.soldesk.c.database.Db;
import com.soldesk.c.util.Ci;
import com.soldesk.c.util.Cw;

public class ProcRead {
	public static void run() {
		String readNo = Ci.r("읽을 글 번호를 입력해주세요");
		try {
			Db.result = Db.st.executeQuery("select * from board where b_no ="+readNo);
			Db.result.next();
			String title = Db.result.getString("b_title");	
			String content = Db.result.getString("b_text");
			Cw.wn("글제목: "+title);
			Cw.wn("글내용: "+content);
			ProcReply.list(Integer.parseInt(readNo));	//댓글 리스트 출력 처리
			loop:while(true) {	//명령 입력 받게 하기. 나가기, 댓글쓰기
				String cmd=Ci.r("명령[x:나가기,r:댓글쓰기]");
				switch(cmd) {
				case "x":
					break loop;
				case "r":	//댓글 쓰기
					ProcReply.write(Integer.parseInt(readNo));
					break;
				default:
					Cw.wn("장난x");
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
