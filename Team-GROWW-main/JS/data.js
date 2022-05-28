

let data = [{
  "id": "006",
  "product_image": "https://groww.in/images/partners/kotak_groww.svg",
  "product_name": "Kotak Bluechip Fund Direct Growth",
  "amc": "Kotak",
  "risk": "Moderate Risk",
  "category": "Hybrid",
  "rating": "4",
  "percentage_interval": [
    "1.35%",
    "56.73%",
    "23.95%"
  ],
  "fund_Category": "3.8",
  "fund_size": "3289.90 Cr",
  "nav": "424.52",
  "return_percentage": "18.48",
  "price": "0",
  "symbol": "DAI.DEX"
},
{
  "id": "007",
  "product_image": "https://groww.in/images/partners/birla_groww.svg",
  "product_name": "Aditya Birla Sun Life Corporate Bond",
  "amc": "Aditya Birla",
  "risk": "Low Risk",
  "category": "Equity",
  "rating": "3",
  "percentage_interval": [
    "0.01%",
    "4.90%",
    "9.12%"
  ],
  "fund_Category": "0.7",
  "fund_size": "782.10 Cr",
  "nav": "89.57",
  "return_percentage": "2.17",
  "price": "0",
  "symbol": "RELIANCE.BSE"
},
{
  "id": "008",
  "product_image": "https://groww.in/images/partners/hdfc_groww.svg",
  "product_name": "HDFC Index Sensex Direct Plan Growth",
  "amc": "HDFC",
  "risk": "Moderate Risk",
  "category": "Debt",
  "rating": "4",
  "percentage_interval": [
    "1.40%",
    "52.53%",
    "21.32%"
  ],
  "fund_Category": "6.7",
  "fund_size": "6719.30 Cr",
  "nav": "549.44",
  "return_percentage": "17.16",
  "price": "0",
  "symbol": "600104.SHH"
},
{
  "id": "009",
  "product_image": "https://groww.in/images/partners/sbi_groww.svg",
  "product_name": "SBI Technology Oppurtunities Fund Direct Growth",
  "amc": "SBI",
  "risk": "High Risk",
  "category": "Hybrid",
  "rating": "4",
  "percentage_interval": [
    "2.09%",
    "83.30%",
    "38.09%"
  ],
  "fund_Category": "5.8",
  "fund_size": "5816.80 Cr",
  "nav": "168.57",
  "return_percentage": "32.96",
  "price": "0",
  "symbol": "000002.SHZ"
}
]
localStorage.setItem("news", JSON.stringify(data))


let gainers = [{
  "id": "012",
  "product_image": "https://groww.in/images/partners/tata_groww.svg",
  "product_name": "TATA Buisness Cycle Fund Direct Growth",
  "amc": "TATA",
  "risk": "High Risk",
  "category": "Equity",
  "rating": "4",
  "percentage_interval": [
    "1.64%",
    "64.11%",
    "42.79%"
  ],
  "fund_Category": "3.6",
  "fund_size": "3681.50 Cr",
  "nav": "10.76",
  "return_percentage": "26.98",
  "price": "0",
  "symbol": "SHOP.TRT"
},
{
  "id": "013",
  "product_image": "https://groww.in/images/partners/axis_groww.svg",
  "product_name": "Axis Mid Cap Direct Growth",
  "amc": "Axis",
  "risk": "Low Risk",
  "category": "Debt",
  "rating": "4",
  "percentage_interval": [
    "1.39%",
    "67.27%",
    "29.53%"
  ],
  "fund_Category": "5.8",
  "fund_size": "5189.30 Cr",
  "nav": "126.81",
  "return_percentage": "32.11",
  "price": "0",
  "symbol": "GPV.TRV"
},
{
  "id": "014",
  "product_image": "https://groww.in/images/partners/hdfc_groww.svg",
  "product_name": "HDFC Short Term Debt Fund Direct Plan Growth",
  "amc": "HDFC",
  "risk": "High Risk",
  "category": "Equity",
  "rating": "3",
  "percentage_interval": [
    "3.70%",
    "79.14%",
    "27.19%"
  ],
  "fund_Category": "3.1",
  "fund_size": "3100.80 Cr",
  "nav": "51.44",
  "return_percentage": "19.29",
  "price": "0",
  "symbol": "DAI.DEX"
},
{
  "id": "015",
  "product_image": "https://groww.in/images/partners/sbi_groww.svg",
  "product_name": "SBI Banking & Financial Services Fund Direct Growth",
  "amc": "SBI",
  "risk": "Moderate Risk",
  "category": "Debt",
  "rating": "5",
  "percentage_interval": [
    "0.68%",
    "128.14%",
    "24.15%"
  ],
  "fund_Category": "4.6",
  "fund_size": "4619.70 Cr",
  "nav": "95.13",
  "return_percentage": "28.15",
  "price": "0",
  "symbol": "RELIANCE.BSE"
},]

localStorage.setItem("gainers", JSON.stringify(gainers))

