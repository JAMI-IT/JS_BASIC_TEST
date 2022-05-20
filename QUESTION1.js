// Q01:-array=[10,12,23,45,23,33,23,32]

// a)write a program which prints the numbers which are less then 33


const array=[10,12,23,45,23,33,23,32];

let text="";

for(let x in array)
{

    if(array[x]<33)
    {
        text +=array[x]+" _ ";
    }
}
console.log(text);

// b)write a program which prints the array and each element of the array multiply with the number 5 

let text1="";
array.forEach(multi);
function multi(value)
{
    text1 +=value*5+" _ ";
}

console.log(text1);
