let mySet = new Set()
for(let i = 0; i <= 10; i++){
  mySet.add(i)
}
console.log(mySet)
// 
mySet.delete(5)
console.log(mySet)
// 
mySet.clear()
console.log(mySet)

// 
const countries = ['Finland', 'Sweden', 'Norway', 'Niger', 'Benin'];
let countriesSet = new Set(countries)
console.log(countriesSet)

// 
let newCountriesArr = []
for(let country of countries){
  newCountriesArr.push([country, country.length])
}
console.log(newCountriesArr)
let countriesMap = new Map(newCountriesArr)
console.log(countriesMap)
// 

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

const c = [...a,...b]
const C = new Set(c);
console.log(C)
// 
let B = new Set(b)
const d = a.filter((el)=>B.has(el))
const D = new Set(d)
console.log(D)
// 
let e = a.filter((el)=>!B.has(el));
const E = new Set(e)
console.log(E)

// 

let languages =    [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 },
   
]
// 
console.log(languages.length)

// 
function mostSpokenLanguage( number){
  let countries = []
  let countryArr = []
  for(let lang of languages){
      var langValue = Object.values(lang)
      countries.push(...langValue)
      countries.sort((a,b)=> b - a)
      var sliced = countries.slice(0 ,number)
  }
  for(let i = 0; i < sliced.length; i++){
    var slicedObj = languages.filter((el) => Object.values(el).includes(sliced[i]) )
    countryArr.push(...slicedObj)
  }
  return countryArr;
}
console.log(mostSpokenLanguage(3))
