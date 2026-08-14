const websiteNameHandler = document.getElementById("websiteNameHandler")
const domainHandler = document.getElementById("domainHandler")

function travel() {
    const name = websiteNameHandler.value.trim()
    const domain = domainHandler.value.trim()
    window.open("https://www." + name + domain)
}

