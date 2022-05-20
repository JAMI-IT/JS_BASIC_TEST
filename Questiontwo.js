
// Q02:-
// write a prgram which shows the grade
// gpa is greater then 3 then it prints A
// gpa is greater then 2.5 then it prints B
// gpa is greater then 2.0 then it prints c
// gpa is greater then 1.5 then it prints D
// gpa is less then 1 then it prints then it must adds the +0.5 in GPA then it should prints the result

const gpa=0.2;

if (gpa>3) {
    console.log("Grade  :A");
}

else if (gpa>2.5) {
    console.log("Geade  :B");
}

else if(gpa>2)
{
    console.log("Grade  :C");
}

else if (gpa>1.5) {
    console.log("Grade  :D");
}

else if (gpa<1) {
    console.log(gpa+0.5);    
}


///=========================
let student=[
    { Name:"SHAHJAHAN",GPA:3.6},
    { Name:"JAMI",GPA:2.3},
    { Name:"Humayu",GPA:3.8},
    { Name:"Hashim",GPA:3}, 
    { Name:"Ehtisham",GPA:1.6},
    { Name:"Ali",GPA:2.3},
    {Name:"JOhan",GPA:.4}
]

// Q02:-
// write a prgram which shows the grade
// gpa is greater then 3 then it prints A
// gpa is greater then 2.5 then it prints B
// gpa is greater then 2.0 then it prints c
// gpa is greater then 1.5 then it prints D
// gpa is less then 1 then it prints then it must adds the +0.5 in GPA then it should prints the result

student.forEach(Result);

var text="";
function Result(value)
{
    if(value.GPA>3){
        console.log("THE GPA Greater then the 3");
        console.log(value.Name+"....Grade A");
    }

    else if(value.GPA>2.5)
    {
        console.log("The GPA Greater then the 2.5");
        console.log(value.Name+"....Grade B");   
    }
    else if(value.GPA>2)
    {
        console.log("The GPA is Greater Then the 2");
        console.log(value.Name+"....Grade C");
    }

else if(value.GPA>1.5)
{
    console.log("THe GPA is Greater then the 1.5");
    console.log(value.Name+"....Grade D");
}

else if (value.GPA<1) {
   console.log("The GPA is Smaller Then the 1");
   console.log(value.GPA+0.5);
   console.log(value.Name+"....+0.5");

}

}


