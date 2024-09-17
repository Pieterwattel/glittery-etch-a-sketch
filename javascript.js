let input = document.getElementById("input")

let button = document.getElementById("inputButton")

button.addEventListener("click", checkInput)

function checkInput (){
    if (input.value > 100 || input.value < 1 || isNaN(input.value)){
        alert ("number was invalid, choose number between 1 and 100")
    } else {
        createPixels()
    }
}


let pixelAmount

function createPixels (){
    pixelAmount = input.value * input.value
    for (i = pixelAmount; i > 0; i--){
        const pixel = document.createElement("span")
        frame.appendChild (pixel);
        pixel.classList.add("pixel");
        pixel.addEventListener("mouseover", () => increaseOpacity(pixel))
        pixel.style.minWidth= `min(calc(95vw/${input.value}), calc(95vh/${input.value}))`
    }
    
}

const frame = document.getElementById("frame")

function increaseOpacity(pixel){
        pixel.style.opacity= "100%"
}