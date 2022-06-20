const num1= 10;
const num2= "10";

if(num1==num2){
    console.log("num1 and num2 are Equle")
}
else{
    console.log("num1 and num2 are not Equle") 
}
const num3= 10;
const num4= "10";

if(num3===num4){
    console.log("num3 and num4 are Equle")
}
else{
    console.log("num3 and num4 are not Equle") 
}

//what does double equle do and what triple Equle do?
//double Equle only compare the values not the type of the the value. That means it does not check if the value is int, string or double. but the triple equle check both of it that means it check the value and the type of the the value. Thats why if we want to compare twp Elements we hould use the triple equle.