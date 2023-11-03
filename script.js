function mouseTracker(event) {
  const xMouse = event.x;
  const yMouse = event.y;
  console.log(xMouse, yMouse);

  const Circle = document.querySelector(".circle");
  Circle.style.top = yMouse + "px";
  Circle.style.left = xMouse + "px";
}

window.addEventListener("mousemove", mouseTracker);
