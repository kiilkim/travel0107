

function funname1() {
    alert('진짜 시작?');alert('자신있나?');alert('그렇다면 레츠기릿');
    window.location='index01.html';
}
 
//한국어 네임 입력하기 버튼 
function koreanname() {
    a = prompt("아이디를 한번더 입력하세요");
    
    alert(isNaN(a));

        if (isNaN(a)==true) 
    {
            alert(a+'님 반값습니다. 시작하시죠.');
            window.location="index01bg.html";
            //넘어간 페이지(index01bg.html의) ㅇㅇ님에 이름이 들어가도록 ?
            //document.querySelector('nickname').              
    } else {
        alert(a+'는 숫자입니다. 문자만써주세요');
        return koreanname();
    }
}

/* 뭐 유저정보저장이라는데, ,뭐라는지,, 윈도우7에선안되는지도,,

if (typeof(Storage) !== "undefined") {
  localStorage.setItem("lastname", "smith");
  document.getElementById("result").innerHTML =
  localStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML ;
      }

function clickCounter() {
  if(typeof(storage) !== "undefined") {
      if(localStorage.clickCounter) {
          localStorage.clickCounter=
          Number(localStorage.clickCounter)+1;
      } else {
          localStorage.clickCounter = 1;
      } document.getElementById("result").innerHTML ="you have clicked the buton"
      +localStorage.clickCounter+"time(s)" ;
  } else {
      document.getElementById("result").innerHTML="sorry, your browser does not support web storage..";
  } 
}
*/







//앞에 슬라이드
var slideIndex = 1;
            showSlides(slideIndex);
            
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              var dots = document.getElementsByClassName("dot");
              if (n > slides.length) {slideIndex = 1}    
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";  
              }
              for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
            }