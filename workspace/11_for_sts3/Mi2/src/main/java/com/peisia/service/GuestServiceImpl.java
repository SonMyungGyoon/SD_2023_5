package com.peisia.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peisia.domain.GuestVO;
import com.peisia.mapper.GuestMapper;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Log4j
@Service
//@AllArgsConstructor
public class GuestServiceImpl implements GuestService{

	@Setter(onMethod_ = @Autowired)
	private GuestMapper mapper;	
	
	@Override
	public ArrayList<GuestVO> getList() {
		log.info("비지니스 계층===========");
		return mapper.getList();
	}
	
}
