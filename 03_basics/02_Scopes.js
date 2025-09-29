//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){  // yha sir function ko declare kiya hai aur neeche waale me function me declare ke saath saath hold bhi kar diya hai
    return num + 1
}



addone(5)

// addTwo(5)  // yha function ko pehle call hee nhi kar sakte because kisi variable me hold kar rahe usse
const addTwo = function(num){ // isko function to kehte hee hai saath hee me expression bhi bolte hai
    // ye actually me ek variable ki tarah work karne lag jaata hai
    return num + 2
}
addTwo(5)

// aage jaake ek function aata hai js me hoisting