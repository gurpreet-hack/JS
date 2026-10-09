console.log("Conditional Statement Example");
window.alert("This is an alert message!");
let num1 = 20;
let num2 = 30;

if(num1>num2){
    console.log(num1+" is greater than "+num2);
}else{
    console.log(num2+" is greater than "+num1);
}

console.warn("warning: This is a warning message!");
console.error("error: This is an error message!");
console.log("This is a log message!");

let n = 305357543653;

if(n%2==0){
    console.log(n+" is an even number");
}else{
    console.log(n+" is an odd number");
}

let mark = 95;

if(mark>=90 && mark <= 100){
    console.log("Grade: A");
}else if(mark>=60 && mark < 90){
    console.log("Grade: B");
}else if(mark>=25 && mark < 60){
    console.log("Grade: C");
}else{
    console.log("FAIL!!!");
}

let Username = "Gurpreet";
let password = "12345";

if(Username==="Gurpreet"){
    if(password==="12345"){
        console.log("Login Successful"); 
    }else{
        console.log("Invalid password");
    }
}else{
    console.log("Invalid username");
}

let cardVAILD = true;
let bal = 5000;
let amt = 2000;

if(cardVAILD){
    if(bal>amt){
        console.log("Transaction successful");
        bal -= amt;
        console.log("Remaining balance: "+bal);
    }else{
        console.log("Insufficient balance");
    }
}else{
    console.log("Invalid card");
}
let cal = '+';
let a = 20;
let b = 10;

switch(cal){
    case '+':{
        console.log(a+b); 
        break;
    }
    case '-':{
        console.log(a-b);
        break;
    }
    case '*':{
        console.log(a*b);
        break;
    }
    case '/':{
        console.log(a/b);
        break;
    }
    case '%':{
        console.log(a%b);
        break;
    }
    default:{
        console.log("Invalid operator");
    }
}