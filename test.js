// console.log('Sonu')

// let num=5;

// for(i=1;i<=num;i++){
//     let row="";
//     for(j=1;j<=i;j++){
//         row+='*';
//     }
//     console.log(row)
// }

// let nowdate= new Date()

// console.log(nowdate.toDateString());
// console.log(nowdate.toISOString());
// console.log(nowdate.toJSON());
// console.log(nowdate.toLocaleDateString());
// console.log(nowdate.toLocaleString());
// console.log(nowdate.toLocaleString("default", {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     timeZoneName: "short"
// }));
// console.log(nowdate.toLocaleTimeString());
// console.log(nowdate.toString());
// console.log(nowdate.toTimeString());
// console.log(nowdate.getTimezoneOffset());
// console.log(nowdate.toUTCString());


// let anyDate= new Date("2-02-2009")

// console.log(anyDate.toLocaleDateString("default",{
//     weekday:"narrow",
//     year:"2-digit",
//     month:"long"
// }));


// let arr=[1,2,3,45,56,7,7]

// console.log("Arr",arr);

// let slicearr=arr.slice(0,4)

// console.log("Slice",slicearr)
// console.log("After Slice",arr);

// let splicearr=arr.splice(0,4)

// console.log("Splice",splicearr)
// console.log("After Splice",arr);

let arr1=["sonu","aman","ankit","priya"]

let arr2=["gyan","pintu","palak","rohan"]

let arr3=["ramin","sam","john"]

// arr1.push(arr2)

// console.log(arr1);

// let concatarr=arr1.concat(arr2)

// console.log(concatarr)

let allname=[...arr1,...arr2,...arr3]
// console.log(allname);

let arrmixed=[4,3,56,[4,5,6,7],[46,[5,7,89,32]]]

// console.log((arrmixed.flat(1)));

// console.log(Array.isArray("Sonu"))

// console.log(Array.of("Sonu"))

// console.log(Array.from("Sonu"))
// console.log(Array.of("Sonu"))

// Object 

const obj1={
    name: "Proveb",
    course:"Chai aur code",
    topic:"Javascript",
    level:"Basic"
}

const obj2={
    Nme: "Risika",
    Cus:"Chai aur code",
    toi:"Python",
    lev:"Advance"
}

obj1.marks=80

// obj2.marks=85

// console.log(obj1);
// console.log(obj2);


// console.log(obj1.course)

// const obj3={obj1,obj2}
// console.log(obj3);

// const objcombine= Object.assign({},obj1,obj2)
// console.log(objcombine);

// const objcombinespread = {...obj1, ...obj2};
// console.log(objcombinespread);



// Destructing Object

// const {Nme:naaaaam}=obj2

// console.log(naaaaam);


// IIFE

// (function talk(name){
//      console.log(`${name}, how r u doing`)
// })("Sonu");

// // Implicite Function
// ((num1,num2)           =>            (console.log(num1+num2)))(1,7);  

// (() =>{
//     console.log(`Welcome to implicite function example`)
// })();

// this practice

// console.log(this);

// (function thiswhat(){
//     console.log(this)
// })();


                                                                            // Filters

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const filtergenre= books.filter( (book)=>{
    return book.genre==="History";
  })

//   console.log(filtergenre);

  const publishafterf= books.filter( (book)=>{
    return book.publish>=2000
  })

//   console.log(publishafterf)




                                                // Foreach  

let publishafter =[]

books.forEach( (book)=>{
    if (book.publish>2000) {
        return publishafter.push(book)
    }
})

// console.log(publishafter);




  let filterGenreHistory=[];

  books.forEach( function(book){
    if (book.genre==="History") {
        return filterGenreHistory.push(book)
        
    }
  })

//   console.log(filterGenreHistory);

  const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  myNums.forEach( (num)=>{
    // console.log(num)
  })



  myNums.forEach( (num)=>{
    //  console.log(num+100);
  })

//   REduce


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: "12999"
    },
]

const totalcartprice= shoppingCart.reduce( (result,currprice)=>{
    return result+Number(currprice.price)
},0)

console.log(totalcartprice);