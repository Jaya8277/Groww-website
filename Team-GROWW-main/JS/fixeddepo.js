var arr = JSON.parse(localStorage.getItem("stock")) 

getData()

async function getData(){
    try{
        let res = await fetch('http://localhost:3000/products');
        let data =await res.json();
       
        // data.product_image
        display(data)
        console.log(data)
    }
    catch(error){
        console.log(error)

    }
}

function display(data){
    let interest=document.getElementById('interest')
    interest.innerText=data[0].percentage_interval[0]
   
    document.getElementById('axis-int').innerText=data[2].percentage_interval[0]
    document.getElementById('tata-int').innerText=data[1].percentage_interval[0]
   
    // document.getElementById('aditya-int').innerText=data[6].percentage_interval[0]


        let icici =document.getElementById('icici')
        icici.addEventListener('click',()=>{
        localStorage.setItem('fixedDeposit',JSON.stringify(data[0]))
});
let axis =document.getElementById('axis')
axis.addEventListener('click',()=>{
localStorage.setItem('fixedDeposit',JSON.stringify(data[2]))
});
let tata =document.getElementById('tata')
tata.addEventListener('click',()=>{
localStorage.setItem('fixedDeposit',JSON.stringify(data[1]))
});

let aditya =document.getElementById('aditya')
aditya.addEventListener('click',()=>{
localStorage.setItem('fixedDeposit',JSON.stringify(data[6]))
});



     
 
    
}



