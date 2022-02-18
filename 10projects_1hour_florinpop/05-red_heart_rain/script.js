import allCssColors from "./cssColors.json" assert { type: "json" };

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const rightArrowBtn = document.getElementById("rightArrowBtn");
const colorBtn = document.getElementById("colorBtn");
const spinBtn = document.getElementById("spinBtn");
const beatingBtn = document.getElementById("beatingBtn");
const selectMenu = document.querySelector("select");
const container = document.querySelector(".container");
let randomColor=false, spinHearts=false, beatingHearts=false;

rightArrowBtn.addEventListener("click",()=>{
    container.classList.toggle("hidden");
});

colorBtn.addEventListener('click',function(){
    randomColor= !randomColor;
});

spinBtn.addEventListener("click",()=>{
    spinHearts = !spinHearts;
});

beatingBtn.addEventListener("click",()=>{
    beatingHearts = !beatingHearts;
});

function createHeart(){
    const heart = document.createElement("div");
    const heartIcon = document.createElement("i");
    const spanEl = document.createElement("span");

    heartIcon.classList.add("fas","fa-heart");
    spanEl.appendChild(heartIcon);
    heart.appendChild(spanEl);

    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random()*2 + 3 + "s";

    let color="red";
    if(randomColor)
    color = generateRandomColor();

    heart.style.color = color;

    if(spinHearts){
        heartIcon.classList.add("spin");
        heartIcon.style.animationDuration = Math.random()*2 + 1 + "s";
    }

    if(beatingHearts){
        spanEl.style.display = "block";
        spanEl.classList.add("beat");
    }
    document.body.appendChild(heart);
    
    setTimeout(()=>{
        heart.remove();
    },5000);
}

function generateRandomColor(){
    let new_color = "#";
    for(let i=0;i<6;i++)
    new_color += hex[Math.floor(Math.random()*hex.length)];

    return new_color;
}

setInterval(createHeart,500);