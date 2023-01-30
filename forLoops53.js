const myWork = [];

for (let i = 1; i < 11; i++) {
    let status = 1 % 2 ? true : false;
    let temporary = {
        name: `Lesson ${i}`,
        status: status
    }
    myWork.push(temporary)
}

console.log(myWork);

// const myWork1 = [];

// for (let i = 0; i < 11; i++) {
//     let status = 1 % 2 ? true : false;
//     let temporary = {
//     name: `Lesson ${1}`,
//     status : status
//     }
//     myWork.push(temporary) 
// }

// console.log(myWork1);