let input = document.getElementById("input")

let button = document.getElementById("inputButton")

button.addEventListener("click", checkInput)

const frame = document.getElementById("frame")

let pixelAmount

input.value = 2

function checkInput (){
    if (input.value > 100 || input.value < 1 || isNaN(input.value)){
        alert ("number was invalid, choose number between 1 and 100")
    } else {
        createPixels()
    }
}

checkInput();

function createPixels (){
    pixelAmount = input.value * input.value
        frame.innerHTML="";
    for (i = pixelAmount; i > 0; i--){
        const pixel = document.createElement("span")
        frame.appendChild (pixel);
        pixel.classList.add("pixel");
        pixel.addEventListener("mouseover", () => randomColor(pixel))
        pixel.style.minWidth= `min(calc(95vw/${input.value}), calc(95vh/${input.value}))`
    }
    
}

function randomColor(pixel){
        pixel.style.backgroundColor = getRandomRgb();
        pixel.style.opacity= "100%"
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
  for (var i = 0; i < 10; i++) {
    console.log(getRandomRgb());
  }