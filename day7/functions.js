import { countries } from "../day5/countries"
function fullName(){
  let firstName = 'john'
  let lastName = "doe"
  return `${firstName} ${lastName}`
}
console.log(fullName())
// 

function $fullName(firstName, lastName){

  return `${firstName} ${lastName}`
}
console.log($fullName(john, doe))
// 

function $fullName(firstName, lastName){
  return `${firstName} ${lastName}`
}
console.log($fullName('john', 'doe'))
// 
function addNum(firstNum, secNum){
  return firstNum + secNum
}
console.log(addNum(20, 70))
// 
function areaOfRectangle(length, width){
  let area = length * width
  return area
}
console.log(areaOfRectangle(10, 40))
// 

function periOfRectangle(length, width){
  let perimeter = 2*(length + width)
  return perimeter
}
console.log(periOfRectangle(20, 70))
// 

function volumeOfRectPrism(length, width, height){
  let   vol = length * width *height; 
  return vol
}
console.log(volumeOfRectPrism(30, 5, 10))
// 
const areaOfCircle =( r )=>{
  let area = Math.round(Math.PI*r*r);
  return area;
}
console.log(areaOfCircle(10));
// 
const circumOfCircle =( r )=>{
  let circumference = Math.round(2*Math.PI*r);
  return circumference;
}
console.log(circumOfCircle(30));
// 
const densityFunc =( mass, volume )=>{
  let density = mass/volume;
  console.log(density)
}
densityFunc(50, 23);
// 
function speedOfObj() {
  let distance = 2000;
  let time = 1200;
  let speed = distance / time;
  return speed;
}
console.log(speedOfObj());
// 
function weightOfObj(m, g = 9.8) {
  return (weight = m * g);
}
console.log(weightOfObj(50));
// 
const toFahrenheit = (celcius) => {
  let fahrenheit = celcius * (9 / 5) + 32;
  return fahrenheit;
};
console.log(toFahrenheit(100));
// 
const bmiCalc = (weight, height) => {
  let bmi = weight / (height * height);
  return bmi;
};
let bmi = bmiCalc(80, 1.83);
console.log(bmi);

if (bmi < 18.5) {
  console.log("you are underweight");
} else if (bmi >= 30) {
    console.log("you are obessed");
} else if (bmi >= 25) {
  console.log("you are over weight");
} else if(bmi >= 18.5) {
  console.log("you have normal weight")
}

function checkSeason(month){
  
  if( month ==="january" ||month ==="february" ||month==="december"){
    console.log("winter")
  }
  else if( month ==="september" || month ==="october" || month ==="november"){
    console.log("autumn")
  }
  
  else if( month ==="june"|| month==="july" || month==="august"){
    console.log("summer")
  }
  
  else if(month ==="march"|| month ==="april"|| month ==="may"){
    console.log("spring")
  }
  else{
    console.log("please pick a month")
  }
  
  return month
}
let month = "november"
let pickedMonth = month.toLowerCase().trim()
checkSeason(pickedMonth)

// 
const findMax =(...arg)=>{
  for(let i = 0; i< arg.length; i++){

    if(arg[2]>arg[i]){
      console.log(arg[i])
    }else if(arg[1]>arg[i]){
      console.log(arg[i])
    }else if(arg[0]>arg[i]){
      console.log(arg[i])
    }else{
      return arg[i]
    }
  }
    
}
console.log(findMax(10, 7, 5));
//  
function solveLinEquation(a, b, c, x, y) {
    return a * x + b * y + c;
}
// Example usage:
const a = 2;
const b = 3;
const c = -6;
const x = 4;
const y = 1;

