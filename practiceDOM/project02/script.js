
// BMI = weight in kg / height in cm squared x 10,000. 

const form=document.querySelector("form")




form.addEventListener("submit",(e) => {
    e.preventDefault()
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const result=document.querySelector("#result")
    const resultDesp=document.querySelector("#result-desp")

    if (!isNaN(height) && !isNaN(weight)) {
        const resultvalue= (weight/(height*height))*10000
        result.innerHTML=`The BMI is ${resultvalue.toFixed(2)}`    
        if (resultvalue<=18.5 ) {
            resultDesp.style.display="block"
            resultDesp.innerHTML=`You are considered underweight `
        } else if(resultvalue>18.5 && resultvalue<=24.9){
            resultDesp.style.display="block"
            resultDesp.innerHTML=`You are considered healthy `
            
        }else{
            resultDesp.style.display="block"
            resultDesp.innerHTML=`You are considered overweight `
        }
    }else{
        resultDesp.innerHTML="Please enter the required Height and Weight to calculate the BMI"
    }

    
})
