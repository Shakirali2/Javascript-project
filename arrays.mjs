// Object it is also collection of data 
// but insted of simple list
// it has properties as well

const student = {
    rollNumber: "PIAIC123456",
    firstName: "Adil",
    lastName: "Altaf",
    // object can also have array
    // inside object there is also object like this
    courses: ["Web3", "Cloud"],
    address : {
        city: "Karachi",
        country: "Pakistan",
    
    }

}

// }
// // console.log(student.rollNumber)
// // student.rollNumber = "PIAIC999999"

console.log(student)

// const fruits = {
//     apple : "Red & Green",
//     mango : "Yellow",
//     banana : "Yellow",
//     pomgranate : "Red"
// } 

// console.log(fruits)

// // want to creat multidimentional array
// const array1 = [ 1,2,3];
// const array2 = [array1,array1];
// console.log(array2)
// // want to get number from array
// console.log(array2[0][1])



// const numArray = [0, 1, 11, 2, 60, 3, 42, 4, 98, 5, 6];
// numArray.sort();
// console.log(numArray);

// const numArrays1 = [0, 2, 8, 22, 55, 62, 23, 19, 92,]; 
// numArrays1.sort()
// console.log(numArrays1);

// const ar = [1,88,55,66,77,11,22,33,66,44,22,99,];
// ar.sort();
// console.log(ar)

// const r = [ 11,25,65,85,75,91,15,34,65,18,95,64,38,26,46]
// r.sort();
// console.log(r)

// const classDays = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Frinday",
//     "Saturday",
// ];

// console.log(classDays)
// want to find class days
// const classDays = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Saturday",
// ];

// console.log(classDays)
// // console.log(classDays.find(function(e) {e === "Sunday"}))

// let findValue = classDays.find(e => e === "Sunday");
// console.log(findValue);

// let findValue1 = classDays.find(e => e === "Monday")
// console.log(findValue1)
//  let findValue2 = classDays.find(e => e === "Thursday")
//  console.log(findValue2);

//  let findValue3 = classDays.find(e => e === " Sunday")



// console.log(array1[0])
// console.log(array1[3])
 
// //value overwrite

// // array1[0] = "SundayMonday";

// // console.log(array1[0])

// //how to find array element

// // console.log(array1.length);
//  //Adding element into array
// //  Creat another array
// const daysOfWeek = [];
// // console.log(daysOfWeek);

// daysOfWeek.push("1");
// daysOfWeek.push("Sunday");
// daysOfWeek.push("Tuesday");
// // console.log(daysOfWeek)
// // Can't use push method
// // daysOfWeek.push("Monday");

// // for including monday on 2nd place we use splice (num place, remove anything, adding thing)
// daysOfWeek.splice(1,0,"Monday");
// console.log(daysOfWeek);
 
// // Now we creat 2nd array and concat one another
// const daysOfWeek2 = [5,6,7, "Wednesday","Thursday", 1000]
// console.log(daysOfWeek2);

// console.log(daysOfWeek.concat(daysOfWeek2));

// // // Now we can add in one array
// const allDay = daysOfWeek.concat(daysOfWeek2)
// console.log(allDay)

//  //  want to drop last element so use pop
// // want to remove first element so use shift
// allDay.pop()
// allDay.shift()
// console.log(allDay)

// // want to delet center data so use splice (start from, how many you delet number count)
// allDay.splice(3,3)
// console.log(allDay)




