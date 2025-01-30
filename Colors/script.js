const clickBtn = document.getElementById("button");
const colorResult = document.getElementById("color");
const body = document.getElementById("body");

const simpleColors = [        
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF"
];

function randElement(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

clickBtn.addEventListener("click", ()=>{
    let newBg = randElement(simpleColors);
    body.style.backgroundColor = newBg;
    colorResult.innerText = newBg;
})

