let clicked = true;
document.querySelector("#menuBox").addEventListener("click", () => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    document.querySelector(".rightNav ").style.cssText = "display:none;";
  } else {
    document.querySelector(".rightNav ").style.cssText = "display:flex ;";
  }
});


let paragraph = document.querySelector("#moreText");
let button = document.querySelector("#show");
button.addEventListener("click", () => {
  if (paragraph.style.display==="none") {paragraph.style.display = "flex";}
  else {paragraph.style.display="none"}
});
