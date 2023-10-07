// 
for(let i = 0; i < 11; i++){
    console.log(i)
}
// 
let num = 0;
while(num < 11){
  console.log(num);
  num++
}
// 
let $num = 0;
do{
    console.log($num)
    $num++;
}
while($num < 11)

// 
for(let i = 10; i >= 0; i--){
  console.log(i)
}
//

let Num = 10;
while(Num >= 0){
  console.log(Num);
  Num--
}
//
let $Num = 10;
do{
  console.log($Num)
  $Num--
}
while($Num >= 0)

let n =15;
for(let i = 0; i < n; i++){
    console.log(i)
}

for(let i = 1; i <= 7; i++){
    if(i === 1){
        console.log("#")
    }
    if(i === 2){
        console.log("##")
    }
    if(i === 3){
        console.log("###")
    }
    if(i === 4){
        console.log("####")
    }
    if(i === 5){
        console.log("#####")
    }
    if(i === 6){
        console.log("######")
    }
    if(i === 7){
        console.log("#######")
    }
    
}

// 
for(let i = 0; i <= 10; i++){
    if(i === 0){
      console.log(`${i} x ${i} = ${i*i}`)
    }
    if(i === 1){
      console.log(`${i} x ${i} = ${i*i}`)
    }
    if(i === 2){
      console.log(`${i} x ${i} = ${i*i}`)
    }
    if(i === 3){
      console.log(`${i} x ${i} = ${i*i}`)
    }
    if(i === 4){
      console.log(`${i} x ${i} = ${i*i}`)
    }
    if(i === 5){
      console.log(`${i} x ${i} = ${i*i}`)
    }
    if(i === 6){
      console.log(`${i} x ${i} = ${i*i}`)
    }
    if(i === 7){
      console.log(`${i} x ${i} = ${i*i}`)
    }
    if(i === 8){
      console.log(`${i} x ${i} = ${i*i}`)
    }
    if(i === 9){
      console.log(`${i} x ${i} = ${i*i}`)
    }
    if(i === 10){
      console.log(`${i} x ${i} = ${i*i}`)
    }
}

// 

