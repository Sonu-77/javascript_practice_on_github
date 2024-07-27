const boxes=document.querySelectorAll(".box")
const tile =document.querySelector(".tile-space")
boxes.forEach( (box)=>{
    // console.log(box)
    box.addEventListener("click",(e)=>{
        console.log(e)
        console.log(e.target)
        switch (e.target) {
            case 'blue':
                tile.style.backgroundColor = "blue";
                break;
            case 'aqua':
                tile.style.backgroundColor = "aqua";
                break;
            case 'purple':
                tile.style.backgroundColor = "purple";
                break;
            case 'orange':
                tile.style.backgroundColor = "orange";
                break;
            default:
                break;
        }
        
        // tile.style.backgroundColor
    })
})

