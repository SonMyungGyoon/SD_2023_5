package com.soldesk.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Da {
	Connection con=null;
	Statement st = null;
	void connect() {
		try {
			////고정 1
			Class.forName(DB.DB_JDBC_DRIVER_PACKAGE_PATH);
			////고정 2
			con = DriverManager.getConnection(DB.DB_URL, DB.DB_ID, DB.DB_PW);			
			////고정 3
			st=con.createStatement();			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	void update(String sql) {
		try {
			st.executeUpdate(sql);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	void close() {
		try {
			////고정 4
			st.close();
			////고정 5
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}