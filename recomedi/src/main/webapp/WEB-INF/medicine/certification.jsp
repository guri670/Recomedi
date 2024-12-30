<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>인증하기</title>
<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

.container {
    max-width: 600px;
    margin: 50px auto;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.logo {
    text-align: center;
}

.logo img {
    width: 80px;
}

.title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
}

.description {
    text-align: center;
    font-size: 14px;
    color: #555555;
}

.auth-form {
    margin-top: 20px;
}

.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
}

.id-number-inputs,
.phone-inputs {
    display: flex;
    align-items: center;
}

.id-number-inputs input,
.phone-inputs input {
    width: calc(50% - 10px);
}

.id-number-inputs span,
.phone-inputs span {
    margin: 0 5px;
}

.input-group input[type=text],
.input-group input[type=password] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #cccccc;
}

.button-group {
    display: flex;
    justify-content: space-between;
}

.button-group button {
    width: 48%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

.button-group button:first-child {
    background-color: #cccccc; /* 취소 버튼 */
}

.button-group button:last-child {
    background-color: #003366; /* 확인 버튼 */
    color: white;
}

.top-icons {
    position: absolute;
    top: 20px;
    right: 20px;
}

.top-icons button {
    background-color: transparent;
    border: none;
    font-size: 18px;
}
</style>

</head>
<body>
 <div class="container">
        <!-- 로고 -->
        <div class="logo">
            <img src="file:///Users/chan/Downloads/recomedi%202/src/main/webapp/resources/images/image%2071.png" alt="RECOMEDI 로고">
        </div>

        <!-- 본인 인증 제목 -->
        <h1 class="title">본인 인증</h1>

        <!-- 설명 텍스트 -->
        <p class="description">
            건강보험심사평가원은 건강정보 서비스를 원활하게 사용하기 위해 본인인증 절차를 거치도록 하고 있습니다.
        </p>

        <!-- 본인 인증 폼 -->
        <form action="${pageContext.request.contextPath}/medicine/processCertification.do" method="POST" class="auth-form">
            <!-- 주민등록번호 -->
            <div class="input-group">
                <label for="id-number">주민등록번호 *</label>
                <div class="id-number-inputs">
                    <input type="text" id="id-number-front" name="idNumberFront" maxlength="6" placeholder="주민번호 앞자리" required>
                    <span>-</span>
                    <input type="password" id="id-number-back" name="idNumberBack" maxlength="7" placeholder="주민번호 뒷자리" required>
                </div>
            </div>

            <!-- 이름 -->
            <div class="input-group">
                <label for="name">이름</label>
                <input type="text" id="name" name="name" placeholder="이름 입력" required>
            </div>

            <!-- 휴대폰 번호 -->
            <div class="input-group">
                <label for="phone">휴대폰번호</label>
                <div class="phone-inputs">
                    <input type="text" id="phone-prefix" name = "phonePrefix" value="010" readonly>
                    -
                    <input type="text" id="phone-number" name="phoneNumber" placeholder="-없이 번호만 입력해주세요" required>
                </div>
            </div>

            <!-- 버튼들 -->
            <div class="button-group">
                <button type="button" onclick="history.back()">취소</button>
                <button type="submit">확인</button>
            </div>
        </form>

        <!-- 오른쪽 상단 아이콘 -->
        <div class="top-icons">
            <button id="notification-btn">🔔</button>
            <button id="menu-btn">☰</button>
        </div>
    </div>

    <!-- JavaScript -->
    <script src="scripts.js">
 // 알림 버튼 클릭 이벤트
    document.getElementById("notification-btn").addEventListener("click", function () {
       alert("알림 버튼이 눌렸습니다.");
    });

    // 메뉴 버튼 클릭 이벤트
    document.getElementById("menu-btn").addEventListener("click", function () {
       alert("메뉴 버튼이 눌렸습니다.");
    });

    
    
    
    
    </script>
</body>




</body>
</html>