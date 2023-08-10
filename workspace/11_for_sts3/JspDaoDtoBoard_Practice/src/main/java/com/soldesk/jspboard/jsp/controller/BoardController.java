package com.soldesk.jspboard.jsp.controller;

import java.io.IOException;

import com.soldesk.jspboard.c.util.Cw;
import com.soldesk.jspboard.jsp.Dto;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/board/*")
public class BoardController extends HttpServlet {
	String category;
	String nextPage;
	BoardService service;
	@Override
	public void init() throws ServletException {
		service = new BoardService();
	}
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		category = request.getParameter("category");
		String action = request.getPathInfo();
		Cw.wn("action:"+action);
		if(action!=null) {
			switch(action) {
			case "/del":
				nextPage="/board/list";	//컨트롤러 리스트를 타게 수정함
				service.del(category,request.getParameter("no"));	//🐇서비스🐇:삭제 기능
				break;
			case "/write":
				nextPage="/board/list";	//컨트롤러 리스트를 타게 수정함
				Dto dto = new Dto(
						category,
						request.getParameter("title"),
						request.getParameter("id"),
						request.getParameter("text")
						);
				service.write(dto);	//🐇서비스🐇:쓰기 기능				
				break;
			case "/edit_insert":
				Cw.wn("수정-insert");
				nextPage="/edit.jsp";
				request.setAttribute("post", service.read(category, request.getParameter("no")));	//🐇서비스🐇:수정 기능				
				break;
			case "/edit_proc":
				Cw.wn("수정-proc");
				nextPage="/board/list";	//컨트롤러 리스트를 타게 수정함				
				service.edit(
						new Dto(
								request.getParameter("title"),
								request.getParameter("text")
								)
						,request.getParameter("no")
						);	//🐇서비스🐇:수정 기능				
				break;
			case "/read":
				nextPage="/read.jsp";
				Dto d=service.read(category, request.getParameter("no"));	//🐇서비스🐇:읽기 기능
				request.setAttribute("post", d);
				break;
			case "/list":
				nextPage="/list.jsp";
				//리스트 관련 각종 처리를 다 한 BoardListProcessor 객체 넘기기.
				BoardListProcessor blp = service.list(category, request.getParameter("page"),request.getParameter("word"));	//🐇서비스🐇:리스트 기능
				request.setAttribute("blp", blp);
				break;
			}
			RequestDispatcher d = request.getRequestDispatcher(nextPage);
			d.forward(request,response);
		}
	}
}