let pixelAmount = 50

const frame = document.getElementById("frame")

const pixel = document.createElement("span")
frame.appendChild (pixel);
pixel.classList.add("pixel");
pixel.textContent = "hello";