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
	String title = (String)session.getAttribute("title");
	String id = (String)session.getAttribute("id");
	String content = (String)session.getAttribute("content");
	String editNum = request.getParameter("num");
%>
	
<form action="modifyproc.jsp" method="get">
	<input name="editNum" type="hidden" value=<%=editNum%>>
	글제목:<input name="title" value = "<%=title%>"><br>
	글작성자id:<input name="id" value =<%=id%> ><br>
	글내용:<textarea name="content" rows="5" cols="50">
	<%=content%>
	</textarea>
	<input type="submit" value="글쓰기">
</form>
</body>
</html>