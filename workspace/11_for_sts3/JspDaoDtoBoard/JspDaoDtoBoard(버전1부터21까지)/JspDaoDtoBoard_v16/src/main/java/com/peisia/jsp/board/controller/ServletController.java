package com.peisia.jsp.board.controller;

import java.io.IOException;
import java.util.ArrayList;

import com.peisia.c.util.Cw;
import com.peisia.jsp.board.dto.Dto;
import com.peisia.jsp.board.service.Service;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/board/*")
public class ServletController extends HttpServlet {
	String nextPage;
	Service service;
	@Override
	public void init() throws ServletException {
		service = new Service();
	}
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getPathInfo();
		Cw.wn("action:"+action);
		if(action!=null) {
			switch(action) {
			case "/del":
				nextPage="/board/list";	//컨트롤러 리스트를 타게 수정함
				service.del(request.getParameter("no"));	//🐇서비스🐇:삭제 기능
				break;
			case "/write":
				nextPage="/board/list";	//컨트롤러 리스트를 타게 수정함
				Dto dto = new Dto(
						request.getParameter("title"),
						request.getParameter("id"),
						request.getParameter("text")
						);
				service.write(dto);	//🐇서비스🐇:쓰기 기능				
				break;
			case "/edit_insert":
				Cw.wn("수정-insert");
				nextPage="/edit.jsp";
				request.setAttribute("post", service.read(request.getParameter("no")));	//🐇서비스🐇:수정 기능				
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
				Dto d=service.read(request.getParameter("no"));	//🐇서비스🐇:읽기 기능
				request.setAttribute("post", d);
				break;
			case "/list":
				nextPage="/list.jsp";
				//todo
				//각종 처리 다 해서 Board 한 객체로 넘기기.
				//BoardListProcessor
				ArrayList<Dto> posts = service.list();	//🐇서비스🐇:리스트 기능
				request.setAttribute("posts", posts);
				break;
			}
			RequestDispatcher d = request.getRequestDispatcher(nextPage);
			d.forward(request,response);
		}
	}
}