/*
Create a application which check a employee is from a particaluar state or not

*/

var employee = {
    firstName: "Nitin",
    lastName : "Gaikwad",
    address : {
        city:"Inodre",
        state: "MP"
    },
    isFromState: function (state) {
        if(this.address.state==state){
            return true 
        }else{
            return false
        }
    }

}

console.log(employee.isFromState("MP"));

console.log(employee.isFromState("UP"));