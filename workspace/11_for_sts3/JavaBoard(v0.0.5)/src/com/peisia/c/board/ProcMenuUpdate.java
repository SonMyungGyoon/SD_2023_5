package com.peisia.c.board;

import com.peisia.c.board.data.Data;
import com.peisia.c.board.data.Post;
import com.peisia.util.Ci;
import com.peisia.util.Cw;

public class ProcMenuUpdate {
	static void run() {
		Cw.wn("업뎃임");
		String cmd = Ci.r("수정할 글 번호");
		//수정 할 글 찾기
		for(Post p:Data.posts) {
			if(cmd.equals(p.instanceNo+"")) {	//찾으면~
				String content=Ci.rl("수정 할 글내용");
				p.content = content;	// 글 내용 덮어쓰기
				Cw.wn("글 수정 됨");
			}
		}		
	}
}