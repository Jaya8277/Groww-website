



fetch(`http://localhost:3000/products`,{
        method : "GET",
        headers :{
            'Content-Type' : 'application/json'
        },
    })
    .then((res)=> res.json())
    .then((res)=> append(res))
    .catch((err)=> console.log(err)) 

let main = document.querySelector("tbody");
const append = (data) => {
console.log("data",data)
    main.innerHTML = "";

    data.forEach(({amc,nav,product_image}) => {

        let innerdiv = document.createElement("tr");

        let name = document.createElement("td");
        name.innerText = amc;

        name.addEventListener("click",()=>{
            //here add page all info about stocks 
            window.location.href = "https://groww.in/stocks/icici-bank-ltd"
        })

        let price = document.createElement("td");
        price.innerText=nav

        let chart = document.createElement("td");
        let im = document.createElement("img")
        im.src = `../Images/life1.png`
        chart.append(im);
        im.style.width = "100px"

        let icon = document.createElement("td");

        let plus = document.createElement("img");
        plus.src = `https://th.bing.com/th/id/OIP.FFs80T9pTkoNzsIPSHieHwAAAA?pid=ImgDet&w=186&h=186&c=7`
        plus.style.width = "22px"
        plus.addEventListener("click" , ()=>{
            plus.src = `https://th.bing.com/th/id/OIP.4hCFsRIv_ynvaFadf9Q7UwHaGP?w=185&h=180&c=7&r=0&o=5&pid=1.7`
            localStorage.setItem("watchlist",JSON.stringify({amc,nav,product_image}))
            alert("added to watchlist");
        })

    
        
        
        icon.append(plus)

        innerdiv.append(name,chart,price,icon);

        main.append(innerdiv);
    })
}


//------------------------------------------------------------------------------------------------------------

// var item = 1;

// function prev() {
//   var items = document.querySelectorAll("#items > div");
//   if (item == 1) {
//     item = items.length;
//   } else {
//     item--;
//   }
//   showItem();
// }

// function next() {
//   var items = document.querySelectorAll("#items > div");
//   if(item == items.length) {
//     item = 1
//   } else {
//     item++
//   }
//   showItem();
// }

// function showItem() {
//   var items = document.querySelectorAll("#items > div");
//   for (var i = 0; i < items.length; i++) {
//     if (i + 1 == item) {
//       items[i].style.display = "block"
//     } else {
//       items[i].style.display = "none";
//     }
//   }
// }

// showItem();





