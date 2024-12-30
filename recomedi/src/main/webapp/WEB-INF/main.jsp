<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<%@ include file="header.jsp" %>

메인화면입니다.



<a href="${pageContext.request.contextPath}/medicine/certification.do" class="btn btn-primary">본인인증페이지</a>
<a href="${pageContext.request.contextPath}/board/MedicineList.do">전체 약품 보기 페이지</a>

<%@ include file="footer.jsp" %>