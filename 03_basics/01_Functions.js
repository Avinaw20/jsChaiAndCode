
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyName         // without parenthesis isse kehte reference

// sayMyName()      // with parenthesis isse kehte execute




// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){  //yaha present number1, number2 ko parameter kehte 

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  // yha present 3, 5 ko arguments kehte

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`  // jo bhi arguments paas karoge upr parameter me wo idhar aayega
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) // jab hm kuch paas nahi karte tab undefined aata hai o/p agr parameter me default mentioned na ho kuch 



// iss tarah ke shopping carts me use hote , ki admin ko pata hee nahi h ki user kitne products cart me add karega
function calculateCartPrice(...num1){  // yha par teen dots ko rest operator kaha jaata hai
    // jitne bhi value arguments se aa rahe hai sabko ek bundle me array banao aur wapas dedo
    return num1
}

function calculateCartPrice(val1, val2, ...num1){ // rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
//or
handleObject({
    username: "sam",
    price: 399
})


//passing array to function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//or 
console.log(returnSecondValue([200, 400, 500, 1000]));