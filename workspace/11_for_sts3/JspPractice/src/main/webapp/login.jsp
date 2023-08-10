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
	String fail = request.getParameter("fail");
	System.out.println(fail);
	if(fail.isEmpty()||fail.equals("null")||fail.equals("")){
		fail = "로그인을 해주세요";
	}
	else{
		if(fail.equals("1")){
			System.out.println("오류 발생");
			fail = "오류 발생";
		}
		else{
			fail = "로그인을 해주세요";
		}
	}
%>
<h1><%=fail %></h1>
<form action="proc_login.jsp" method="post">
	<input name="id" placeholder="아이디">
	<input name="pw" placeholder="암호" type="password">
	<input type="submit" value="로그인">
</form>
servlet get
<form action="testServlet" method="get">
	아이디<input name="id">
	pw<input name="pw">
	<input type="submit" value="로그인">
</form>
servlet post
<form action="testServlet" method="post">
	아이디<input name="id">
	pw<input name="pw">
	<input type="submit" value="로그인">
</form>
</body>
</html>