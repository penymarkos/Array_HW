let num_list = [[2,3],5,[[[2,9],4],4],1,0];
let out = [[1,2,3] , [4,5,6] ,[7,8,9]]
let num = [];
function deep_copy(list){
    
    for(let i=0 ; i < list.length ; i++){
        
        if(typeof(list[i]) !== "object"){
            num.push(list[i])
        }else{
            deep_copy(list[i])
        }
    }
    return num
}

console.log(deep_copy(out))

