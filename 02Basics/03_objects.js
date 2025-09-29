// singleton : ye apne tarah ka ek hee object hai

// agr objects literal ki tarah declare karte to singleton nahi banta hai 
// constructor se banega to hamesha singleton hee banega

//neeche object literals ka explanation diya gya h
// Object.create() //issi method ko bolte hai constructor ke through object banana 
const mySym = Symbol("key1")
const JSUser = {
    name: "Hitesh",
    "Full Name":"ABhinav Baranwal",
    [mySym]: "myKey1",  //kisi key ko symbol ki tarah use karna hai to square bracket me dedete uss key ko
    age: 18,
    location: "Jaipur",
    email: "abhinav@google.com",
    isLoggedIn: "False",
    lastLoginDays: ["Monday","Saturday","Wednesday","Thursday","Friday"]
}

console.log(JSUser.email);
console.log(JSUser["email"]);
console.log(JSUser["Full Name"])
// console.log(JSUser.Full Name)  // koi chance hee nhi hai ki Full Name ko hm dot se access kar paaye
console.log(JSUser[mySym])
JSUser.email = "abhinav.baranwal@example.com"
// Object.freeze(JSUser)
// JSUser.email = "abhinav.baranwal@google.com"

console.log(JSUser);

for (let key in JSUser) {
  console.log(key);  // only "name" shows, Symbol key is hidden //Hide object properties (not accessible in normal loops)
}

JSUser.greeting = function(){
    console.log("Hello JS user");
}
JSUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());