const result = solveLinEquation(a, b, c, x, y);
console.log(`Result of ${a}x + ${b}y + ${c} = 0 when x=${x} and y=${y} is ${result}`);
// 
const printArray =(arr)=>{
  if(arr.length == 0){
    console.log("nothing to iterate")
  }else{ 
    for(let j = 0; j < arr.length; j++){ 
      var list = arr[j]
      console.log(list);
    }

  }
}
let fruitArr = ["apple", "pineapple", "orange", "avocado"]
printArray(fruitArr)
// 
function showDateTime(){
  var date = new Date();
  var month = date.getMonth()
  var day = date.getDate()
  var year= date.getFullYear()
  var hour = date.getHours()
  var minute = date.getMinutes()

  var myTime = `${day}/${month}/${year} ${hour}:${minute}`
  return myTime
}
console.log(showDateTime())
// 
function swapValues(x, y){
  const z = x;
  x = y;
  y = z;
  return {x,y}
}
let X = 20;
let Y = 30;
console.log(swapValues(X,Y))
// 
const reverseArray=(arr)=>{
  var newArr = []
  for(let i = arr.length-1; i >= 0; i--){
    newArr.push(arr[i])
  }
  console.log(newArr)

}
let revArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverseArray(revArr)
// 
const capitalizeArray=(arr)=>{
  var newArr = []
  for(let i = 0; i < arr.length; i++){
    let cap = arr[i].toUpperCase()
    newArr.push(cap)
  }
  console.log(newArr)

}
let smallTxt = ['javascript', 'is', 'fun', 'sometimes'];
capitalizeArray(smallTxt)

// 

function addItem(...arg){
  let sum = 0
  let totalArr = []
  for(let i = 0; i < arg.length; i++){
    sum += arg[i]
  }
  totalArr.push(sum);
  return totalArr

}
console.log(addItem(1,2,4,5,90))

// 
function removeItem(...arg){
  let listArr = []
  for(let i = 0; i < arg.length; i++){
    let listItem = arg[i]
    listArr.push(listItem)
  }
  listArr.pop()
  return listArr
}
console.log(removeItem(1,2,4,5,90))

// 

const sumOfNumbers =(...arg)=>{
  let sumUp = 0;
  for(let i = 0; i < arg.length; i++){
    sumUp += arg[i]
  }
  return sumUp;

}
console.log(sumOfNumbers(20,30,15,17,8,3,5,23))

// 

const sumOfOdds =(...arg)=>{
  let totalOdd = 0;
  for(let i = 0; i < arg.length; i+=2){
    totalOdd += arg[i]
  }
  return totalOdd;
}
console.log(sumOfOdds(1,2,3,4,5,6,7,8,9,10))
// 
const sumOfEven =(...arg)=>{
  let totalEven = 0;
  for(let i = 1; i < arg.length; i+=2){
    totalEven += arg[i]
  }
  return totalEven;
}
console.log(sumOfEven(1,2,3,4,5,6,7,8,9,10))
// 
const evensAndOdds = (num) =>{
  let oddArr = []
  let evenArr = []
  for(let i = 0; i <= num; i+=2){
    evenArr.push(i)
  }
  let evenLength = evenArr.length
  console.log(`The number of evens are ${evenLength}`)

  for(let i = 1; i <= num; i+=2){
    oddArr.push(i)
  }
  let oddLength = oddArr.length
  console.log(`The number of odds are ${oddLength}`)
}
evensAndOdds(100)
// 
const sumNumbers =(...arg)=>{
  let sumUp = 0;
  for(let i = 0; i < arg.length; i++){
    sumUp += arg[i]
  }
  return sumUp;

}
console.log(sumNumbers(20,30,15,17,8,3,5,23))
// 
const randomUserIp =()=>{
 return `IP: ${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`
}
console.log(randomUserIp())

// 
"XX:XX:XX:XX:XX:XX".replace(/X/g, function(){
  return "0123456789ABCDEF".charAt(Math.floor(Math.random()*16))
});
// 
function randomHexaNumberGenerator(){
  let hexResult = " ";
  var char = "abcdefghijklmnopqrstuvwxyz012345678&@$%#_";

  for(let i = 0; i < 6; i++){
    hexResult+=char.charAt(Math.floor(Math.random() * char.length))
  }
  return hexResult.trim()
}
console.log(randomHexaNumberGenerator())

