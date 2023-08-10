package com.peisia.c.board;

import com.peisia.c.board.data.Data;
import com.peisia.c.board.data.Post;
import com.peisia.util.Ci;
import com.peisia.util.Cw;

public class ProcMenuDel {
	static void run() {
		Cw.wn("삭제임");
		String cmd = Ci.r("삭제할 글 번호");
		////	1.삭제할 글 찾기(바로 삭제하지 말고)	////
		// *주의* 바로 삭제 시 문제가 생길 수 있음	//
		//// 옛날 for문 방식	////
		int tempSearchIndex = 0;
		for(int i=0;i<Data.posts.size();i=i+1) {
			if(cmd.equals(Data.posts.get(i).instanceNo+"")) {
				tempSearchIndex = i;
			}
		}
		////	2.삭제하기(바로 삭제하지 말고)	////
		Data.posts.remove(tempSearchIndex);
		Cw.wn("글 수:"+Data.posts.size());
	}
}