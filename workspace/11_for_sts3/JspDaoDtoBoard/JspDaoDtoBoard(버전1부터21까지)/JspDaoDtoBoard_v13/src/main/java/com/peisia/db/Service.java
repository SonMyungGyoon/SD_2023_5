package com.peisia.db;

//🐇서비스🐇
public class Service {
	Dao dao;
	public Service() {
		dao = new Dao();
	}
	public void del(String no) {
		dao.del(no);
	}

}
