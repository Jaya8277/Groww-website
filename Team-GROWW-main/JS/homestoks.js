let stocks = document.getElementById('stocks');
let mutualfunds = document.getElementById('mutual');
let fixed = document.getElementById('fixed');
let us = document.getElementById('us');
stocks.addEventListener('click', () => {
    slider.style.left = "135px";
    slider.style.width = "84px";
})
mutualfunds.addEventListener('click', () => {
    slider.style.left = "308px";
    slider.style.width = "162px";
})
fixed.addEventListener('click', () => {
    slider.style.left = "555px";
    slider.style.width = "130px";
})
us.addEventListener('click', () => {
    slider.style.left = "780px";
    slider.style.width = "60px";
})

let clicKtoChangeTypeOfshare= document.querySelector(".clicKtoChangeTypeOfshare")
let clickTOchange=document.getElementsByClassName("clickTOchange")
let underLineArr=Array.from(clickTOchange)
// underLineArr[0].style.borderBottom="2px solid #00d09c";


let clicKtoChangeTypeOfshareInterest=document.getElementsByClassName("clicKtoChangeTypeOfshareInterest")
let arr=["./Images/fd.png","./Images/fund.png","./Images/stock.png","./Images/usstock.png"]
let rateArr=["./Images/r1.png","./Images/r2.png","./Images/r3.png","./Images/r4.png"]
clicKtoChangeTypeOfshare.src=arr[0]
Array.from(clicKtoChangeTypeOfshareInterest)[0].src=rateArr[0]
//console.log(clicKtoChangeTypeOfshareInterest[0]);
Array.from(clickTOchange)[0].onclick=()=>{
clicKtoChangeTypeOfshare.src=arr[0]
// underLineArr[0].style.borderBottom="2px solid #00d09c"
// underLineArr[0].style.transition= "all 0.5s ease-in-out"

Array.from(clicKtoChangeTypeOfshareInterest)[0].src=rateArr[0]
// underLineArr[1].style.borderBottom="none"
// underLineArr[2].style.borderBottom="none"
// underLineArr[3].style.borderBottom="none"
}
Array.from(clickTOchange)[1].onclick=()=>{
clicKtoChangeTypeOfshare.src=arr[1]
// underLineArr[1].style.borderBottom="2px solid #00d09c"
Array.from(clicKtoChangeTypeOfshareInterest)[0].src=rateArr[1]
// underLineArr[0].style.borderBottom="none"
// underLineArr[2].style.borderBottom="none"
// underLineArr[3].style.borderBottom="none"
}
Array.from(clickTOchange)[2].onclick=()=>{
clicKtoChangeTypeOfshare.src=arr[2]
// underLineArr[2].style.borderBottom="2px solid #00d09c"
Array.from(clicKtoChangeTypeOfshareInterest)[0].src=rateArr[2]
// underLineArr[0].style.borderBottom="none"
// underLineArr[1].style.borderBottom="none"
// underLineArr[3].style.borderBottom="none"
}
Array.from(clickTOchange)[3].onclick=()=>{
clicKtoChangeTypeOfshare.src=arr[3]
// underLineArr[3].style.borderBottom="2px solid #00d09c"
Array.from(clicKtoChangeTypeOfshareInterest)[0].src=rateArr[3]
// underLineArr[0].style.borderBottom="none"
// underLineArr[1].style.borderBottom="none"
// underLineArr[2].style.borderBottom="none"
}

// CreateAccountForFree ...change href 

