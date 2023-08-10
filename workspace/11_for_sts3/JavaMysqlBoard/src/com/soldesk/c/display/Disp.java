package com.soldesk.c.display;

import com.soldesk.c.util.Cw;

public class Disp{
	static private String TITLE_BAR = "🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈"; 
	static private String TITLE 	= "🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈     게시판     🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈"; 
	
	static private String MAIN_MENU_BAR = "================================================================";
	static private String MAIN_MENU	 	= "[1]글리스트 [2]글읽기 [3]글쓰기 [4]글삭제 [5]글수정 [6]검색 [0]관리자 [e]프로그램종료";
	
	static public void showTitle() {
		Cw.wn(TITLE_BAR);
		Cw.wn(TITLE);
		Cw.wn(TITLE_BAR);
	}
	
	static public void showMainMenu() {
		Cw.wn(MAIN_MENU_BAR);
		Cw.wn(MAIN_MENU);
		Cw.wn(MAIN_MENU_BAR);
		
	}
	static public void titleList() {
		Cw.wn("==========================================");
		Cw.wn("================= 글리스트 =================");
		Cw.wn("==========================================");
		Cw.wn("[글번호]\t[        글제목        ] \t[ 작성자id ] \t[      작성시간       ]");
	}
	public static void replyBar() {
		Cw.wn("================ 댓글 리스트 ================");
	}	
}
