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
<link rel="stylesheet" href="style.css">
<title>Read</title>
</head>
<body>
	<%
	String readNum = request.getParameter("num");
	System.out.println(readNum+"번 글 호출");
	String num = null;
	String title = null;
	String content = null;
	String id = null;
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_board", "root", "3586");
		Statement st = con.createStatement();	// Statement는 정적 SQL문을 실행하고 결과를 반환받기 위한 객체다. Statement하나당 한개의 ResultSet 객체만을 열 수있다.
		ResultSet rs = st.executeQuery("select * from cat_board where num = "+readNum);
		while(rs.next()){
			num = rs.getString("num");
			title = rs.getString("title");
			content = rs.getString("content");
			id = rs.getString("id");
		}
	} catch (Exception e) {		
		e.printStackTrace();
	}	
	%>
<table>
	<tr>
		<td>글번호 : <%=num %></td>
		<td width = 300px>제목 : <%=title %></td>
		<td>글쓴이 : <%=id %></td>
	</tr>
	<tr>
		<td></td>
		<td><%=content %></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td height = 200px><a href = "modify.jsp?num=<%=num %>"><button>글 수정</button></a></td>
		<td></td>
	</tr>
</table>

</body>
</html>