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
	String id = request.getParameter("id");
	String pw = request.getParameter("pw");
	String count = null;
	ResultSet result = null;
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_board", "root", "3586");
		Statement st = con.createStatement();
		result = st.executeQuery(String.format("select count(*) from member where id = '%s' and pw = '%s'", id, pw));
		result.next();
		count = result.getString("count(*)");
		System.out.println("결괏값 : "+ count);
	} catch (Exception e) { 
		e.printStackTrace();
	}
	if(count.equals("1")){
		response.sendRedirect("../Board/list.jsp?id="+id);
	}
%>

</body>
</html>