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
	request.setCharacterEncoding("UTF-8");	// 이거 안하면 한글 깨짐.
	String nS[] = request.getParameterValues("hobby");
	//out.println(nS[0]);
	//out.println(nS[1]);
	
	if(nS != null){		
		for(int i=0;i<nS.length;i++){
			out.println(nS[i]);
		}
	}
	
%>


</body>
</html>