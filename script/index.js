let clicked = true;
document.querySelector("#menuBox").addEventListener("click", () => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    document.querySelector(".rightNav ").style.cssText = "display:flex;";
  } else {
    document.querySelector(".rightNav ").style.cssText = "display:none ;";
  }
});
let click = false;
document.querySelector("#moreinfo").addEventListener("click", () => {
  click = !click;
  console.log(click);
  if (click) {
    document.querySelector(".moreText ").style.cssText = "display:flex;";
  } else {
    document.querySelector(".moreText ").style.cssText = "display:none ;";
  }
});