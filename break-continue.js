// what is break?
// break is a command for "for loop" for purticular command to follow and it the command is true and the command instruct to break th loop it will imeditely break the loop without completing the fotal loop. There is a small example.
console.log("Example of Break command:")
const ages =[5,6,7,8,13,15,18,19,24, 4]
for (let i = 0; i< ages.length; i++) {
    const finalAge = ages[i];
    if(ages[i]>17){
        break;
    }
    console.log(finalAge);
    }
//here we can see that the loop breaks imeditely ehanever it finds the comand is true. it dont even check for the 2nd values. It just stops.

//What is contines.
//Is simple words it will match or check every value of an element and then whenever it finds the condition true it will ignore thar valur and will go for the next value. Here is an example:

console.log("Example of Continue command:")
const ages2 =[5,6,7,8,13,15,18,19,24, 4]
for (let i = 0; i< ages2.length; i++) {
    const finalAge = ages2[i];
    if(ages2[i]>17){
        continue;
    }
    console.log(finalAge);
    }