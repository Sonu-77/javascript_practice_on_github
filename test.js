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

console.log(Array.isArray("Sonu"))

console.log(Array.of("Sonu"))

console.log(Array.from("Sonu"))
console.log(Array.("Sonu"))














