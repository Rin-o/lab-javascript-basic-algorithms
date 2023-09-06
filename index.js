//Iteration 1: Names and Input
//1.1
let hacker1 = "Rino";
//1.2
console.log("The driver's name is" + " " + hacker1);
//1.3
let hacker2 = "Lidia";
//1.3
console.log("The navigator's name is" + " " + hacker2);

//Iteration 2: Conditionals
//2.1

let hacker1 = "Rino";
let hacker2 = "Lidia";

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

//Iteration 3: Loops
//3.1
let hacker1 = "Rino";
let driversName = "";

for (let i=0; i<hacker1.length; i+=1){
  driversName+=hacker1[i].toUpperCase() + " ";
}
  console.log(driversName);

//3.2
let hacker2 = "Lidia"
let navigatorsName = "";

for (let i=hacker2.length-1; i>=0; i-=1){
 navigatorsName += hacker2[i];
}
  console.log(navigatorsName);

//3.3
let hacker1 = "Rino";
let hacker2 = "Lidia";

  if (hacker1<hacker2){
    console.log("The driver's name goes first.")}
  else if (hacker1>hacker2){
    console.log("Yo, the navigator goes first, definitely.")
}
  else {console.log("What?! You both have the same name?");
}
