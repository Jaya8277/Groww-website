const header = () => {
    return `<div id="navbar">
    <div id="logoLinks">
        <div id="logo">
            <img src="https://hhooww.com/wp-content/uploads/2019/03/Groww-Mutual-Fund-App-Review.jpg"
                alt="logo">
        </div>
        <div id="navlinks">
            <a href="#">Explore</a>
            <a href="#">Investments</a>
        </div>
    </div>
    <div id="searchlinks">
        <div id="searchbox">
        <i class="fa-solid fa-magnifying-glass position"></i> <input id="searchinput" type="text" placeholder="What are you looking for today?">
        <div id="searchDrop">
        </div>
        </div>
        <div id="profilelinks">
            <i class="fa-regular fa-bell leftmargin"></i>
            <i class="fa-solid fa-wallet leftmargin"></i>
            <i id="cart" class="fa-brands fa-opencart leftmargin"></i>
            <div class="leftmargin" id="profile">

             <img  id="cart" src="https://avatars.githubusercontent.com/u/55929607?v=4" alt="">
                <div id="dropdown">
                <div id="userinfo">
                    <div id="profile">
                        <img src="https://avatars.githubusercontent.com/u/55929607?v=4" alt="">
                    </div>
                    <div id="nameid">
                        <p>TeamGroww</p>
                        <p>TeamGroww098@gmail.com</p>
                    </div>
                </div>
                <div class="dropinfo">
                <i class="fa-solid fa-building-columns"></i><p>Bank & Autopay</p>
                </div>
                <div class="dropinfo">
                <i class="fa-solid fa-folder"></i><p>Import Funds</p>
                </div>
                <div class="dropinfo">
                <i class="fa-solid fa-tag"></i><p>Watchlist</p>
                </div>
                <div class="dropinfo">
                <i class="fa-solid fa-note-sticky"></i><p>Orders</p>
                </div>
                <div class="dropinfo">
                <i class="fa-solid fa-calendar-days"></i><p>SIPs</p>
                </div>
                <div class="dropinfo">
                <i class="fa-solid fa-phone"></i><p>Help & Support</p>
                </div>
                <div class="dropinfo">
                <i class="fa-solid fa-gear"></i><p>Settings</p>
                </div>
                <div class="dropinfo">
                <i class="fa-solid fa-moon"></i><p>Dark Mode</p>
                </div>
                <div class="dropinfo">
                <i class="fa-solid fa-arrow-right-from-bracket"></i><p>Log Out</p>
                </div>
            </div>
            </div class="dropinfo">
            <i style="font-size: 14px;margin-left: 3px;" id="dd" class="fa-solid fa-chevron-down"></i>
        </div>
    </div>
</div>
<div id="facilities">
    <div id="slider"></div>
    <div id="stocks">Stocks</div>
    <div id="mutual" class="mleft">Mutual Funds</div>
    <div id="fixed" class="mleft">Fixed Deposits</div>
    <div id="us" class="mleft">US Stocks</div>
</div>`
}

export default header;