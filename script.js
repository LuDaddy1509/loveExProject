let datetxt = "8/2/2005";
let datatxtletter =
  "Chúc mừng sinh nhật nhe!:) chúc Hà năm mới vui vẻ, luôn xinh đẹp, đạt được nhiều thành công trong công việc, học tập và tìm được hạnh phúc cho bản thân. Cái project này Nhân làm ra từ hồi lâu rồi tầm 3-4 tháng, mà đôi khi mọi thứ xẩy ra không như những gì mình muốn, như mà thôi Nhân không có định làm phiền bà nữa đâu, tạm biệt💕";
let titleLetter = "Dear Hà";
let charArrDate = datetxt.split("");
let charArrDateLetter = datatxtletter.split("");
let charArrTitle = titleLetter.split("");
let currentIndex = 0;
let currentIndexLetter = 0;
let currentIndexTitle = 0;
let date__of__birth = document.querySelector(".date__of__birth span");
let text__letter = document.querySelector(".text__letter p");
setTimeout(function () {
  timeDatetxt = setInterval(function () {
    if (currentIndex < charArrDate.length) {
      date__of__birth.textContent += charArrDate[currentIndex];
      currentIndex++;
    } else {
      let i = document.createElement("i");
      i.className = "fa-solid fa-star";
      document.querySelector(".date__of__birth").prepend(i);
      document.querySelector(".date__of__birth").appendChild(i.cloneNode(true));
      clearInterval(timeDatetxt);
    }
  }, 100);
}, 12000);

var intervalContent;
var intervalTitle;
$("#btn__letter").on("click", function () {
  $(".box__letter").slideDown();
  setTimeout(function () {
    $(".letter__border").slideDown();
  }, 1000);
  setTimeout(function () {
    intervalTitle = setInterval(function () {
      if (currentIndexTitle < charArrTitle.length) {
        document.querySelector(".title__letter").textContent +=
          charArrTitle[currentIndexTitle];
        let i = document.createElement("i");
        i.className = "fa-solid fa-heart";
        document.querySelector(".title__letter").appendChild(i);
        currentIndexTitle++;
      } else {
        clearInterval(intervalTitle);
      }
    }, 50);
  }, 2000);
  setTimeout(function () {
    document.querySelector("#heart__letter").classList.add("animationOp");
    document.querySelector(".love__img").classList.add("animationOp");
    document.querySelector("#mewmew").classList.add("animationOp");
  }, 2800);
  setTimeout(function () {
    document.querySelectorAll(".heart").forEach((item) => {
      item.classList.add("animation");
    });
  }, 3500);
  setTimeout(function () {
    intervalContent = setInterval(function () {
      if (currentIndexLetter < charArrDateLetter.length) {
        text__letter.textContent += charArrDateLetter[currentIndexLetter];
        currentIndexLetter++;
      } else {
        clearInterval(intervalContent);
      }
    }, 50);
  }, 6000);
});
$(".close").on("click", function () {
  clearInterval(intervalContent);
  document.querySelector(".title__letter").textContent = "";
  text__letter.textContent = "";
  currentIndexLetter = 0;
  currentIndexTitle = 0;
  document.querySelector("#heart__letter").classList.remove("animationOp");
  document.querySelector(".love__img").classList.remove("animationOp");
  document.querySelector("#mewmew").classList.remove("animationOp");
  document.querySelectorAll(".heart").forEach((item) => {
    item.classList.remove("animation");
  });
  $(".box__letter").slideUp();
  $(".letter__border").slideUp();
});
