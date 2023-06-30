// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  const lis = document.querySelectorAll("li");
  const resetBtn = document.getElementById("reset-btn");

  lis.forEach(function (li) {
    li.addEventListener("click", function () {
      this.classList.add("slide-out");
      this.addEventListener("animationend", function () {
        this.style.display = "none";
      });
    });
  });

  resetBtn.addEventListener("click", function () {
    lis.forEach(function (li) {
      li.classList.remove("slide-out");
      li.style.display = "block";
    });
  });
});
