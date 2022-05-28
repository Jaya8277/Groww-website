const getData = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    return (data);
}

const appendData = (data, parent) => {
    parent.innerHTML = "";

    data.forEach((ele) => {
        let div = document.createElement('div');
        div.addEventListener("click", () => {
            let arr = [];
            arr.push(ele);
            localStorage.setItem('stock', JSON.stringify(arr));
            window.location.href = 'buyStocks.html';
            // console.log(arr);
        })

        let name = document.createElement('p');
        name.innerText = ele.product_name;

        let des = document.createElement('p');
        des.innerText = ele.amc;

        div.append(name, des);
        parent.append(div);
    });
}

export { getData, appendData }