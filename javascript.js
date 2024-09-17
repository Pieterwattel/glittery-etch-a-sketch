let input = 7
let pixelAmount = input * input

const frame = document.getElementById("frame")

for (i = pixelAmount; i > 0; i--){
        const pixel = document.createElement("span")
    frame.appendChild (pixel);
    pixel.classList.add("pixel");

}