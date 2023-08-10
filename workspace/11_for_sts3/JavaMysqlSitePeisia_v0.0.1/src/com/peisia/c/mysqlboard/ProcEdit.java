package com.peisia.c.mysqlboard;

import java.sql.SQLException;

import com.peisia.c.site.SiteMain;
import com.peisia.c.util.Ci;
import com.peisia.c.util.Cw;
import com.peisia.c.util.Db;

public class ProcEdit {
	static public void run() {
		String editNo = Ci.r("수정할 글번호를 입력해주세요:");
		String checkId = null;
		try {
			Db.result = Db.st.executeQuery("select b_id from board where b_no = "+editNo);
			while(Db.result.next()) {
				checkId = Db.result.getString("b_id");
			}
			if(checkId.equals(SiteMain.loginedId)) {
				String edTitle = Ci.rl("제목을 입력해주세요:");			
				String edContent = Ci.rl("글내용을 입력해주세요:");
				Db.dbExecuteUpdate("update board set b_title='"+edTitle+"',b_id='"+SiteMain.loginedId+"',b_datetime=now(),b_text='"+edContent+"' where b_no="+editNo);
			}
			else {
				Cw.wn("글 작성자가 아닙니다");
			}
		}
		catch(SQLException e){
		}
		}
}
