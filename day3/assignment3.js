//question 2
var firstName1 = "silas";
var lastName1 = 'oj';
var country1 = 'Nigeria';
var city = 'lagos';
var age1 = 30;
var isMarried = true;
var year = 2023;

console.log(typeof firstName1, 
    typeof lastName1,
    typeof age1, 
    typeof country1, 
    typeof city, 
    typeof isMarried,
    typeof year 
);
// question 2
var numString = "10";
var _num = 10;

console.log(typeof numString == typeof _num)

//question 3
var fltString = '9.8';
var $num = 10;
console.log(parseInt(fltString) === $num)

//question 4
//truthy statement
console.log(3 > 1);
console.log(3 === 3);
console.log(0 == "");

// falsy statement
console.log(4 < 3);
console.log(3 === "3");
console.log(1 == "");

//question 5
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

var text3 = 'python';
var text4 = 'jargon';
console.log(text3.length != text4.length)

// question 6
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

var text5 = 'dragon';
var text6 = 'python';
console.log(!(text5.includes("on")))
console.log(!(text6.includes("on")))

// question 7
var date = new Date();
var year = date.getFullYear();
console.log(year)

var month = date.getMonth();
console.log(month)

console.log(date)

var day = date.getDay();
console.log(day)

console.log(date.getHours())

console.log(date.getMinutes())

console.log(date.getTime())

//area and perimeter of a triangle
var base = prompt("enter base:", );
var height = prompt("enter height:", );
var area = (base)/2 * height;
console.log(`the area of the triangle is ${area}`)

var a = prompt("enter side A:", );
var b = prompt("enter side B:", );
var c = prompt("enter side C:", );
var perimeter = a + b + c;
console.log(`the perimeter of the triangle is ${perimeter}`)

// area and perimeter of a rectangle
var $width = prompt("enter width:", );
var $height = prompt("enter height:", );
var areaOfRectangle = $width * $height;
console.log(`the area of the rectangle is ${areaOfRectangle}`)

var perimOfRectangle = ($width + $height)*2;
console.log(`the perimeter of the rectangle is ${perimOfRectangle}`)

var radius = prompt("enter radius: ");
const pi = 3.14;
var areaOfCircle = pi * radius * radius;
var perimOfCircle = 2*(pi * radius)
console.log(`the area of the circle is ${areaOfCircle} and the perimeter is ${perimOfCircle}`)


// Equation: y = 2x - 2

// Slope (m) is the coefficient of x
const slope = 2;

// Y-intercept (b) is the constant term
const yIntercept = -2;

// To find the x-intercept, set y to 0 and solve for x
// 0 = 2x - 2
// 2x = 2
// x = 1
const xIntercept = 1;

console.log("Slope:", slope);
console.log("Y-intercept:", yIntercept);
console.log("X-intercept:", xIntercept);

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
const point1 = [2, 2];
const point2 = [6, 10]

const slope2 = (point2[1] - point1[1])/point2[0] - point1[0]
console.log('slope:', slope2 )

console.log(slope === slope2)

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

function calculateY(x) {
  return x ** 2 + 6 * x + 9;
}

// Test different x values
const xValues = [1, 2, -2, 4, 0, 3, 5, -5];


for (const x of xValues) {
  const y = calculateY(x);
  console.log(`For x = ${x}, y = ${y}`);
  
  if(y === 0) {
    console.log(`x = ${x} is where y is 0.`);
  }
}

//weekly earning calculator

var hoursWorked = prompt("how many hours did you work this week?: ")
var ratePerHour = prompt("what is your hourly rate?: ")

var weeklyEarning = hoursWorked * ratePerHour;

console.log(weeklyEarning)

var fName = prompt("enter your firstname:");
var lName = prompt("enter your lastname:");

if (fName.length > lName.length){
    console.log(`your firstname, ${fName} is longer than your family name, ${lName}`)
}else if(fName.length === lName.length){
       console.log(`your firstname, ${fName} is same length with your family name, ${lName}`) 
}else{
    console.log(`your firstname, ${fName} is shorter than your family name, ${lName}`)
}
//
let $myAge = 29;
let $yourAge = 15;
const ageDiff = $myAge - $yourAge;
console.log(`i am ${ageDiff} years older than you`)

//
var birthYear = prompt("what is your birth year:")
var presentYear = date.getFullYear()
console.log(presentYear)

var presentAge = presentYear - birthYear
console.log(presentAge)
var yearsLeft = 18 - presentAge
if(presentAge >= 18){
    console.log(`you are ${presentAge}.you are old enough to drive`)
}else if(presentAge < 18){
    console.log(`you are ${presentAge}.you will be allowed to drive after ${yearsLeft} years`)
}
//
var urAge = prompt('what is your age?');
var ageInSecs = urAge * 365 * 24 * 60 * 60
console.log(`your age in seconds is ${ageInSecs}`)

var $year = date.getFullYear()
var $month = date.getMonth()+1
var $day = date.getDate()
var $hour = date.getHours()
var $minute = date.getMinutes()

console.log(`${$year}-${$month}-${$day} ${$hour}:${$minute }`)

console.log(`${$day}-${$month}-${$year} ${$hour}:${$minute }`)

console.log(`${$day}/${$month}/${$year} ${$hour}:${$minute }`)

