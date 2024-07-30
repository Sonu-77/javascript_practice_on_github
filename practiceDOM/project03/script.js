const form = document.querySelector("form")



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const player1name=document.querySelector("#player1").value
    const player2name=document.querySelector("#player2").value
    const buttons=document.querySelectorAll(".button-box")
    const winner=document.querySelector(".declare-winner")
    const restart=document.querySelector("#restart")
    const submit =document.querySelector("#submit")

    submit.disabled=true
    restart.style.display="block"



    let playerturnX=true

    console.log(`player1name : ${player1name}`);
    console.log(`player2name : ${player2name}`);




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

    buttons.forEach((button)=>{
        button.addEventListener("click",(e)=>{
            if (playerturnX) {
                button.innerHTML="X"
                playerturnX=false
            }else{
                button.innerHTML="O"
                playerturnX=true
            }
            checkwinner(player1name,player2name)
            button.disabled=true
        })
    })

    function checkwinner(player1name,player2name){
        for (const index of winningConditions) {
            let positionVal0=buttons[index[0]].textContent
            let positionVal1=buttons[index[1]].textContent
            let positionVal2=buttons[index[2]].textContent

            // console.log(positionVal0)
            // console.log(positionVal1)
            // console.log(positionVal2)
            

            if (positionVal0 !="" && positionVal1 !="" && positionVal2 != "") {
                if (positionVal0==positionVal1 && positionVal1==positionVal2) {
                    if (positionVal0 && positionVal1 && positionVal2 =="X") {
                        winner.style.display="block"
                        winner.innerHTML=`Winner of the match is ${player1name} `
                    }else{
                        winner.style.display="block"
                        winner.innerHTML=`Winner of the match is ${player2name} `
                    }
                    // console.log(`Winner is declared`)
                }else{
                    // console.log(`continue playing`)
                }
            }else{
                // console.log(`complete the game`);
            }
        }
    }

    restart.addEventListener("click",(e)=>{
        buttons.forEach((button)=>{
            button.innerHTML=""
            playerturnX=true
            button.disabled=false
            // restart.style.display="none"
            winner.style.display="none"
            submit.disabled=false
        })
        
    })

})

