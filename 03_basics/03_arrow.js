// this keyword is used to tell about current context
// arrow function samjne ke liye this samjhna padega, this samjhne ke liye object dekhna padega

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}
// console.log(this); // yha pr ye o/p me ek object dega // after that it will give window function in browser

// In simple terms :
// this alone in console give o/p as empty object
// but agar this ko kisi function me console.log(this) kiya jaaye to wo bahut se variable return karega:: see chai()
user.welcomeMessage();


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// function chai()
// {
//     console.log(this);
// }
// chai();




// function chai()
// {
//     const user = "hitesh"
//     console.log(this.user)  // it will give undefined
// }



const chai =  () =>
{
    const user = "hitesh"
    console.log(this)
    console.log(this.user)  // it will give undefined
}
chai();

// arrow funciton
// () => {}

const addTwo = (num1,num2) => {
    return num1+num2;
}


//Implicit return arrow function
const addTwoImplicit = (num1,num2) =>  num1+num2;
//or 
const addTwoImplicitOR = (num1,num2) =>  (num1+num2);
const addTwoString = (num1,num2) => ({"user":"Abhinav"}) // object return karne ke liye () small bracket se use karna hee padega

console.log(addTwo(2,3));
console.log(addTwoImplicit(2,3));

//summary: curly brackets use kiya to return keyword likhna padega agr small bracket use kiya to return likhna mandatory nhi