// 
function userIdGenerator(){
  let result = " ";
  var char = "abcdefghijklmnopqrstuvwxyz012345678&@$%#_";

  for(let i = 0; i < 7; i++){
    result+=char.charAt(Math.floor(Math.random() * char.length))
  }
  return result.trim()
}
console.log(userIdGenerator())
// 

function generateIdByUser(){
  let userIdLength = Number(prompt("how many characters do you want for your ID: "));
  let userIdCount = Number(prompt("how many ID do you want: "));

  if(userIdCount === 0 || userIdLength === 0){
    console.log('input a valid number')
    return;
  }
  for(let i = 0; i < userIdCount; i++){
    console.log(userIdGenerator(userIdLength))
  }
}
function userIdGenerator(userIdLength){
  let result = " ";
  var char = "abcdefghijklmnopqrstuvwxyz012345678&@$%#_";

  for(let i = 0; i < userIdLength; i++){
    result+=char.charAt(Math.floor(Math.random() * char.length))
  }
  return result.trim()
}
generateIdByUser()
// 

function rgbColorGenerator(){
  return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}
console.log(rgbColorGenerator())
// 

var hexChars = "0123456789abcdef"
const arrayOfHexColors = () =>{
  var color = ""
  let hexArr = []
  for(let i = 0; i < 6; i++){
    color += hexChars.charAt(Math.floor(Math.random()*hexChars.length))
  }
  hexArr.push(`#${color}`)
  return hexArr
}
console.log(arrayOfHexColors())
// 
function arrayOfRgbColors(hexCount){
  var rgbArray = [];
  for(let i = 0; i < hexCount; i++){
    var colorValues = myColorFunc()
    rgbArray.push(colorValues)
  }
  return rgbArray;
}
function myColorFunc(){
  return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}
