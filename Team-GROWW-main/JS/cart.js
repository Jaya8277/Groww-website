// cart data show_________________________________________________________________________________________________

function gotostocks() {
    window.location.href = 'stocks.html';
}
let local = JSON.parse(localStorage.getItem("cartData")) || [];
display(local)

function display(local) {
    let cart = document.getElementById("addtocart")
    cart.innerHTML = "";
    local.forEach((el, ind) => {
        let div = document.createElement('div')
        div.setAttribute('id', "appendDiv")

        // div.style.border="1px solid red"

        let div1 = document.createElement('div')
        div1.style.display = "flex"

        let title = document.createElement("h4")
        title.setAttribute("id", "title")
        title.innerText = el.product_name;

        let image = document.createElement("img")
        image.src = el.product_image;
        image.setAttribute("id", "appendImage")
        image.style.height = "70px"


        let amount = document.createElement('p')
        amount.setAttribute("id", "amount")
        amount.innerText = "Amount : ₹ " + el.amount;
        amount.style.fontWeight = "600"

        let del = document.createElement('div');
        del.id = 'icon';
        del.style.position = 'absolute'
        del.style.left = '43%'
        del.addEventListener('click', () => {
            remove(ind);
        });
        del.innerHTML = `<i class="material-icons">delete</i>`

        div1.append(image, title, del)
        div.append(div1, amount)
        cart.append(div)


    })

    console.log(local)

    let sum = 0
    for (var j = 0; j < local.length; j++) {
        sum += Number(local[j].amount)
    }
    console.log(sum)
    let totalamount = document.getElementById("total_amount1-1")
    totalamount.innerText = "₹  " + sum
    totalamount.style.fontSize = "20px"
    totalamount.style.color = "black"
    totalamount.style.fontWeight = "bold";


    let totalitems = document.getElementById("totalitem")
    totalitems.innerText = "(" + local.length + ")"

}



const remove = (ind) => {
    console.log(ind);
    local.splice(ind, 1);
    console.log(local);
    localStorage.setItem('cartData', JSON.stringify(local));
    display(local);
}
