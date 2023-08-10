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
<table>
	<tr>
		<td>글번호</td>
		<td>제목</td>
		<td>id</td>
	</tr>
<%
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_board", "root", "3586");
		Statement st = con.createStatement();	// Statement는 정적 SQL문을 실행하고 결과를 반환받기 위한 객체다. Statement하나당 한개의 ResultSet 객체만을 열 수있다.
		ResultSet rs = st.executeQuery("select * from cat_board");
		while(rs.next()){
			String num = rs.getString("num");
			String title = rs.getString("title");
			String content = rs.getString("content");
			String id = rs.getString("id");

%>
			<tr>
				<td><%=num %></td>
				<td><a href = "read.jsp?num=<%=num%>"><%=title %></a></td>
				<td><%=id %></td>
			</tr>
			
<%			
		}
		
		
	} catch (Exception e) {		
		e.printStackTrace();
	}	
%>

</table>
<br>
<a href = "write.jsp"><button>글작성</button></a>

</body>
</html>