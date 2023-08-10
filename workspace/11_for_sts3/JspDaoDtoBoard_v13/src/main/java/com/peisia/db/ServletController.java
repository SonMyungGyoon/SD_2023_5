package com.peisia.db;

import java.io.IOException;
import java.util.ArrayList;

import com.peisia.c.util.Cw;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/board/*")
public class ServletController extends HttpServlet {
	String nextPage;
	Dao dao;
	Service service;
	
	@Override
	public void init() throws ServletException {
		dao = new Dao();
		service = new Service();
	}
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getPathInfo();
		Cw.wn("action:"+action);
		if(action!=null) {
			switch(action) {
			case "/del":	//했음
				nextPage="/board/list";	//컨트롤러 리스트를 타게 수정함
				service.del(request.getParameter("no"));	//🐇서비스🐇:삭제 기능
				break;
			case "/write":	//했음
				Cw.wn("쓰기");
				nextPage="/board/list";	//컨트롤러 리스트를 타게 수정함
				Dto dto = new Dto(
						request.getParameter("title"),
						request.getParameter("id"),
						request.getParameter("text")
						);
				dao.write(dto);				
				break;
			case "/edit_insert"://했음
				Cw.wn("수정-insert");
				nextPage="/edit.jsp";
				request.setAttribute("post", dao.read(request.getParameter("no")));				
				break;
			case "/edit_proc"://했음
				Cw.wn("수정-proc");
				nextPage="/board/list";	//컨트롤러 리스트를 타게 수정함
				dao.edit(
						new Dto(
								request.getParameter("title"),
								request.getParameter("text")
								)
						,request.getParameter("no")
						);				
				break;
			case "/read":
				Cw.wn("읽기");
				nextPage="/read.jsp";
				Dto d=dao.read(request.getParameter("no"));
				request.setAttribute("post", d);
				break;
			case "/list":
				Cw.wn("리스트");
				nextPage="/list.jsp";
				ArrayList<Dto> posts = dao.list();
				request.setAttribute("posts", posts);
				break;
			}
			RequestDispatcher d = request.getRequestDispatcher(nextPage);
			d.forward(request,response);
		}
	}
}