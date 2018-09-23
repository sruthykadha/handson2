function calculateAge(birthyear,currentyear){
    age=currentyear-birthyear;
    a=currentyear-birthyear;
    age1=a+1;
    console.log("you are either "+Math.abs(age)+" or " +Math.abs(age1));    
}
calculateAge(1999,2018);
calculateAge(2002,2018);
calculateAge(1975,2018);
let today=new Date();
console.log("today's date is "+today);
