// Immediately Invoked Function Expression : IIFE
// matlab jaise hee function likha turant hee execute karwana hai
// ye hum karte hai kayi baar ye karne ke liye ki jaise hee hamari application start ho waise hee hamara application DB se connect ho jaaye
// aur doosra reason hai global scope se pollution nahi chahiye apne ko
//global scope ke pollution se problem hoti h kayi baar uss global scope ke pollution ko hatane ke liye hamne IIFE ka use kiya

(function chai()
{
    //named IIFE kehte h isse bcoz iska kuch naam hai
    console.log(`DB Connected`)
})();   // yha par jo semi-colon laga h ye add karna mandatory h agr aap IIFE ka use kar rahe ho otherwise ye function ko end karna mushkil hoga


// ()() //1st paranthesis jidhar hum function ki definitions likhne waale hai ; 2nd paranthesis jidhar hum execute karwaayenge

// (() => {
//     console.log(`DB connected two`);
// })();

((name) => {
    console.log(`DB connected two with ${name}`);
})('ABhinav');   //jo bhi execute karne wala tha usko argument de diya hai aur wo as a parameter paas kar raha hai
