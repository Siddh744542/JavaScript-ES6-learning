//ES6
// example Rest
function addNumbers(a,b,c,...other){
console.log(other)
return a+b+c;
}
const res=addNumbers(2,5,6,8,9,7,8,9)
console.log(res)
    
// Example spread

//Spread
var names=["Ajay", "Anuj", "Vivek"];
function getNames (name1, name2, name3){
console. log(name1, name2, name3)
}
getNames (names[0], names [1], names[2])
getNames(...names)
getNames (names)

//Object Ke Sath -> Rest
var students={
    name: "Ajay",
     age: "28",
    hobbies:["Cricket", "Singing"]
 }
//const age-students.age;
const {age,...rest} =students;
console.log(rest)
//Spread
var newStudent={
    ...students,
    age: "29"
}
console.log(newStudent)
