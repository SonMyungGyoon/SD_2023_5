package com.peisia.db;

import java.util.ArrayList;

//🐇서비스🐇
public class Service {
	Dao dao;
	public Service() {
		dao = new Dao();
	}
	public void del(String no) {
		dao.del(no);
	}
	public void write(Dto d) {
		dao.write(d);
	}
	public Dto read(String no) {
		return dao.read(no);
	}
	public ArrayList<Dto> list() {
		return dao.list();
	}
	public void edit(Dto d,String no) {
		dao.edit(d, no);
	}
	/* 총 페이지 수 구하기 */
	public int getTotalPageCount() {
		int totalPageCount = 0;
		int count = dao.getPostCount();	//만든거 재활용.
		
		if(count % Board.LIST_AMOUNT == 0){		//case1. 나머지가 없이 딱 떨어지는 경우
			totalPageCount = count / Board.LIST_AMOUNT;
		}else{					//case2. 나머지가 있어서 짜투리 페이지가 필요한 경우
			totalPageCount = count / Board.LIST_AMOUNT + 1;
		}
		return totalPageCount;
	}
	/* 총 페이지 수 구하기<검색> */
	public int getSearchTotalPageCount(String word) {
		int totalPageCount = 0;
		int count = dao.getSearchPostCount(word);
		
		if(count % Board.LIST_AMOUNT == 0){		//case1. 나머지가 없이 딱 떨어지는 경우
			totalPageCount = count / Board.LIST_AMOUNT;
		}else{					//case2. 나머지가 있어서 짜투리 페이지가 필요한 경우
			totalPageCount = count / Board.LIST_AMOUNT + 1;
		}
		return totalPageCount;
	}	
}
