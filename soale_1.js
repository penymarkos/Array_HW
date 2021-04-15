let list = ["a", "b" , "c" , 9 , 10 ];

let output_list = [];
function deletItme(array , item){
    for(let i=0 ; i < array.length ; i++){
        if(!(array.indexOf(array[i]) == item)){
            output_list.push(array[i])
        }
    }return output_list
}

console.log(deletItme(list , 3))
// console.log(deletItme(list , 0))