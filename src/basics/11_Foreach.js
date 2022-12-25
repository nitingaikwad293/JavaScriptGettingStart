/* 
Foreach is a method which prints all the element of the array
*/

var myArr = [10,20,34,33];

myArr.forEach(
function (value,index,myArr) {
    console.log(value*2);
}

);

console.log(myArr);