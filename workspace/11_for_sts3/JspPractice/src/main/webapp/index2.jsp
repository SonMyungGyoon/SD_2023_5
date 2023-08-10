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
	String id = (String)session.getAttribute("idKey");
%>


	<%=id %>님 환영합니다.


<%
	int x = 10;
	int y = 20;
%>

<%=x+y %>

</body>
</html>



