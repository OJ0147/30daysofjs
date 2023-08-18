import {countries, $countries} from "./countries.js" 
import { $webTechs } from "./web_techs.js";
// 1
var arr = [];
console.log(arr)

// 
var newArr = new Array(6).fill("javaScript")
console.log(newArr);

// 2
const webTechs = ["HTML", "CSS", "JavaScript", "ReactJS", "MongoDB", "Angular", "vue"]
// 3
var webTechsLength = webTechs.length;
// 4
var firstItem = webTechs[0];
//mid Value
var midValue = Math.floor(webTechsLength/2)
var middleItem = webTechs[midValue]

var lastItem = webTechs[webTechsLength-1]

console.log("length: "+ webTechsLength + ", first item: "+ firstItem + ", middle item: "+ middleItem + ", last item: "+ lastItem )

//5
var mixedDataTypes = [50, "pounds", {name: "john",age: 34}, ["jsx","html", "xml","json"], true, null]
console.log(mixedDataTypes.length)

// 6
var itCompanies = ["facebook", "google","microsoft","IBM", "oracle", "Apple", "Amazon"]
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies` );

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length)
// 9
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length-1]);
var midVal = Math.floor(itCompanies.length/2);
console.log(itCompanies[midVal]);
// 10
console.log(itCompanies.toString())
// 11
for (var i = 0; i < itCompanies.length; i++ ){
  console.log(itCompanies[i].toUpperCase())
}
// 12
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies` );

// 13
var pickedCompany = "facebook"

if(itCompanies.includes(pickedCompany)){
  console.log(`${pickedCompany} found`)
}else{
  console.log('company is not found')
}
// 14
var reg =/o.*o/
for(var i = 0; i<itCompanies.length; i++){
  if(itCompanies[i].match(reg)){
    console.log(itCompanies[i])
  }
}
// 15
var sortedArr = itCompanies.sort();
console.log(sortedArr);
// 16
var rev = itCompanies.reverse()
console.log(rev);
// 17
var itCompany = ["facebook", "google","microsoft","IBM", "oracle", "Apple", "Amazon"]

console.log(itCompany.slice(0, 3))
// 18
console.log(itCompany.slice(-3))
// 19
console.log(itCompany.slice(3, -3))
// 20
console.log(itCompany.shift())
// 21

console.log(itCompany.slice(3, -3))
// 22
console.log(itCompany.pop())
// 23
console.log(itCompany.splice());
// exeercise 2
console.log(countries);
console.log($webTechs)

// 2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
var words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
console.log(words)
console.log(words.split(" "))
console.log(words.length);
// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if(shoppingCart[0] !== "Meat"){
  shoppingCart.unshift('Meat');
  console.log(shoppingCart);
}else{
  console.log(shoppingCart)
}
//
if(shoppingCart[shoppingCart.length-1] !== "Sugar"){
  shoppingCart.push("Sugar");
  console.log(shoppingCart)
}else{
  console.log(shoppingCart)
}
//
const $shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
var allergy = true;
if (allergy !== false){
  $shoppingCart.pop();
  console.log($shoppingCart)
}else{
  console.log($shoppingCart)
}

// 4
if(countries.includes("Ethopia")){
  console.log("ETHOPIA")
}else{
  countries.push("Ethopia")
  console.log(countries)
}
if ($webTechs.includes("SASS")){
  console.log("sass is a css preprocessor")
}else{
  $webTechs.push("SASS")
  console.log($webTechs)
}
// 5
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

 var fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// excercise 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort()
console.log(ages)
var maxAge = Math.max(...ages);
var minAge = Math.min(...ages)
console.log(`max age ${maxAge}, min age: ${minAge}`)

var midean = (ages.length) / 2;
console.log(ages[midean])
// 

var total = 0
for(var i = 0; i < ages.length; i++){
  total += ages[i];
} 
console.log(total)
var ave = total/ages.length;
console.log(ave)

// 
const range = maxAge - minAge;
console.log(range)
// 
if(minAge >= ave){
  console.log(" min age is greater than average")
}else {
  console.log('min age is less than average')
}
if(maxAge >= ave){
  console.log('max age is larger than average')
}else{
  console.log('max age is lesser than average')
}
// 
var newCountryList = countries.slice(0, 10)
console.log(newCountryList)
// 
var midCountry = Math.floor(countries.length / 2);
console.log(countries[midCountry]);

// 

if($countries.length % 2 === 0){
  let arrSize = $countries.length/2;
  let $newArr = [];
  for (let i = 0; i < $countries.length; i += arrSize) {
    $newArr.push($countries.slice(i, i + arrSize));
  }
  console.log($newArr); 
}else{
  $countries.unshift("Cameroun");
  let arrSize = $countries.length/2;
  let $newArr = [];
  for (let i = 0; i < $countries.length; i += arrSize) {
    $newArr.push($countries.slice(i, i + arrSize));
  }
  console.log($newArr); 

}