for(let i = 0; i <= 10; i++){
    if(i === 0){
      console.log(`${i}  ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
    }
    if(i === 1){
      console.log(`${i}  ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
    }
    if(i === 2){
      console.log(`${i}  ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
    }
    if(i === 3){
      console.log(`${i}  ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
    }
    if(i === 4){
      console.log(`${i}  ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
    }
    if(i === 5){
      console.log(`${i}  ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
    }
    if(i === 6){
      console.log(`${i}  ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
    }
    if(i === 7){
      console.log(`${i}  ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
    }
    if(i === 8){
      console.log(`${i}  ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
    }
    if(i === 9){
      console.log(`${i}  ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
    }
    if(i === 10){
      console.log(`${i}  ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
    }
}
// 

for(let i = 0; i < 101; i+=2){
  console.log(i)
}
// 
for(let i = 1; i < 101; i+=2){
  console.log(i)
}
// 
let count = 0; 
for(let j = 2; j <= 100; j++){
  for(let i = 1; i <= j; i++){
    if(j%i==0)
    count++ 
  }
  if(count==2)
  console.log(j)
  count=0
}
let $total = 0;
for(let i = 1; i < 101; i++){
    $total += i
}
console.log($total);
// 
let totalEven = 0;
let totalOdd = 0;
for(let i = 2; i < 101; i+=2){
  totalEven+=i
}
  for(let j = 1; j < 101; j+=2){
    totalOdd+=j
  }
console.log(`The sum of all evens from 0 to 100 is ${totalEven}. And the sum of all odds from 0 to 100 is  ${totalOdd}`)

// 
let $totalEven = 0;
let $totalOdd = 0;
let totalArr = []
for(let i = 2; i < 101; i+=2){
  $totalEven+=i
}
for(let j = 1; j < 101; j+=2){
    $totalOdd+=j
}
totalArr.push($totalEven, $totalOdd)
console.log(totalArr)

var randArr = [];
while(randArr.length < 5){
  var rand = Math.floor(Math.random() * 6);
  randArr.push(rand);
   
}
console.log(randArr);
// 

var randArr = [];
while(randArr.length < 5){
  var rand = Math.floor(Math.random() * 6) + 1;
  // this code loops and pushes only values that are currently not presently in the array...
  // when the indexOf array method of array gives "-1" It means the value is not present in the array, now we are taking advantage of that to give collect only values not currently present
  if(randArr.indexOf(rand) === -1) {
    randArr.push(rand);
  }  
}
console.log(randArr);
// 
let result = " ";
var char = "abcdefghijklmnopqrstuvwxyz012345678&@$%"

const charLength = char.length;
for(let i = 0; i < 6; i++){
  result+=char.charAt(Math.floor(Math.random() * charLength))
}
console.log(result.trim())

// Exercise level2

let $result = " ";
let randomChars = Math.floor(Math.random()*charLength)+1
for(let i = 0; i < randomChars; i++){
  $result+=char.charAt(Math.floor(Math.random() * char.length))
}
console.log($result.trim())
// 
let hexResult = " ";
var char = "abcdefghijklmnopqrstuvwxyz012345678&@$%"

for(let i = 0; i < 7; i++){
  hexResult+=char.charAt(Math.floor(Math.random() * char.length))
}
console.log(hexResult.trim())

var randArr = [];
while(randArr.length < 3){
  var rand = Math.floor(Math.random() * 256);
  randArr.push(rand);
}
console.log(`rgb(${randArr})`)
// 
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

for(let i = 0; i < countries.length; i++){
  console.log(countries[i].toLocaleUpperCase())
};

for(let i = 0; i < countries.length; i++){
  console.log(countries[i].length)
};
// 
var countriesArr = []
for(let i = 0; i < countries.length; i++){
  countriesArr.push([countries[i], countries[i].length, countries[i].slice(0,3)])
};
console.log(countriesArr)
// 
var containsLand = []
for(let i = 0; i < countries.length; i++){
  if(countries[i].includes('land')){
    containsLand.push(countries[i])
  }else{
    console.log('does not contain land')
  }
};
console.log(containsLand)

// 
var containLand = []
for(let i = 0; i < countries.length; i++){
  if(countries[i].includes('land')){
    containLand.push(countries[i])
  }
};
console.log(containLand)

var containsIa = []
for(let i = 0; i < countries.length; i++){
  if(countries[i] > 10){
    containsIa.push(countries[i])
  }else{
    console.log('does not contain ia at the end')
  }
};
console.log(containsIa)
// 
let arrLength = []
for(let i = 0; i < countries.length; i++){
  arrLength.push(countries[i].length)
  var maxNum = Math.max(...arrLength)
  console.log(maxNum)
  if(countries[i].length >= 8){
    console.log(countries[i])
  }
};

// 
let newArry = []
for(let i = 0; i < countries.length; i++){
  if(countries[i].length <= 5){
    newArry.push(countries[i])
  }
};
console.log(newArry)
// 
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

var techArr= []
for(let i = 0; i < webTechs.length; i++){
  var textLength = webTechs[i].length
  techArr.push(textLength)
}
var longText = Math.max(...techArr)
for(let j = 0; j < webTechs.length; j++){
  if(webTechs[j].length === longText){
    console.log(webTechs[j])
  }
}
// 
var stackArr = []
for(let i = 0; i <webTechs.length; i++){
  stackArr.push([webTechs[i], webTechs[i].length])
}
console.log(stackArr)

// 
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

for(let i = 0; i < mernStack.length; i++){
  var firstLetter = mernStack[i].slice(0,1);
  console.log(firstLetter)
}

// 

const newTechArr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] ;
for(tech of newTechArr){
  console.log(tech)
}
// 
const fruits = ['banana', 'orange', 'mango', 'lemon'] ;
for (let i = fruits.length-1; i >= 0; i--){
  console.log(fruits[i])
}

// 
var newArr = countries.slice()
console.log(newArr)
// 
const countriesArr = [...countries]
var sortedArray = countriesArr.sort()
console.log(sortedArray)
// 
var sortedTechs = webTechs.sort();
console.log(sortedTechs)
// 
var sortedStack = mernStack.sort()
console.log(sortedStack)

