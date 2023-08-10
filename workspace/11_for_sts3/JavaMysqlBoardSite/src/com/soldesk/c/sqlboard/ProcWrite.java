package com.soldesk.c.sqlboard;

import com.soldesk.c.database.Db;
import com.soldesk.c.util.Ci;
import com.soldesk.c.util.Cw;

public class ProcWrite {

	static public void run() {
		String title = Ci.rl("제목을 입력해주세요:");
		String content = Ci.rl("글내용을 입력해주세요:");
		String id = Ci.rl("작성자id를 입력해주세요:");
		try {
			Db.st.executeUpdate("insert into board (b_title,b_id,b_datetime,b_text,b_hit)"
					+" values ('"+title+"','"+id+"',now(),'"+content+"',0)");
			Cw.wn("글등록 완료");
		} catch (Exception e) {
		}		
	}
}