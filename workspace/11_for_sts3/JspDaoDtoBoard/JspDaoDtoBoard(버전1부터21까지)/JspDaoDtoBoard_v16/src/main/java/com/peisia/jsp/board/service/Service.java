package com.peisia.jsp.board.service;

import java.util.ArrayList;

import com.peisia.jsp.board.Board;
import com.peisia.jsp.board.dao.DaoBoard;
import com.peisia.jsp.board.dto.Dto;

//🐇서비스🐇
public class Service {
	DaoBoard dao;
	public Service() {
		dao = new DaoBoard();
	}
	public void del(String no) {
		dao.del(no);
	}
	public void write(Dto d) {
		dao.insert(d);
	}
	public Dto read(String no) {
		return dao.selectPost(no);
	}
	public ArrayList<Dto> list() {
		return dao.selectList();
	}
	public void edit(Dto d,String no) {
		dao.update(d, no);
	}
	/* 총 페이지 수 구하기 */
	public int getPageCount() {
		int totalPageCount = 0;
		int count = dao.selectPostCount();
		
		if(count % Board.LIST_AMOUNT == 0){		//case1. 나머지가 없이 딱 떨어지는 경우
			totalPageCount = count / Board.LIST_AMOUNT;
		}else{					//case2. 나머지가 있어서 짜투리 페이지가 필요한 경우
			totalPageCount = count / Board.LIST_AMOUNT + 1;
		}
		return totalPageCount;
	}
	/* 총 페이지 수 구하기<검색> */
	public int getSearchPageCount(String word) {
		int totalPageCount = 0;
		int count = dao.selectSearchPostCount(word);
		
		if(count % Board.LIST_AMOUNT == 0){		//case1. 나머지가 없이 딱 떨어지는 경우
			totalPageCount = count / Board.LIST_AMOUNT;
		}else{					//case2. 나머지가 있어서 짜투리 페이지가 필요한 경우
			totalPageCount = count / Board.LIST_AMOUNT + 1;
		}
		return totalPageCount;
	}	
}