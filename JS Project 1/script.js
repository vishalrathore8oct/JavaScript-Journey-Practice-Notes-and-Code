const body = document.querySelector("body")
// console.log(body);

const buttons = document.querySelectorAll(".button")
// console.log(buttons);

const randomBtn = document.querySelector("#random-button")
// console.log(randomBtn);

buttons.forEach((button) => {
    // console.log(button);

    button.addEventListener("click", (e) => {
        // console.log(e.target.id);

        if (e.target.id == "red") {
            body.style.background = e.target.id
        }
        if (e.target.id == "green") {
            body.style.background = e.target.id
        }
        if (e.target.id == "blue") {
            body.style.background = e.target.id
        }
        if (e.target.id == "white") {
            body.style.background = e.target.id
            body.style.color = "black"
        }
    })
})

// console.log(Math.floor((Math.random() * 15) + 1));

randomBtn.addEventListener("click", () => {
    const hexaCodeNumbers = "0123456789ABCDEF"
    let generateHexaCode = "#"
    for (let i = 1; i < 7; i++) {
        generateHexaCode += hexaCodeNumbers[Math.floor((Math.random() * 15) + 1)]
    }
    body.style.background = generateHexaCode
    randomBtn.textContent = `Press Below Button to Change Background Color. ${generateHexaCode}`
})
