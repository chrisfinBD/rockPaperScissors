window.onload = () => {


    // Add events for buttons
    let btnGo = document.getElementById("btnGo")
    let divChoose = document.getElementById("divChoose")
    let divSuspense = document.getElementById("divSuspense")
    let divResult = document.getElementById("divResult")
    let btnReplay = document.getElementById("btnReplay")
    let weaponsArray = ["ROCK", "PAPER", "SCISSORS"]

    btnGo.addEventListener("click", (e) => {
        let weapon = document.querySelector(".weapon.selected")
    
        
        let playerChoice = weapon.getAttribute("x_value")
        console.log("Player " + playerChoice)
        let computerChoice = Math.floor(Math.random() * 3)
        console.log(computerChoice)


        //Update displayed result
        let pWeapon = document.getElementById("playerChoice")
        let cWeapon = document.getElementById("computerChoice")
        

        let p = Number(playerChoice)
        let c = Number(computerChoice)


        pWeapon.innerText = weaponsArray[p]
        cWeapon.innerText = weaponsArray[c]

        
        let result = "unknown"
        if (p == c) {
            result = "Tie"
        } else if (c != 2 && p > c || c == 2 && p == 0) {
            result = "You win!"
        }
        else if (p != 2 && p < c || p == 2 && c == 0) {
            result = "You lose!"
        }

        let resultTextField = document.getElementById("result")
        resultTextField.innerText = result
       


        divChoose.className = "section hidden"
        divResult.className = "section"
    })

    btnReplay.addEventListener("click", () => {
        divResult.className = "section hidden"
        divChoose.className = "section"

        let allWeapons = document.querySelectorAll(".weapon")
            for (let i = 0; i < allWeapons.length; i++) {
                allWeapons[i].className = "weapon"
            }
    })

    // Add events for weapons
    let weapons = document.querySelectorAll(".weapon")
    
    for (let i = 0; i < weapons.length; i++) {
        console.log(weapons[i].innerText)
        let w = weapons[i]
        console.log(w.class)
        w.addEventListener("click", (e)=> {

            let allWeapons = document.querySelectorAll(".weapon")
            for (let i = 0; i < allWeapons.length; i++) {
                allWeapons[i].className = "weapon"
            }

            w.className = "weapon selected"
            console.log(w)
            
        })

      }
    
}