let loosers = [{
  "id": "018",
  "product_image": "https://groww.in/images/partners/axis_groww.svg",
  "product_name": "Axis Bluechip Fund Direct Growth",
  "amc": "Axis",
  "risk": "Moderate Risk",
  "category": "Hybrid",
  "rating": "3",
  "percentage_interval": [
    "0.97%",
    "87.91%",
    "32.39%"
  ],
  "fund_Category": "1.2",
  "fund_size": "1249.30 Cr",
  "nav": "65.35",
  "return_percentage": "26.05",
  "price": "0",
  "symbol": "TSCO.LON"
},
{
  "id": "019",
  "product_image": "https://groww.in/images/partners/ppfas_groww.svg",
  "product_name": "Paragh Parikh Tax Server Fund Direct Growth",
  "amc": "Paragh Parikh",
  "risk": "High Risk",
  "category": "Equity",
  "rating": "3",
  "percentage_interval": [
    "0.91%",
    "72.28%",
    "33.14%"
  ],
  "fund_Category": "0.8",
  "fund_size": "828.10 Cr",
  "nav": "53.79",
  "return_percentage": "24.91",
  "price": "0",
  "symbol": "SHOP.TRT"
},
{
  "id": "020",
  "product_image": "https://groww.in/images/partners/uti_groww.svg",
  "product_name": "UTI Nifty Index Fund Direct Growth",
  "amc": "UTI",
  "risk": "High Risk",
  "category": "Debt",
  "rating": "3",
  "percentage_interval": [
    "0.14%",
    "81.34%",
    "15.14%"
  ],
  "fund_Category": "1.8",
  "fund_size": "1835.60 Cr",
  "nav": "281.65",
  "return_percentage": "21.47",
  "price": "0",
  "symbol": "GPV.TRV"
},
{
  "id": "021",
  "product_image": "https://groww.in/images/partners/kotak_groww.svg",
  "product_name": "Kotak Smallcap Fund Direct Growth",
  "amc": "Kotak",
  "risk": "Moderate Risk",
  "category": "Hybrid",
  "rating": "4",
  "percentage_interval": [
    "2.16%",
    "65.14%",
    "21.58%"
  ],
  "fund_Category": "3.8",
  "fund_size": "3289.90 Cr",
  "nav": "424.52",
  "return_percentage": "18.48",
  "price": "0",
  "symbol": "DAI.DEX"
},]
localStorage.setItem("loosers", JSON.stringify(loosers))


let index = [
  {
    "id": "001",
    "product_image": "https://groww.in/images/partners/icici_groww.svg",
    "product_name": "ICICI Prudential Technology",
    "amc": "Nifty 50",
    "risk": "High Risk",
    "category": "Index",
    "rating": "106.20(0.60%)",
    "percentage_interval": [
      "2.32%",
      "95.53%",
      "41.88%"
    ],
    "fund_Category": "4.5",
    "fund_size": "4532.50 Cr",
    "nav": "17,325.30",
    "return_percentage": "36.76",
    "price": "0",
    "symbol": "000002.SHZ"
  },
  {
    "id": "002",
    "product_image": "https://groww.in/images/partners/tata_groww.svg",
    "product_name": "TATA Digital India Fund Direct Growth",
    "amc": "Banknifty",
    "risk": "Low Risk",
    "category": "Debt",
    "rating": "136.90(0.38%)",
    "percentage_interval": [
      "2.06%",
      "91.46%",
      "40.94%"
    ],
    "fund_Category": "8.2",
    "fund_size": "8232.50 Cr",
    "nav": "35,847.20",
    "return_percentage": "36.44",
    "price": "0",
    "symbol": "IBM"
  },
  {
    "id": "003",
    "product_image": "https://groww.in/images/partners/axis_groww.svg",
    "product_name": "Axis Small Cap Fund Direct Growth",
    "amc": "Sensex",
    "risk": "Moderate Risk",
    "category": "Hybrid",
    "rating": "350.16(0.61%)",
    "percentage_interval": [
      "1.03%",
      "77.84%",
      "34.28%"
    ],
    "fund_Category": "1.2",
    "fund_size": "1249.30 Cr",
    "nav": "57,943.65",
    "return_percentage": "26.05",
    "price": "0",
    "symbol": "TSCO.LON"
  },]

localStorage.setItem("index", JSON.stringify(index))


//-----------------------------------------------------------------------------------------------------------


function append2(newsData, m) {

  m.innerHTML = "";

  newsData.forEach((ele) => {

    let innerdiv = document.createElement("div");
    innerdiv.addEventListener('click', () => {
      let arr = [];
      arr.push(ele);
      localStorage.setItem('stock', JSON.stringify(arr));
      window.location.href = 'buyStocks.html';
      // console.log(arr)
    })

    let name = document.createElement("p");
    name.innerText = ele.amc;

    let price = document.createElement("p");
    price.innerText = "₹" + ele.nav

    let icon = document.createElement("img");
    icon.src = ele.product_image;

    innerdiv.append(icon, name, price);

    m.append(innerdiv);
  })

}

export { append2 }


//------------------------------------------------------------------------------------------------


function append3(x, y) {

  y.innerHTML = "";

  x.forEach((ele) => {

    let innerdiv = document.createElement("div");
    innerdiv.addEventListener('click', () => {
      let arr = [];
      arr.push(ele);
      localStorage.setItem('stock', JSON.stringify(arr));
      window.location.href = 'buyStocks.html';
      // console.log(arr)
    })
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.gap = "5%"
    let name = document.createElement("p");
    name.innerText = ele.amc;

    let price = document.createElement("p");
    price.innerText = ele.nav

    let p = document.createElement("p");
    p.innerText = ele.rating
    p.style.color = "#00d09c"

    div.append(price, p)
    innerdiv.append(name, div);

    y.append(innerdiv);
  })

}

export { append3 }



