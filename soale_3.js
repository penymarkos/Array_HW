// .....................................................
// https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31
//.........................................................
let list = [1,5,3,9,4,2,2,3,9];


function deletElement(array){
    let output = [];
    let list_2 = array.sort()
    for(let i=0; i < list_2.length ; i++){
        if(!(list_2[i] == list_2[i -1]))
            output.push(list_2[i])
    }
    return output
}
console.log(deletElement(list))

// let delet_dubleItem = list.filter((item, index) => {
//     return list.indexOf(item) === index;
// });

// console.log(delet_dubleItem);


// ر اه دیگه اینه که ارایه رو سورت کنیم و هر عضو رو مساوری عضو قبل قرار بدیم 
// function uniq(a) {
//     return a.sort().filter(function(item, pos, ary) {
//         return !pos || item != ary[pos - 1];
//     });
// }
// console.log(uniq(list))

// استفاده از متد جدید set() :
// const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

// let unique = [...new Set(names)];
// console.log(unique); // 'John', 'Paul', 'George', 'Ringo'


