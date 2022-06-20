const number = [3,4,5,6,8]
// const output =[]

// for(var i=0; i<number.length; i++){

//     const element = number[i]
//     const result =element *element;
//     output.push(result)

// }

// console.log(output);

const result= number.map(element=> element*element)
const evenNum= result.filter(element=> element % 2 ==0 );

console.log(result);
console.log(evenNum);