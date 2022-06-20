const num=[0,1,2,3,4,5,6,7,8,9]
const slice= num.slice(1, 5);
console.log(slice);

const num1=[1,2,3,4,5,6,7,8,9]
const slice1= num1.splice(2, 5);
console.log(slice1);
console.log(num1);

const num3=[1,2,3,4,5,6]
const join= num3.join(")Jubayer the Programming Hero ")
console.log(join);

//Slice: slice means it will take some infos from an arrey by slicing it and will make a new one. It wont affect the old or the sorce arrey. the syntex of an slice is. 
//num.slice(2,5) which means in the first bracket you have to incert the index of the arrays from the starting point to the end point which you want to slice suppose you want to slice an array of 0,1,2,3,4,5,6,7,8,9 here are 10 elements of an arrey and you waht to slice from 2-6 all you have to do is just write the starting index number and the ending index number of the arrey you want to slice. like that num.slice(2, 6)

//what is Splice?
//It is same is slice but has some difference. like slice will cut some part from arrey to create a new one but the main arrey will remain same. but splice will make an new arrey by removing parts from the source arrey. The syntex of splice is num.splice(2, 4). Here you have to mention the index number of the arrey element you want to remove and the number of elements you want to remove just like that. num.splice(2"the index number", 4"the amount of element you want to remove.)
