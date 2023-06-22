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
	String editNum = request.getParameter("editNum");
	String title = request.getParameter("title");
	String id = request.getParameter("id");
	String content = request.getParameter("content");
	String sql = String.format("update cat_board set title = '%s', content = '%s', id = '%s' where num = %s", title, content, id, editNum);

	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("==== 글쓰기 시도");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_board", "root", "3586");
		Statement st = con.createStatement();
		System.out.println("==== 전송하려는 sql:" + sql);
		int resultCount = st.executeUpdate(sql);
		if(resultCount == 1){
			System.out.println("==== 글수정 성공");
			response.sendRedirect("list.jsp");
		} else {
			System.out.println("==== 글수정 실패");
			response.sendRedirect("modify.jsp");
		}
	}catch (Exception e) {		
		e.printStackTrace();
	}

%>
</body>
</html>