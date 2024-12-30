package com.recomedi.myapp.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="/terms")
public class TermsController {
	
	private static final Logger logger = LoggerFactory.getLogger(TermsController.class);
	
	@RequestMapping(value="/privacy.do")
	public String privacy() {

		logger.info("privacy들어옴");
		
		return "WEB-INF/terms/privacy";
	}
	
	@RequestMapping(value="/terms.do")
	public String terms() {

		logger.info("terms들어옴");
		
		return "WEB-INF/terms/terms";
	}
	
	
}
