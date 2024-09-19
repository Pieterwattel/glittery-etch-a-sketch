let input = document.getElementById("input")

let button = document.getElementById("inputButton")

let samplerButton = document.getElementById("colorSampler")

button.addEventListener("click", checkInput)

samplerButton.addEventListener("click", samplerSwitch)

let color

const frame = document.getElementById("frame")

let pixelAmount

input.value = 10

let colorSampler = false;

function checkInput (){
    if (colorSampler) {
        alert ("only value 2 is allowed for colorSampler")
    } else {
        if (input.value > 100 || input.value < 1 || isNaN(input.value)){
            alert ("number was invalid, choose number between 1 and 100")
        } else {
            createPixels()
        }
    }

}

function samplerSwitch () {
    if (colorSampler) {
        colorSampler = false
        input.value = 10
        createPixels()
    } else {
        colorSampler = true
        input.value = 2
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
        if (colorSampler == true) {

        } else {
            pixel.addEventListener("mouseover", () => setTimeout(() => fadeOut(pixel), Math.random()*5000));
        }
    }
    
}

function randomColor(pixel){
        pixel.style.backgroundColor = getRandomRgb();
        pixel.classList.remove("fadeOut");
        pixel.classList.add("pixelColor")
        if (colorSampler == true){
            pixel.textContent = color
        } else {
        }

}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function fadeOut (pixel){
    console.log("fadeout function was run")
    pixel.classList.add("fadeOut");
}