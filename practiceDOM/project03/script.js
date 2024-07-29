const button = document.querySelectorAll(".botton-box")

let playerO=true

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


button.forEach( (box)=>{
    box.addEventListener( "click",(e)=>{
        if (playerO) {
            box.innerHTML="O"
            playerO=false
        }else{
            box.innerHTML="X"
            playerO=true
        }
        box.disabled=true
        checkwinner()
    })
    
})

function checkwinner(){
    for (const index of winningConditions) {
        let positiontext0=button[index[0]].innerText
        let positiontext1=button[index[1]].innerText
        let positiontext2=button[index[2]].innerText

        if (positiontext0 !="" || positiontext1 != "" || positiontext2 !="") {
            
            if (positiontext0==positiontext1 && positiontext1==positiontext2) {
                console.log("winner is declared");
            }
        }else{
            console.log("complete the game")
        }
        
       
    }
}

