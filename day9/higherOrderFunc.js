import { countries, names, products, numbers, countriesData } from "./hofVariables";
// forEach is only used with an array to iterate through it, it takes a callback function
// with element(iterated value), index and the array itself as a parameter. the index and array parameter 
// are not optional.

// map is used to iterate and Array, it modifies the array to give a new array, just like the forEach 
// it takes a callback with element, index and array as a parameter.


// filter iterates through an array and filter an element based on the conditions, it returns a new array.

// reduce takes a callback function with 3 parameters, namely the accumulator, current value and initial value and returns a single value. if an initial value is not stated the accumulator takes the first item in the array as its value.

// 

// a callback function is a function passed as a parameter in a higher order function

countries.forEach(function(country, index, array){
  console.log(country)
});
// 
names.forEach(element => console.log(element))
// 
numbers.forEach((number)=>{
  console.log(number)
})
// 
const countryUpperCase = countries.map((country) => country.toUpperCase())
console.log(countryUpperCase)
// 
const countryLength = countries.map((country) => country.length)
console.log(countryLength)
// 
const numberSqr = numbers.map((number) => number * number)
console.log(numberSqr)

// 

const nameToUpper = names.map((name) => name.toUpperCase())
console.log(nameToUpper)
// 

const filtered = countries.filter((country) => country.includes('land'))
console.log(filtered);
// 

const $filtered = countries.filter((country) => country.length  === 6)
console.log($filtered);
// 

const $filter = countries.filter((country) => country.length  >= 6)
console.log($filter);

// 
const firstCharE = countries.filter((country) => country.startsWith('E'))
console.log(firstCharE);
// 
const prod = products.filter((product) => typeof product.price === "number" )
console.log(prod)
// 

function getSringList(arr){
  const stringOnlyArr = arr.filter((element) => typeof element === "string");
  return stringOnlyArr
}
const test1 =[ 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const test2 = ['Asabeneh','Mathias', 4, 'Brook', 5, 9, true]
console.log( getSringList(test2))
// 
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum)
// 
const concated = countries.reduce((acc, cur) => acc + ", " + cur )
console.log(`${concated} are north european countries`)
// 

// some callback function checks if some of the elements of the array are similar in one aspect while
// every checks if all of the elements of the array are similar in one aspect.

const isGreater = names.some((name)=> names.length > 7)
console.log(isGreater)
// 
const containLand = countries.every((country) => country.includes('land'))
console.log(containLand)

// find searches the array for the first element that satisfies the condition while 
// findindex returns the index of the first element that satisfies the condition;

const firstSixLetters = countries.find((country) => country.length === 6)
console.log(firstSixLetters)
// 
const firstSixIndex = countries.findIndex((country) => country.length === 6)
console.log(firstSixIndex)
// 
const indexOfNorway = countries.findIndex((country) => country === 'Norway')
console.log(indexOfNorway)
// 
const indexOfRussia = countries.findIndex((country) => country === 'Russia')
console.log(indexOfRussia)
// 

const sumPrice = products.map((product)=> product.price).filter((prod)=> typeof prod ==='number').reduce((acc, cur) => acc + cur,0)
console.log(sumPrice);
// 
const priceArr = []
for(const prod in products){
  var product = products[prod];
  var price = product.price

  if(typeof price === 'number'){
    priceArr.push(price)
  }
}
  const sumWithRed = priceArr.reduce((acc, cur) => acc + cur, 0)
  console.log(sumWithRed)
//   

function categorizeCountries(category){
  let cat = countriesData.filter((country) => country.name.includes(category))
  return cat
}
let testCat1 = "land";
let testCat2 = "ia";
let testCat3 = "island";
let testCat4 = "stan";

console.log(categorizeCountries(testCat2))
// 
function catByAlpha(category){
  let cat = countriesData.filter((country) => country.name.startsWith(category))
  return cat
}
let countryLetter= "R";

let catArr = catByAlpha(countryLetter)
let numberOfCountry = catArr.length
console.log({ countryLetter, numberOfCountry } )
// 
function getFirstTenCountries(start, end){
  const arr = countriesData.map((country) => country.name )
  return arr.splice(start, end)
}
console.log(getFirstTenCountries(0, 10))
// 
function getLastTenCountries(){
  const arr = countriesData.map((country) => country.name )
  let start = arr.length - 10
  let end  = arr.length - 1
  return arr.splice(start, end)
}
console.log(getLastTenCountries())
// 

countriesData.sort((a,b) =>{
  if(a.name > b.name) return -1;
  if(a.name < b.name) return 1;
  return 0;
})
console.log(countriesData)
// 

const countriesCopy1 = [...countriesData]
const countriesCopy2 = [...countriesData]
const countriesCopy3 = [...countriesData]

countriesCopy1.sort((a,b) =>{
  if(a.capital < b.capital) return -1;
  if(a.capital > b.capital) return 1;
  return 0;
})
console.log(countriesCopy1)
// 
countriesCopy2.sort((a,b) =>{
  if(a.population < b.population) return -1;
  if(a.population > b.population) return 1;
  return 0;
})
console.log(countriesCopy2)
// 

