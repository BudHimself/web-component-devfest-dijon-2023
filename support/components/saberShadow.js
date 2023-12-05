class Saber extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"})
        const opponentName = this.getAttribute("opponent-name")

        const template = document.querySelector("#saber")
        const templateClone = template.cloneNode(true)

        const opponentImg = templateClone.content.querySelector("img.opponent-img")
        opponentImg.setAttribute("src", `../img/${opponentName}.png`)

        const templateContent = templateClone.content.querySelector(".opponent")

        const saber = templateContent.querySelector(".saber")
        const saberLight = this.createSaberLight(opponentName)

        saber.prepend(saberLight)
        templateContent.appendChild(saber)

        const style = this.getStyle()

        shadow.appendChild(templateContent)
        shadow.appendChild(style)
        this.addOpeningEvent(shadow)
    }

    addOpeningEvent(shadow) {
        shadow.addEventListener('click', (event) => {
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

    createSaberLight(opponentName) {
        const saberLight = document.createElement("div")
        saberLight.setAttribute("id", `saber-${opponentName}`)
        saberLight.classList.add("saber-light")

        return saberLight
    }

    getStyle() {
        const style = document.createElement("style")
        style.textContent = `
            .saber {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            
            .saber-light {
                height: 0;
                transition: height 1s linear;
                width: 2px;
                margin-right: 3px;
            }
            
            .saber-open {
                height: 300px;
            }
            
            .opponent {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                height: 700px;
            }
            
            .opponent-img {
                width: 200px;
                background-color: white;
            }
            
            .opponent-saber {
                width: 100px;
                padding-bottom: 5px;
            }
            
            #saber-hero {
                background-color: lawngreen;
                box-shadow: 0 0 5px 5px #7cfc00;
            }
        `

        return style
    }
}

customElements.define('my-saber', Saber)