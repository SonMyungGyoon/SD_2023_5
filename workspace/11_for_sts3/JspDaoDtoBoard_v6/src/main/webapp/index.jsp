<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Insert title here</title>
  </head>
  <body>
    <% String cmd=request.getParameter("cmd"); if(cmd!=null){ switch(cmd){ case
    "left": out.println("왼쪽이동"); break; case "right":
    out.println("오른쪽이동"); break; } } %>
    <a href="index.jsp?cmd=left">좌</a>
    <a href="index.jsp?cmd=right">우</a>
    <a href="index.jsp?cmd=right">위</a>
    <a href="index.jsp?cmd=right">아래</a>
    <a href="index.jsp?cmd=right">기술1</a>
    <a href="index.jsp?cmd=right">기술2</a>
    <a href="index.jsp?cmd=right">기술3</a>
  </body>
</html>
