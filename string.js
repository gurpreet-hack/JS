let username = "Gurpreet";
console.log(username);

let email = "gurpreet@example.com";
console.log(email);

let letter = "A";
console.log(letter);

let letter1 = 'B';
console.log(letter1);

let msg = `Hello ${username}, your email is ${email}`;
console.log(msg);

let info = `User Information:
Username: ${username}
Email: ${email}
Letter: ${letter}
Letter 1: ${letter1}`;
console.log(info);

let age = parseInt(prompt("Enter your age:"));
console.log(`Your age is: ${age}`);

let data = " Javascript is a programming language";
console.log(data.length);
console.log(data.at(2));
console.log(data.at(15));

console.log(data.charAt(3));
console.log(data.charAt(-3));

console.log(data.toUpperCase());
console.log(data.toLowerCase());

console.log(data.includes("pt"));
console.log(data.includes("z"));

console.log(data.charCodeAt(3));
console.log(data.concat(username," is awesome!"));

console.log(data.indexOf("a"));
console.log(data.lastIndexOf("a"));

console.log(data.replace("Java", "Type"));
let phone = "1234567890";
console.log(phone.replace());
console.log(data.split(" "));
console.log(data.split("a"));
console.log(data.slice(1, 10));
console.log(data.substring(1, 10));
console.log(data.trim());
