function otpgen() {
    let otp = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    alert("sending otp in 5 seconds")
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(alert(`your otp is ${otp}`))
        }, 5000)
    })

    let otpInput = document.createElement("input")
    otpInput.type = "text"
    otpInput.classList.add("login-otp")
    otpInput.setAttribute("id", "login-otp")
    otpInput.setAttribute("placeholder", "Enter OTP");
    let h5 = document.createElement("h5")
    h5.textContent = "Wrong OTP Number please close this box and try again"
    h5.style.color = "red"
    h5.style.textAlign = "center"
    h5.setAttribute("id", "otp-validationText")
    let div = document.createElement("div")
    div.classList.add("login-btnDiv")
    let btn = document.createElement("button")

    btn.classList.add("login-btn")
    btn.setAttribute("id", "login-btn")
    btn.innerText = "VERIFY-OTP"
    div.append(btn)
    let div2 = document.createElement("div")
    div2.classList.add("login-tc")
    div2.innerHTML = `<p>By proceeding, I agree to <b><u>T&C</u></b> and <b><u>Privacy policy</u></b></p>`

    let box = document.getElementById("div4-1")
    box.innerHTML = null
    box.append(otpInput, h5, div, div2)

    document.getElementById("login-btn").addEventListener("click", () => {
        let otp_val = document.getElementById("login-otp").value;
        let otp_validation = document.getElementById("otp-validationText")

        if (otp_val.length == 0 || otp_val != otp) {
            otp_validation.style.opacity = "1"
            return;
        }
        // var user=email_input.value
        // localStorage.setItem("userId",JSON.stringify(user))
        else {
            alert("Login Success!")

            window.location.href = "./stocks.html"
        }

    })
}