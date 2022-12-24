//We can pass a function as a argumenment into another function

var f = function (firstName,lastName){
    console.log(firstName +  " "+ lastName) ;
}

var display = function (fn){
    fn("Nitin","Gaikwad");
}

display(f);