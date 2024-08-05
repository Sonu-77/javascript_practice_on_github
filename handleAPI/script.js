// // Promise

// let promiseone= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Sonu this is promise");
//         resolve()
        
//     },3000)
// })

// promiseone.then(()=>{
//     console.log("promise is completed");
    
// })


// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("this is second promise")
//         resolve()
//     }, 2000);
// }).then(()=>{
//     console.log("the second promise is completed");
    
// })

// console.log("Whats up")

// console.log(this)


// let promiceObj=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false
//         if(!error){
//             resolve({name:"sonu",subject:"Javascript"})
//         }else{
//             reject("Error:mesg not resived")
//         }
//     },2000)
// })

// promiceObj.then((user)=>{
//     console.log(user);
//     console.log(user.name);
//     console.log(user.subject);
//     return user
// }).then((user)=>{
//     console.log(user)
//     console.log(`${user.name} is learning ${user.subject}`);
// }).catch((err)=>{
//     console.log(err);
    
// }).finally(()=>{
//     console.log("the promise is completed or not");
// })


// const practicepromise= new Promise((resolve,reject)=>{

//     setTimeout(()=>{

//         let error=true
    
//         if (!error) {
//             resolve({
//                 name:"Sonu",
//                 age:23,
//                 email:"sonukachhap77@gmail",
//                 loggedIn:false
//             })
            
//         }else {
//             reject("Err:checking it ......")
//         }
//     },5000)
// })

// practicepromise.then((user)=>{
//     console.log(user);
//     console.log(user.name);
//     console.log(user.age);
//     console.log(user.email);
//     console.log(user.loggedIn);

//     return user
// }).then((user)=>{
//     console.log(`${user.name} and my age is ${user.age}, my email is ${user.email} logIn ${user.loggedIn}`);
// }).catch((err)=>{
//     console.log(err);
    
// }).finally(()=>console.log("promise is completed"))

    
                                                                            // Multiple promise 


const numpromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num=300

        if (num<500) {
            resolve(`the number ${num} is less then 500 `)
        }else{
            reject(`the number ${num} is greater then 500`)
        }
    },4000)

})

const checkpromise= new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        let logged=true
    
        if (logged) {
            resolve(`the user is logged In `)
        }else{
            reject(`the user is logged out`)
        }
    },2000)

    
})

                                                                                                // all

Promise.all([numpromise,checkpromise]).then((result)=>{
    console.log(result[0])
    console.log(result[1])
}).catch((err)=>{
    console.log(err)
}).finally(()=>console.log("completed")
)


                                                                                                // race


Promise.race([numpromise,checkpromise]).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err);
    
}).finally(()=>console.log("completed"))