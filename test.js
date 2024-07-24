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


let anyDate= new Date("2-02-2009")

console.log(anyDate.toLocaleDateString("default",{
    weekday:"narrow",
    year:"2-digit",
    month:"long"
}));




