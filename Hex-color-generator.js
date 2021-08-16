var Hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let hexcolor = "#";
for(let i=0; i<6; i++){
    hexcolor+= Hex[getRandomNumber()];
}
color.textContent = hexcolor;
document.body.style.backgroundColor = hexcolor;
});
function getRandomNumber(){
    return Math.floor(Math.random()*Hex.length);
}