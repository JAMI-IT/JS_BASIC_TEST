const obj={
    "name":"ali",
    "age":10,
    "email":"abc@gmail.com",
    "address":"gujrat"  
    
    }

//     a)write a program which prints the name and wmail address
// b)write a program which increment the 10 in the age 
// c)write a program which prints the average of the marks=45,50,23,54,54,54 in a particular function in object obj 
// and then prints its result

let a=obj.name;
let b=obj.address;

console.log("Name  :"+a+"  Address  :"+b);

let ag=obj.age+10;
console.log("The incree in age=age+10  :"+ag);

let marks=[45,50,23,54,54,54];
let s=0;
for (let i = 0; i < marks.length; i++) {
    
    s=s+marks[i]
}
console.log(s);
