const student=[
    {id:1, Name:"Elon Musk"},
    {id:30, Name:"Mark Jakariar"},
    {id:5, Name:"Jhanker mahabub"},
    {id:10, Name:"Osama Bin laden"}
]

const sName= student.map(element=>element.Name);
const evenId= student.filter(element=> element.id%2==0)
console.log(sName);
console.log(evenId);