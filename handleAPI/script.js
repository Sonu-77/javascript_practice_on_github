// Promise

let promiseone= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Sonu this is promise");
        resolve()
        
    },3000)
})

promiseone.then(()=>{
    console.log("promise is completed");
    
})


new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("this is second promise")
        resolve()
    }, 2000);
}).then(()=>{
    console.log("the second promise is completed");
    
})

console.log("Whats up")

console.log(this)


let promiceObj=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({name:"sonu",subject:"Javascript"})
        }else{
            reject("Error:mesg not resived")
        }
    },2000)
})

promiceObj.then((user)=>{
    console.log(user);
    return user.name
}).then((name)=>{
    console.log(name);
    return { name, subject: "Javascript" }
}).then((user)=>{
    console.log(user);
    return user.subject
}).then((subject)=>{
    console.log(subject);
})
.catch((error)=>{
    console.log(error);
}).finally()