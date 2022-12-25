//  you can defince a object by open { and closing brakers }

var blankObject = {}

var employee = {
   firstName : "Nitin",
   lastName: "Gaikwad",
   age: "35"
}

console.log(employee)

// nested objects

var person = {
   
    name : "Nitin Gaikwad",
    address : {
        city :"Indore",
        state : "MP"
    }

}

console.log(person.address.city); // by dot operation

console.log(person.address["city"]) // By sqaure braker operator