console.log(arrayOfRgbColors(3))
// 
function convertHexaToRgb(hex) {
    // Remove the "#" character if present
    hex = hex.replace(/^#/, '');

    // Parse the hex value into RGB components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Return the RGB color as a string
    return `rgb(${r}, ${g}, ${b})`;
}

// Example usage:
const hexColor = "#336699";
const rgbColor = convertHexaToRgb(hexColor);
console.log(`Hex color ${hexColor} is equivalent to RGB color ${rgbColor}`);

// 

function convertRgbToHexa(r, g, b) {
    // Ensure that the input values are within the valid range (0-255)
    r = clampValue(r, 0, 255);
    g = clampValue(g, 0, 255);
    b = clampValue(b, 0, 255);

    // Convert the RGB values to hexadecimal
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    // Combine the hexadecimal values to form the final hex color
    const hexColor = `#${hexR}${hexG}${hexB}`;

    return hexColor;
}

// Helper function to clamp a value within a specified range
function clampValue(value, min, max) {  
    return Math.min(Math.max(value, min), max);
}


// Example usage:
const rValue = 51;
const gValue = 102;
const bValue = 153;

const hexIColor = convertRgbToHexa(rValue, gValue, bValue);
console.log(`RGB color (${rValue}, ${gValue}, ${bValue}) is equivalent to hex color ${hexIColor}`);
// 

function generateColors(type, count){
  let colors=[];
  var col;
  for(let j = 0; j < count; j++){
    if(type === "hex"){
      col = generateHex();
    }else if(type === 'rgb'){
      col = generateRgb();
    }else{
      return "you can only pick hex and rgb"
    }
      colors.push(col)
  }
    console.log(colors)
}

function generateHex(){
  let chars = "0123456789ABCDEF";
  let color = ""
  for(let i = 0; i < 6; i++){
    color += chars.charAt(Math.floor(Math.random()*chars.length))
  }
  return `#${color}`
}

function generateRgb(){
  return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}

let selectType = "hex";
let selectAmount = 5;
generateColors(selectType, selectAmount)
// 
function factorial(n) {
  let result = 1;
  for(let i = 1; i <= n; i++){
    result *= i
  }
  return result
}
const num = 5;
const fact = factorial(num);
console.log(`!${num} is ${fact}`);
// 
function isEmpty(param){
  if(param === undefined){
    return 'empty'
  }
  return `not empty, value: ${param}`;
}
console.log(isEmpty("sugar"));
// 
function sumFunc(...arg){
  let total = 0;
  for(let i = 0; i < arg.length; i++){
    total+=arg[i];
  }
    return total;
}
console.log(sumFunc(1,2))
// 
function sumOfArrayItems(arg){
  let total = 0;
  let totalArr = []
  for(let i = 0; i < arg.length; i++){
    if(arg[i] == "" || isNaN(arg[i]) ){
      return 'please add a valid input'
    }
    total+=arg[i];
  }
  totalArr.push(total)
  return totalArr;
}
console.log(sumOfArrayItems([1,2,3,4,5,19]))
// 

function average(arg){
  let total = 0;
  let aveArr = []
  for(let i = 0; i < arg.length; i++){
    if(arg[i] == "" || isNaN(arg[i]) ){
      return 'please add a valid input'
    }
    total+=arg[i];
    var ave = Math.round(total / arg.length)
  }
  aveArr.push(ave)
  return aveArr;
}
console.log(average([1,2,3,4,5,19]))
// 
function modifyArray(arr) {
  if (arr.length < 5) {
    return 'item not found';
  }
  arr[4] = arr[4].toUpperCase(); 
  return arr;
}
const myArray = ['Avocado','Tomato', 'Potato','Mango','Lemon','Carrot', "agbalumo"];
console.log(modifyArray(myArray));
// 

function isPrime(num){
  if(num < 2 ){
    return false;
  }
  for(var i = 2 ; i <= Math.sqrt(num); i++ ){
      if(num % i === 0){
        return "not a prime number"
      }
  }
  return 'its a prime number'
}
let checkPrime = 37;
console.log(isPrime(checkPrime));

// 
function is_Unique(arr){
    let checker = new Set(arr)
    let checkerArr = [...checker]
    if(checkerArr.length !== arr.length){
      return 'the array is not unique'
    }
    return 'your array is unique'
}
// let uniqueArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4,1]
// let uniqueArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const uniqueArr = ['Avocado','Tomato', 'Potato','Mango','Lemon','Carrot', "agbalumo", "Carrot"];

console.log(is_Unique(uniqueArr))
// 
function checkData(arr){
  if(arr.length === 0){
    return "there is no data at all"
  }
  const initType = typeof arr[0]

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i]!== initType){
      return "different data types detected"
    }    
  }
  return "matching data type";
}
// let uniqueDataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4,1]
// let uniqueDataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let uniqueDataArr = ['Avocado',5 , 'Potato', 1,'Lemon',true, "agbalumo", "Carrot"];
// let uniqueDataArr = [];

console.log(checkData(uniqueDataArr))
// 

function isValidVariable(variable){
  let specialChar = /[`!@#%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/
  if(specialChar.test(variable)){
    return 'invalid variable Name'
  }
  return 'valid variable Name'
}
let myVariable = "myVariable_"
console.log(isValidVariable(myVariable));
// 
function generateUniqueRandomNumbers() {
    const uniqueNumbers = new Set();

    while (uniqueNumbers.size < 7) {
        const randomNumber = Math.floor(Math.random() * 10);
        uniqueNumbers.add(randomNumber);
    }

    return Array.from(uniqueNumbers);
}

const randomNumbers = generateUniqueRandomNumbers();
console.log(randomNumbers);
// 
function reverseCountries(countriesArr){
  let countriesRev = []
  for(let i = countriesArr.length-1; i > 0; i--){
    countriesRev.push(countriesArr[i])
  }
  return countriesRev
}
console.log(reverseCountries(countries))