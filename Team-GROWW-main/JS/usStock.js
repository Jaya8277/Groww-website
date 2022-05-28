


let clickToShowFQS = document.getElementsByClassName("clickToShowFQS")

let hiddenText = document.getElementsByClassName("hiddenText")

let count = 0;

let hiddenTextArr = Array.from(hiddenText)
let clickToShowArr = Array.from(clickToShowFQS)
clickToShowArr.forEach((c, i) => {
    c.onclick = () => {
        count++;
        if (count % 2 !== 0) {
            hiddenText[i].style.display = "block"
        } else {
            hiddenText[i].style.display = "none"
        }
        //  hiddenText[i-1].style.display="none"
        //  hiddenText[i+1].style.display="none"
        //  hiddenText[i+2].style.display="none"
        //  hiddenText[i-2].style.display="none"
    }

})










getData()

async function getData(){
    try{
        let res = await fetch('http://localhost:3000/products');
        let data =await res.json();
        console.log(data)

    }
    catch(error){
        console.log(error)

    }
}

