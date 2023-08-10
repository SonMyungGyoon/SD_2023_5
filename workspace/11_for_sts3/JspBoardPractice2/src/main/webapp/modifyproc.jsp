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
<title>Modify - proc</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<%
	String editNum = request.getParameter("num");
	String title = request.getParameter("title");
	String id = request.getParameter("id");
	String content = request.getParameter("content");
	
	if(title.equals("null") || title.isEmpty() || id.equals("null") ||id.isEmpty() ||content.equals("null") || content.isEmpty()){
		System.out.println("잘못된 글수정 시도");
		response.sendRedirect("modify.jsp?error=1");
	}
	else{
		String sql = String.format("update cat_board set title = '%s', content = '%s', id = '%s' where num = %s",
				title, content, id, editNum);

		System.out.println("시도할 SQL : "+sql);
		try{
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_board", "root", "3586");
			Statement st = con.createStatement();
			int resultInt = st.executeUpdate(sql);
			if(resultInt == 1){
				System.out.println("SQL 동작 완료");
				response.sendRedirect("list.jsp");
			}
			else{
				System.out.println("SQL 동작 실패...");
				response.sendRedirect("modify.jsp?num="+editNum+"&error=1");
			}
		}catch (Exception e) {		
			e.printStackTrace();
		}
	}
%>
</body>
</html>