<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
	String str1[] = {"고양이","개","너굴맨"};
%>

<c:set var="arr" value="<%=str1 %>" />
<c:forEach var="i" items="${arr}" begin="0" step="1" end="3">
	${i}<br>
</c:forEach>

	
</body>
</html>



