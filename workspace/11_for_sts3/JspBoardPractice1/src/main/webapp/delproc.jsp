<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
	String readNum = request.getParameter("num");	//url get방식으로 읽을 글 번호를 받아서 변수 저장.

	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_board", "root", "3586");
		Statement st = con.createStatement();
		String sql = "delete from cat_board where num="+readNum;
		System.out.println("==== 전송하려는 sql:" + sql);		
		int resultCount = st.executeUpdate(sql);	// 글쓰기 sql 전송
		if(resultCount == 1){
			System.out.println("==== 글삭제 성공");
			response.sendRedirect("list.jsp");
		} else {
			System.out.println("==== 글삭제 실패");
			response.sendRedirect("read.jsp?num="+readNum);
		}
	}catch (Exception e) {		
		e.printStackTrace();
	}	

%>
</body>
</html>