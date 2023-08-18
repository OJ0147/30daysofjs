// var challenge = "30 days of JavaScript";
// console.log(challenge);

// var textLength = challenge.length;
// console.log(textLength)

// console.log(challenge.toUpperCase());

// console.log(challenge.toLowerCase());

// console.log(challenge.substr(0,2))

// console.log(challenge.slice(3,textLength));

// if(challenge.includes("Script")){
//     console.log(" it contains Script")
// }else{
//     console.log("none found")
// }

// console.log(challenge.split(" "));

// var hotShots = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

// var hotShotsToArr = hotShots.split(", ")
// console.log(hotShotsToArr);

// console.log(challenge.replace("JavaScript", "Python"))

// console.log(challenge.charAt(15));

// console.log(challenge.charCodeAt("J"));

// console.log(challenge.indexOf('a'));

// console.log(challenge.lastIndexOf('a'));

// var sentence = 'You cannot end a sentence with because because because is a conjunction'

// console.log(sentence.indexOf("because"));

// console.log(sentence.lastIndexOf("because"))

// console.log(sentence.search("because"))

// var text = ' 30 days of JavaScript '

// let textTrimmed = text.trim();
// console.log(textTrimmed);

// console.log(text.length, textTrimmed.length)

// console.log(challenge.startsWith('30'))

// console.log(challenge.endsWith('JavaScript'))

// console.log(challenge.match(/a/gi))

// var firstSentence ='30 Days of'
// var secondSentence = ' JavaScript'

// var fullSentence = firstSentence.concat(secondSentence);
// console.log(fullSentence)

// console.log(challenge.repeat(2))


// //exercise 2


// var qoute = 'There is no exercise better for the heart than reaching down and lifting people up.'

 
//  console.log(`${qoute} 
// by John Holmes teaches us to help one another.`)

// var theresaQoute = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

// console.log(theresaQoute);

// var numbr = 10;
// var stringNum = "10"

// console.log(numbr === stringNum)
// console.log(numbr === +stringNum)

// var floatStr = "9.8";
// var num2 = 10;

// console.log(floatStr === num2);

// var floatStrToFloat = parseFloat(floatStr);
// var roundFloat = Math.ceil(floatStrToFloat)
// console.log(roundFloat === num2);


// var str1 = "jargon";
// var str2 = "python";

// console.log(str1.includes("on"))
// console.log(str2.includes("on"));

// var str3 ="I hope this course is not full of jargon."

// var indexOfJargon = str3.search("jargon")
// if(str3.includes("jargon")){
//     console.log(`jargon found at index of ${indexOfJargon}`);
// }else{
//     console.log("jargon not found")
// }

// var randomNumber = Math.random()*100
// var roundRandomNumber = Math.floor(randomNumber) +1

// console.log(roundRandomNumber);

// var rand = Math.random()*50
// var floorRand =Math.floor(rand)+50

// console.log(floorRand)


// var randomNum = Math.random()*255
// var roundRandomNum = Math.floor(randomNum)+1

// console.log(roundRandomNum)


// var txt = "JavaScript";
// var randomTxtNum = Math.random()*txt.length;
// var floorRandomTxtNum = Math.floor(randomTxtNum)
// console.log(txt[floorRandomTxtNum])

// console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")

// var sentence2 = 'You cannot end a sentence with because because because is a conjunction'

// var firstIndex = sentence2.indexOf("because")

// console.log(sentence2.substr(firstIndex,23 ))

// var loveQoute = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// var regex = /love/gi
// var ourMatch = loveQoute.match(regex)

// console.log(ourMatch);

// var arr = sentence2.match(/because/g)
// console.log(arr.length)

// const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'



// let reg = /[^\w\s]|_/g; 
// var result = sentence3.replace(reg,"");
// console.log(result);


// var resultToArray = result.split(/\s/)
// console.log(resultToArray)


        

// var sentence4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// var salaryReg = /\d+/g
// var amountArr = sentence4.match(salaryReg);
// console.log(amountArr)
// var totalSum = (+amountArr[0])*12 + +amountArr[1] + (+amountArr[2])*12;

// console.log(totalSum)

