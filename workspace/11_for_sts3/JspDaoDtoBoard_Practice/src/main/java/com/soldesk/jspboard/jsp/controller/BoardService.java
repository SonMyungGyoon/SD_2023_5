package com.soldesk.jspboard.jsp.controller;

import com.soldesk.jspboard.jsp.DaoBoard;
import com.soldesk.jspboard.jsp.Dto;

public class BoardService {
	DaoBoard dao;
	public BoardService() {
		dao = new DaoBoard();
	}
	public void del(String category, String no) {
		dao.del(category, no);
	}
	public void write(Dto d) {
		dao.insert(d);
	}
	public Dto read(String category, String no) {
		return dao.selectPost(category, no);
	}
	public BoardListProcessor list(String category, String currentPage, String word) {
		if(currentPage==null) {
			currentPage="1";
		}
		BoardListProcessor blp = new BoardListProcessor(dao,category,currentPage,word);
		return blp;
	}
	public void edit(Dto d,String no) {
		dao.update(d, no);
	}
}