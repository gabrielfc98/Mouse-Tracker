const Circle = document.querySelector(".circle");

function mouseTracker(event) {
  Circle.style.top = event.y + "px";
  Circle.style.left = event.x + "px";
}

window.addEventListener("mousemove", mouseTracker);
