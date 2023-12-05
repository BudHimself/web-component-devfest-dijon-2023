const sabers = document.querySelectorAll("img.opponent-saber")

sabers.forEach((saber, index) => {
    if (index < 3) {
        saber.addEventListener('click', (event) => {
            const open = "saber-open"
            const parent = event.target.parentNode
            const elem = parent.querySelector(".saber-light")

            if (elem.classList.contains(open)) {
                elem.classList.remove(open)
            } else {
                elem.classList.add(open)
            }
        })
    }
})

function angularForce() {
    document.querySelector("my-saber > div > img.opponent-img").src = "../img/angular.png"
}

function reactForce() {
    const saberLight = document.querySelector("my-saber > div.opponent > div.saber > div.saber-light")
    saberLight.style.backgroundColor = "deepskyblue"
    saberLight.style.boxShadow = "0 0 5px 5px #00BFFF"
}

let click = 0

function vueForce() {
    document.querySelector("my-saber > div.opponent > div.saber > img.opponent-saber").src = "../img/banane.webp"
    document.querySelector("my-saber > div.opponent > div.saber-light").style.bottom = "380px"
}