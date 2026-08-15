const websiteNameHandler = document.getElementById("websiteNameHandler")
const domainHandler = document.getElementById("domainHandler")
const domainMenu = document.getElementById("domainMenu")
const domainArrow = document.getElementById("domainArrow")


function travel() {
    const name = websiteNameHandler.value.trim().replace(/\s+/g, "")
    let domain = domainHandler.value.trim()

    if (domain === "") {
        domain = ".com"
    } else {
        domain = "." + domain.replace(/^\.+/, "")
    }

    window.open("https://www." + name + domain)
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        domainMenu.classList.remove("open")
        domainArrow.textContent = "▼"
    }
})


domainArrow.addEventListener("click", function () {
    domainMenu.classList.toggle("open")

    if (domainMenu.classList.contains("open")) {
        domainArrow.textContent = "▲"
    } else {
        domainArrow.textContent = "▼"
    }
})

const domainOptions = domainMenu.querySelectorAll("div")

domainOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        domainHandler.value = option.dataset.domain

        domainMenu.classList.remove("open")

        domainArrow.textContent = "▼"
    })

})
