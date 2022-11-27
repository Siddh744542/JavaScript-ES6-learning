// Closure
// example : 1

var sum = function(a){
    console.log("a = "+a);
    var c=4;
    return function(b){
        return a+b+c;
    }
}
var store = sum(2);//calling
console.log(store(5));

// here we can access the value of a&b and it is called closure
// because it is in lexical scope

// example 2
var sum = function(a,b,c){
    return{
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
}

var store = sum(2,3,4);
console.log(store.getSumTwo());
console.log(store.getSumThree());
