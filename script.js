const themeBtn = document.getElementById("theme-btn");
console.log(themeBtn);

themeBtn.addEventListener("click", function () {
  if (document.body.classList.toggle("color-theme")) {
    themeBtn.classList.remove("fa-moon");
    themeBtn.classList.add("fa-sun");
  } else {
    themeBtn.classList.add("fa-moon");
    themeBtn.classList.remove("fa-sun");
  }
});
