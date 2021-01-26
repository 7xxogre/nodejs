// 페이지 기본 틀(template)

module.exports = {
  HTML:function(title, header, body, cssfile)     // 전체 페이지 템플릿
  {                        // title은 상단 윈도우에 띄울 글, header는 상단 네비게이션바 , body는 내용물
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/CSS/common.css">
        <link rel="stylesheet" href="/CSS/${cssfile}.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap" rel="stylesheet">
        <title>${title}</title>
        <script src="https://kit.fontawesome.com/352fde3883.js" crossorigin="anonymous"></script>
        <script src="/JS/common.js" defer></script>
    </head>
    <body id = 'body'>
        ${header}

    <!---->
        ${body}
    <!---->

        <bar class="bottombar">
            <ul class="bottom__info">
                <li>번호 : 000-012-3456</li>
                <li>주소 : 서울 강남구 삼성로 508 2층</li>
                <li>이용시간 : 10AM ~ 10PM</li>
            </ul>
            <ul class="bottom__icon">
                <li><a href="https://twitter.com/?lang=ko"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
            </ul>
        </bar>
    </body>
    </html>
    `;
  },
  header: function(logined)
  {
    /*
      상단 헤더를 전체적으로 모아줌
      logined는 로그인 링크
   */
    return `
    <nav class="navbar">
      <a href="/">
        <div class="navbar__logo">
            <i class="fas fa-stroopwafel"></i>
          WEB11
        </div>
      </a>
        <ul class="navbar__menu">
            <li><a href="/introduction">INTRODUCE</a></li>
            <li><a href="/menu/1">MENU</a></li>
            <li><a href="/reservation">RESERVATION</a></li>
            <li><a href="/notify">NOTIFY</a></li>
            <li><a href="/mypage">MY PAGE</a></li>
        </ul>
        <div class="navbar__login">
            ${logined}
        </div>

        <a href="#" class="navbar__toggleBtn">
            <i class="fas fa-bars"></i>
        </a>
    </nav>
    `
  },
  login: function(islogin)                // 로그인 링크
  {
    if(islogin)     //로그인 되어있다면 로그아웃 쿼리 실행 페이지
    {
      return `
       <a href = "/logout_process">
        <button class="btn btn1">LOG OUT</button>
       </a>
      `
    }
    else {        // 비로그인이라면 로그인 페이지와 회원가입 페이지
      return `
      <a href = "/login">
        <button class="btn btn1">LOG IN</button>
      </a>
      <a href = "/sign_up">
        <button class="btn btn2">SIGN UP</button>
      </a>
      `
    }
  }
}
