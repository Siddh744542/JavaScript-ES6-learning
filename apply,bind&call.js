// apply, call and bind
// Example-1
let userDetails ={
    name:"Siddharth Tiwari",
    age:22,
    designation:"Student",
    printName:function(){
        console.log(this.name);
    }
}
userDetails.printName(); 
let userDetails2 ={
    name:"Rajat Dwivedi",
    age:22,
    designation:"Student"
}
// function borrowing.
userDetails.printName.call(userDetails2);
//with the help of call we can borrow functions.

// Example-2
let printDesignation = function(college, city){
    console.log(this.designation+" "+college);
}
//Call
printDesignation.call(userDetails2,"Iert", "Prayagraj");
//Apply
printDesignation.apply(userDetails2,["Iert", "Prayagraj"]);
// difference is in apply we pass value in an array list

//Bind
let newdata = printDesignation.call(userDetails2,"Iert", "Prayagraj");
newdata();
// we save a copy of our function and invoke later
