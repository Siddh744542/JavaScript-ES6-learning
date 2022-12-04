const obj = {
    name:"Siddharth Tiwari",
    getName:function(){
        return this.name;
    },
    getRoll:function(){
        return this.roll;
    }
}
const obj2 = {
    roll:1,
    name:"Rajat",// now get name will return Rajat, 
    //if rajat is not there, then it will look in the original obj
    __proto__:obj// passing obj to obj2 as prototype
}
console.log(obj2.getName());
console.log(obj.getRoll());// this returns undefined
console.log(obj2.getRoll());//but this will print 1
const obj3 = {
    class:"MCA",
    __proto__:obj2
}
console.log(obj3.getName());

const array = ["Siddharth Tiwari"];
console.log(array);//array have many prototype array obj

Array.prototype.show = function(){// we can create our own prototype
    return this;
}
const cities = ["Prayagraj"];
console.log(cities.show());

Array.prototype.convertIntoObject=function(){
    const newObj={};
    this.forEach(element=>{
        newObj[element]=element;
    })
    return newObj
}
console.log(cities.convertIntoObject());

function MyPrototype(name){
    this.name=name;
}
MyPrototype.prototype=obj;
const newProto = new MyPrototype("Shikha");
console.log(newProto.getName());