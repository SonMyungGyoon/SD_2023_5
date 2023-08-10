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
<title>Modify</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<% 
	String editNum = request.getParameter("num");
	String isError = request.getParameter("error");
	String isHidden = "hidden";
	String title = null;
	String content = null;
	String id = null;
	if(isError!=null){
		if(isError.equals("1")){
			isHidden = "";
		}
		else{
			isHidden = "hidden";
		}
	}
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_board", "root", "3586");
		Statement st = con.createStatement();	// Statement는 정적 SQL문을 실행하고 결과를 반환받기 위한 객체다. Statement하나당 한개의 ResultSet 객체만을 열 수있다.
		ResultSet rs = st.executeQuery("select * from cat_board where num = "+editNum);
		while(rs.next()){
			title = rs.getString("title");
			content = rs.getString("content");
			id = rs.getString("id");
		}
	} catch (Exception e) {		
		e.printStackTrace();
	}
%>

<form action="modifyproc.jsp" method = "get">
	<h1 <%=isHidden %>>글쓰기 에러!</h1>
	<input hidden="true" name = "num" value = <%=editNum %>>
	<table>
		<tr>
			<td>제목 : </td>
			<td><input type = "text" name = "title" value = <%=title %>></td>
		</tr>
		<tr>
			<td>글쓴이 : </td>
			<td><input type = "text" name = "id" value = <%=id %>></td>
		</tr>
		<tr>
			<td>글내용 : </td>
			<td><textarea name = "content"> <%=content %></textarea></td>
		</tr>
		<tr>
			<td></td>
			<td><input type="submit" value="글수정"></td>
		</tr>
	</table>
</form>
</body>
</html>