// preloader
// const preloaderWrapper = document.querySelector(".preloader-wrapper");

// window.addEventListener("load", () => {
//   preloaderWrapper.classList.add("fade-out-animation");
// });

// login form

function fadeInAnimation() {
  let btn = document.querySelector(".login");

  btn = document.querySelector(".signIn").classList.add("signInScale");
  btn = document.querySelector(".fa-solid").style.display = "block";
}

function closeButton() {
  let close = document.querySelector(".fa-solid");

  close = document.querySelector(".signIn").classList.remove("signInScale");
  close = document.querySelector(".fa-solid").style.display = "none";
}

// show and hide password

function myFunction() {
  var inPut = document.getElementById("password");
  var hide1 = document.getElementById("eye1");
  var hide2 = document.getElementById("eye2");

  if (inPut.type === "password") {
    inPut.type = "text";
    hide1.style.display = "block";
    hide2.style.display = "none";
  } else {
    inPut.type = "password";
    hide1.style.display = "none";
    hide2.style.display = "block";
  }
}

// Login authencation
function auth() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "admin@gmail.com" && password == "admin123") {
    window.location.assign("homepage.html");
    alert("Login succesfully!");
  } else {
    return false;
  }
}

// OTP verification
var btnContinue = document.querySelector(".btn-continue"),
  btnVerify = document.querySelector(".btn-verify"),
  btnSubmit = document.querySelector(".btn-submit"),
  btnNext = document.querySelector(".btn-next"),
  btnPrev = document.querySelector(".fa-arrow-left"),
  btnCyber = document.querySelector(".about-cybersecurity"),
  btnStart = document.querySelector(".start-section"),
  btnCourse = document.querySelector(".course");

function otpButton() {
  btnContinue = document
    .querySelector(".email-verify")
    .classList.remove("go-right");
  btnContinue = document
    .querySelector(".otp-container")
    .classList.add("go-right");
}

function next() {
  btnVerify = document
    .querySelector(".otp-container")
    .classList.remove("go-right");
  btnVerify = document
    .querySelector(".update-password")
    .classList.add("go-right");
}

// handle verify button
function nextBtn() {
  setTimeout(() => {
    window.location.href = `index.html`;
  }, 3000);
  btnSubmit.classList.add("active");
}

function btnNext1() {
  btnNext = document
    .querySelector(".container-wrapper")
    .classList.remove("next");
  btnNext = document
    .querySelector(".about-cybersecurity")
    .classList.add("next");
}
function btnNext2() {
  btnNext = document
    .querySelector(".about-cybersecurity")
    .classList.remove("next");
  btnNext = document.querySelector(".start-section").classList.add("next");
}
function btnNext3() {
  btnNext = document.querySelector(".start-section").classList.remove("next");
  btnNext = document.querySelector(".course").classList.add("next");
}
function btnNext4() {
  btnNext = document.querySelector(".course").classList.remove("next");
  btnNext = document.querySelector(".question").classList.add("next");
}
function btnNext5() {
  btnNext = document.querySelector(".question").classList.remove("next");
  btnNext = document.querySelector(".question1").classList.add("next");
}
function btnNext6() {
  btnNext = document.querySelector(".question1").classList.remove("next");
  btnNext = document.querySelector(".gradescreen").classList.add("next");
}
