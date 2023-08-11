
var howOld = prompt("enter your age:")
var yearsLeft = 18 - howOld

if(howOld >= 18){
    console.log(`you are ${howOld}.you are old enough to drive`)
}else if(howOld < 18){
  if(yearsLeft <= 1){
    console.log(`you are ${howOld}.you will be allowed to drive after ${yearsLeft} year`)
  }
  else{
    console.log(`you are ${howOld}.you will be allowed to drive after ${yearsLeft} years`)
  }
}
//
let $myAge = prompt("Enter your age");
let $yourAge = prompt("Enter your friends age?");
const ageDiff = $myAge - $yourAge;
console.log(`i am ${ageDiff} years older than you`)

//
let a = 30;
let b = 12;

if(a > b){
    console.log(`${a} is greater than ${b}`)
}else{
    console.log(`${a} is less than ${b}`)
}

a > b? console.log(`${a} is greater than ${b}`):console.log(`${a} is less than ${b}`)

//

var checkNum = prompt("Enter number")

if(checkNum%2 === 0){
    console.log(`${checkNum} is a even number`)
}else{
    console.log(`${checkNum} is a odd number`)
}

//
var grade = prompt("enter your score:");

if(grade <  0){
  console.log(`${grade} is impossible to score`)
}else if(grade <= 49){
  console.log(`${grade} is a F `)
}else if(grade <= 59){
  console.log(`${grade} is a D`)
}else if(grade <= 79){
  console.log(`${grade} is a C`)
}else if(grade <= 89){
  console.log(`${grade} is a B`)
}else if (grade <= 100){
  console.log(`${grade} is an A, congratulations`)
}else if(grade > 100){
  console.log(`${grade} please input the right score, you can not score above 100`)
}else{
  console.log('is not a number')
}

// 

var monthCheck= prompt("enter a month:");
var monthSeason = monthCheck.toLowerCase()

if(monthSeason == "january" || monthSeason == "february"|| monthSeason == "december"){
  console.log("the season is winter")
}else if(monthSeason == "september"|| monthSeason == "october"|| monthSeason == "november"){
  console.log("the season is autumn")
}
else if(monthSeason == "june" || monthSeason == "july" || monthSeason == "august"){
  console.log("the season is summer")
}
else if(monthSeason == "march" || monthSeason == "april" || monthSeason == "may"){
  console.log("the season is spring")
}
else{
  console.log("that is not a month")
}

// 

var $whatDay = prompt("what is the day today? ");
var whatDay = $whatDay.toLowerCase()

if(whatDay == "monday" || whatDay == "tuesday" || whatDay =="wednesday" || whatDay =="thursday" ||whatDay == "friday" ){
  
  console.log(`${whatDay} is a working day`);
  
} else if(whatDay == "saturday" || whatDay == "sunday" ){

  console.log(`${whatDay} is a weekend`);
}else {

  console.log('is not a day of the week');
}

// excercise 3

var whatMonth= prompt("enter a month:");
var monthPicker = whatMonth.toLowerCase()

if(monthPicker == "january" || monthPicker == "march"|| monthPicker == "may" || monthPicker == "july" || monthPicker == "august" || monthPicker == "october" || monthPicker == "december"){
  console.log(monthPicker + " has 31 Days")
}
else if(monthPicker == "september"|| monthPicker == "april"|| monthPicker == "november" || monthPicker == "june"){
  console.log(monthPicker + " has 30 Days")
}
else if(monthPicker == "february"){
  console.log(monthPicker + " has 28 Days")
}
else{
  console.log("that is not a month")
}
//
var monthPicker = "september";
var boolString = prompt("is it a leap year? respond with (true or false):")
let isLeapYear = (/true/i).test(boolString);
console.log(isLeapYear);

if(monthPicker == "january" || monthPicker == "march"|| monthPicker == "may" || monthPicker == "july" || monthPicker == "august" || monthPicker == "october" || monthPicker == "december"){
  console.log(monthPicker + " has 31 Days")
}
else if(monthPicker == "september"|| monthPicker == "april"|| monthPicker == "november" || monthPicker == "june"){
  console.log(monthPicker + " has 30 Days")
}
else if(monthPicker == "february"){
  if(isLeapYear==true){
    console.log(monthPicker + " has 29 Days")

  }else{
    console.log(monthPicker + " has 28 Days")

  }
}
else{
  console.log("that is not a month")
}
//

var monthPick = prompt("enter any month:");
var monthPicked = monthPick.toLowerCase()

if(monthPicked == "january" || monthPicked == "march"|| monthPicked == "may" || monthPicked == "july" || monthPicked == "august" || monthPicked == "october" || monthPicked == "december"){
  console.log(monthPicked + " has 31 Days")
}
else if(monthPicked == "september"|| monthPicked == "april"|| monthPicked == "november" || monthPicked == "june"){
  console.log(monthPicked + " has 30 Days")
}
else if(monthPicked == "february"){
  var boolString = prompt("is it a leap year? respond with (true or false):")
  let isLeapYear = (/true/i).test(boolString);
  console.log(isLeapYear);

  if(isLeapYear==true){
    console.log(monthPicked + " has 29 Days")

  }else{
    console.log(monthPicked + " has 28 Days")

  }
}
else{
  console.log("that is not a month")
}

// 