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
<title>게시판 글쓰기(DB)</title>
</head>
<body>
<hr>
<%
	String title = request.getParameter("title");
	String id = request.getParameter("id");
	String content = request.getParameter("content");
	String sql = String.format("insert into cat_board (title,content,id) values ('%s', '%s', '%s')", title, content, id);
	out.println(sql);

	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("==== 글쓰기 시도");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_board", "root", "3586");
		Statement st = con.createStatement();
		sql = String.format("insert into cat_board (title,content,id) values ('%s', '%s', '%s')"
				, title, content, id);
		System.out.println("==== 전송하려는 sql:" + sql);		
		int resultCount = st.executeUpdate(sql);
		if(resultCount == 1){
			System.out.println("==== 글쓰기 성공");
			response.sendRedirect("list.jsp");
		} else {
			System.out.println("==== 글쓰기 실패");
			response.sendRedirect("write.jsp");
		}
	}catch (Exception e) {		
		e.printStackTrace();
	}

%>

</body>
</html>