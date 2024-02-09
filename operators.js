let a=4; //assignment 
let b=9;
let c=5;
let d=2;
//arithmetic
let sum=a+b; //addition
let product=a*b; //product
let power=c**2; //power
let arithmetic=(a+b)*(c-d);
console.log("Sum is",sum);
console.log("Product is",product);
console.log("Power is",power);
console.log("Arithmetic operators:",arithmetic);

//comparison
let result= a>b;
let result2= d<c;
let result3= a==c;
console.log("Result of 4>9 is",result);
console.log("Result of 2<5 is",result2);
console.log("Result of 4=5 is",result3);

//string 
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2; //using +
text1 += "Kennedy"               //using +=
console.log("Concatenated text is",text3);
console.log("Concatenated text is",text1);

//logical
and_op=(a<5&&c>7);
or_op=(a<5||c>7);
not_op=!(b>c);
console.log("And operator is:",and_op);
console.log("Or operator is:",or_op);
console.log("Not operator:",not_op);

//bitwise 
let x = 5 & 1; //and
let y = 5 | 1;  // or
let z = 5 ^ 1;  //xor
console.log("And bitwise",x);
console.log("Or bitwise",y);
console.log("XOR bitwiise",z);

//ternary
let ans = (10 > 0) ? true : false;
let message = (20 > 15) ? "Yes" : "No";
console.log("Printing answer",ans);
console.log("Printing message",message);

//type
console.log(typeof("Shreya"));
console.log(typeof(123));
console.log(typeof(23.45));
console.log(typeof(false));


