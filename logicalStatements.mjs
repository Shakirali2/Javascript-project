import PromptSync from "prompt-sync" ;
const prompt = PromptSync();



// let isInPakistan = true
// if (isInPakistan) {
//     console.log("Hello Imran")
// } else {
//     console.log("Hello Alexander")
// }
//  let inInPakistan = true
//  if (inInPakistan) {
//     console.log("Hello Pakistan")
//  } else {
//     console.log("Hello Yello")
//  }








// let tomorrowMarriage = true
// if (tomorrowMarriage) {
//     console.log("We will go to marriage Cermony")
// } else {
//     console.log("We will wait for the perfect time")
// }

// let languageCenter = false
// if (languageCenter) {
//     console.log("I will take class.")
// } else {
//     console.log("I will sit at home.")
// }

// let childrenPlay = false
// if (childrenPlay) {
//     console.log("They will destroy everything.")
// } else {
//     console.log("They will distrub us.")
// }



// let percentage = prompt("What's your percentage?") ;
// if (percentage >=90){
//     console.log("A +")
// } else if (percentage >= 80){
//     console.log("A")
// }  else if (percentage >= 70){
//     console.log("B")
// } else if (percentage >= 60){
//     console.log("C")
// } else if (percentage >= 50){
//     console.log("D")
// }   else {
//     console.log("F")
// }




// let percentage = prompt("What's your percentage?") ;
// if (percentage >= 90) {
//     console.log("Grade A+")
// } else if (percentage >= 80) {
//     console.log("Grade A")
// } else if (percentage >= 70) {
//     console.log("Grade B")
// } else if (percentage >= 60) {
//     console.log("Grade C")
// } else if (percentage >= 50) {
//     console.log("Grade D")
// } else {
//     console.log("Fail")
// }

// let match = prompt("What's your score")
// if (match > 300) {
//     console.log("Hurray you won the match")
// } else if (match == 300) {
//     console.log("Match draw")
// } else {
//     console.log("You lost the match.")
// }

// Turnery operator


// let percentage = prompt("What's your percentage?") ;
// const result = percentage >= 50 ? "Passed" : "Failed"
// console.log(result)  

// let inInPakistan = prompt("Are you in Pakistan?");
// const greeting = inInPakistan === "True" ? "Hello Imran" : "Hello Alexander"
// console.log(greeting);

// let location = prompt("Where are you?")
// switch(location) {
//     case "America":
//         console.log("Hello Alexander");
//         break;
//     case "Macedonia":
//         console.log("Hail Alexander the Great");
//         break;
//     case "Pakistan":
//         console.log("Salam Imran Bhai");
//         break;
//     case "Germany":
//         console.log("Guten Tag Alexander");
//         break;
//     default:
//         console.log("Hi Alexander") 
// }

// let location = prompt("Where are you from?") ;
// switch(location) {
//     case "America":
//         console.log("Hello Alex")
//         break;
//     case "Mecedonia":
//         console.log("Hail Alex the Great") ;
//         break;
//     case "Pakistan" :
//         console.log("Salam Imran Bhai");
//         break;
//     case ("Germany"):
//         console.log("Guten Tag Alex");
//         break;
//     default:
//         console.log("Hi Alex")
// } 

const daysOfWeek = []
console.log(daysOfWeek);

daysOfWeek.push("1");
daysOfWeek.push("Sunday");
daysOfWeek.push("Tuesday");

console.log(daysOfWeek)

daysOfWeek.splice(1,0,"Monday");
console.log(daysOfWeek);

const daysOfWeek2 = ["Wednesday","Thursday", 1000]
console.log(daysOfWeek2);

const allDays = (daysOfWeek.concat(daysOfWeek2))
console.log(allDays)

allDays.pop();
allDays.shift();
console.log(allDays)


