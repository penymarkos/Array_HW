const sentens = "i have 2 apples and 3 pineapples 5 in the name 8";

const creat_list = sentens.split(' ');
let number = creat_list.filter((item) =>{
    return parseInt(item)
})

console.log(number)

// let num = [];

// function tonumber(list){
//     for(let i=0 ; i < list.length ; i++){
//         if(parseInt(list[i]) !== "NaN"){
//             num.push(parseInt(list[i]))
//         }
//     }
//     let finali = [];
//     for(let k=0  ; k < num.length ; k++){
        
//         if(typeof(num[k]) !== NaN ){
//             finali.push(num[k])
//         }
//     }
//     return finali
// }
// console.log(tonumber(numberic))