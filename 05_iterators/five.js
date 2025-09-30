const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){   // forEach ke andar ke call back function dedo ki usse kya karna h
//     console.log(val);  // call back function me uska naam nahi hota
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //ye dhyan rakhna ki hame function ka reference dena hai usse execute nahi karna hai 

// coding.forEach( (item, index, arr)=> {  //forEach ke paas aisa nahi h ki sirf item aata ho , uske paas index bhi aata hai aur fir array ki list bhi aati hai
//     console.log(item, index, arr);
// } )




// [{}, {}, {}]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )


const myCoding1 = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java", languageFileName: "java" },
    { languageName: "python", languageFileName: "py" },
];

myCoding1.forEach((item, index, arr) => {
    console.log(`Index: ${index}`);
    console.log(`Language: ${item.languageName}`);
    console.log(`File Name: ${item.languageFileName}`);
    console.log("Full Array:", arr);  // the whole array myCoding1
    console.log("------");
});
