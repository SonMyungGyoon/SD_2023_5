package com.soldesk.c.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.soldesk.c.util.Cw;


public class Db {
	static public Connection con = null;
	static public Statement st = null;
	static public ResultSet result = null;
	static public void dbInit() {
		try {
			Db.con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_board", "root", "3586");
			Db.st = Db.con.createStatement();
			} catch (SQLException e) {
			e.printStackTrace();
		}
	}	
	static public void dbExecuteUpdate(String query) {
		try {
			int resultCount = st.executeUpdate(query);
			Cw.wn("처리된 행 수:"+resultCount);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	static public void dbPostCount() {	
		try {
			Db.result = Db.st.executeQuery("select count(*) from board");
			Db.result.next();
			String count = Db.result.getString("count(*)");
			Cw.wn("글 수:"+count);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}static public int getPostCount() {
		String count = "";
		try {
			Db.result = Db.st.executeQuery("select count(*) from board where b_reply_ori is null");
			Db.result.next();
			count = Db.result.getString("count(*)");
		} catch (Exception e) {
		}
		int intCount = Integer.parseInt(count);
		return intCount;
	}
	static public int getPostCountSearch(String searchWord) {
		String count = "";
		try {
			Db.result = Db.st.executeQuery(
					"select count(*) from board where b_reply_ori is null"
					+
					" and b_title like '%"+searchWord+"%'"
			);
			Db.result.next();
			count = Db.result.getString("count(*)");
			Cw.wn("글 수:"+count);
		} catch (Exception e) {
		}
		int intCount = Integer.parseInt(count);
		return intCount;
	}
}