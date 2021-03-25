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