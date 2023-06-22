<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="style.css">
<title>Write</title>
</head>
<body>

<% 
	String isError = request.getParameter("error");
	String isHidden = "hidden";
	if(isError!=null){
		if(isError.equals("1")){
			isHidden = "";
		}
		else{
			isHidden = "hidden";
		}
	}
	
%>

<form action="writeproc.jsp" method = "get">

	<h1 <%=isHidden %>>글쓰기 에러!</h1>
	<table>
		<tr>
			<td>제목 : </td>
			<td><input type = "text" name = "title"></td>
		</tr>
		<tr>
			<td>글쓴이 : </td>
			<td><input type = "text" name = "id"></td>
		</tr>
		<tr>
			<td>글내용 : </td>
			<td><textarea name = "content"></textarea></td>
		</tr>
		<tr>
			<td></td>
			<td><input type="submit" value="글쓰기"></td>
		</tr>
	</table>
</form>

</body>
</html>