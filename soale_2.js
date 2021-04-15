let list1 = [1,2,3];
let list2 = [4,5,6];
let list3 = [7,8,9];



function combine(...array){
    let mylist = []
    mylist = array
    
    let out_list = [];
    for(let i=0 ; i < mylist.length ; i++){
        if(typeof(mylist[i] !== "object")){
            out_list.push(mylist[i])
        }else{
            combine(mylist[i])
        }
        
    }
    return out_list
    
}

console.log(combine(list1 , list2 , list3))
