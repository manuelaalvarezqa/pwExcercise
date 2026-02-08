function addingMachine3(){
    var total = 0;

    for(var i = 0 ; i < arguments.length ; i += 1){
        var number = arguments[i];
        console.log(typeof number)
        console.log(number)
        if (typeof number === "number"){
            total+=number;
        }
    }
    return total;
}

//--------------------
// We need to be carefull if the modification is in the original objecto

var manuela = {
 name:"Manuela",
 bestFriend:"Teresa",
 form: "human"   
}

function transmogrifier(human){
    if (typeof human !== "object"){
        console.error("This not a human");
        return;
    }
    var randomNum = Math.floor(Math.random()*2)+1;
    var newForm = human.form;

    switch(randomNum){
        case 1:
            newForm = "Vampire";
            break;
        case 2:
            newForm = "Dragon";
            break;
        case 3:
            newForm = "Rat";
            break;
    }
    //This is necessary when we don't want modifie the original object.
    return {name : human.name,
            bestFriend : human.bestFriend,
            form : newForm
    };

}

//--------------------
// Functions are objects in JS. This is why a annonymos function can be
// asigned to a variable and a value of a object.

var speakSomething = function(){
    console.log("Im speaking");
};

global.setTimeout(speakSomething, 5000)

var objectSpeak = {
    sayHello: function(){
        console.log("Hello!");
    },
    name: "Larry"
}

objectSpeak.sayHello();

//---------------------------------------------
/*
If any scope is especified, the variable is global, which we should avoid.
var: scope is determined by the function in which it's defined.
let and const: scope is local too. 

*/

//---------------------------------------------
/*
Scope
*/

var myNum = 32;

function randomizer(limit){
    var myNum = Math.floor(Math.random()*limit);
    console.log(myNum);
    console.log(global.myNum);
    return myNum;
}

//Arroy function
let isEven = num => num % 2 ===0;

/* 
This is called rest parameters, and the result is an array of arguments.
arguments is an actual JavaScript array. 
So along with the length property it has all the methods that*/

function bake(temp=350,time=35,...flavors){
    console.log("don't forget the flavors: ", flavors)
}
function addingMachine4(...terms){
    var total = 0;

    for(var i = 0 ; i < arguments.length ; i += 1){
        var number = arguments[i];
        console.log(typeof number)
        console.log(number)
        if (typeof number === "number"){
            total+=number;
        }
    }
    return total;
}

/*
 Asynchronous code:
 Code involving steps that can be run at the same time with the results of 
 some steps coming in later is called asynchronous because some steps can be 
 run in a way that doesn't block others. The results will be needed eventually,
just not immediately, so we can let other steps happen while waiting for
 the stuff that takes a while. 
*/
//On promise, sequence, no nesting
axios.get().then(function(response){
    return axios.get().then(function(response){
        return axios.get();

    })
})

/* Objects: 
being able to reuse code by setting a template for a type of data,
 and then every time I need to use it, getting an instance of that template. 
 mechanism is used to relate these objects? The way JavaScript works is 
 ifferent from most other popular languages. It uses a model called 
 Prototypal Inheritance where every object has a link to a parent object 
 from which it inherited some data and functions and that parent has the 
 same link to its parent and so forth. 
 */

 var cake = {

 }

 cake.prototype.bake = function(temp, min){

 }
 //This is the same:
 class Cake {
    bake(temp,min){

    }
 }

 // JS is losely typed: Flexible -> TS is strongly typed

