import {users, $users, products} from './objectVariable'
const dog = {}
// 
console.log(dog)
// 
dog.name = 'roofus';
dog.legs = 4;
dog.age = 3
dog.color = 'golden';
dog.bark = function(){
  return `woof woof`
}
console.log(dog)
console.log(dog.bark())
// 
let objVal = Object.values(dog);
let otherObjVal = objVal.slice(0,objVal.length-1)
let methVal = objVal[4]
const valArray = []
valArray.push(...otherObjVal ,methVal())
console.log(valArray)
// 
dog.breed = 'retriever'
dog.getDogInfo = function(){
  return `${this.name} is a ${this.age} years old ${this.color}-${this.breed}`
}
console.log(dog)
console.log(dog.getDogInfo())
// 


let maxSkillsCount = 0;
let personWithMaxSkills = '';

for (const username in users) {
  const user = users[username];
  const skillsCount = user.skills.length;

  if (skillsCount > maxSkillsCount) {
    maxSkillsCount = skillsCount;
    personWithMaxSkills = username;
  }
}

console.log(`The person with the most skills is ${personWithMaxSkills} with ${maxSkillsCount} skills.`);

// 

let activeUserArr = []
let pointsArr = []
isActive = false;
for(const username in users){
  let user = users[username]
  const isActive = user.isLoggedIn
  if(isActive){
    activeUserArr.push(username)
    pointsArr.push(user.points)   
  }
}
  console.log(`we only have ${activeUserArr.length} users logged in; ${activeUserArr[0]} and ${activeUserArr[1]} with points of ${pointsArr[0]}, ${pointsArr[0]} respectively`)

// 
let mernStackDev = []
for (const username in users){
  let user = users[username]
  let skill = user.skills;
  if(skill.includes("Express") && skill.includes('MongoDB', 'React', 'Node') && skill.includes('React') && skill.includes('Node')){
    const mernDev = username
    mernStackDev.push(mernDev)
  }
}
console.log({mernStackDev})
// 
const usersCopy = Object.assign(users)
usersCopy['Silas'] = {}
usersCopy['Silas'].email ="silasojugo@gmail.com";
usersCopy['Silas'].skills = ["Html", "CSS", "Sass", "JavaScript", 'React',"Firebase"]
usersCopy['Silas'].age = 45;
usersCopy['Silas'].IsLoggedIn = false;
usersCopy['Silas'].points = 100;
console.log(usersCopy)
// 

for(const username in usersCopy){
  const user = usersCopy[username]
  var userKey = Object.keys(user)
}
console.log(userKey)
// 
for(const username in usersCopy){
  const user = usersCopy[username]
  var userVal = Object.values(user)
  console.log(userVal)
}
// 

const country = {}
country.Nigeria = {}
country.Nigeria.capital = "Abuja"
country.Nigeria.population = 236897000
country.Nigeria.language = 'english'
country.Ghana = {}
country.Ghana.capital = "Accra"
country.Ghana.population = 23689700
country.Ghana.language = 'english'
country.Benin = {}
country.Benin.capital = "Cotonou"
country.Benin.population = 2368970
country.Benin.language = 'french'
console.log(country)
// 
const personAccount = {
  firstName: 'Mansa',
  lastName: 'Musa',
  incomes: [],
  expenses: [],

  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },

  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },

  totalIncome() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },

  totalExpense() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },

  accountInfo() {
    return `Account Holder: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome()}\nTotal Expenses: $${this.totalExpense()}`;
  },

  accountBalance() {
    const balance = this.totalIncome() - this.totalExpense();
    return `Account Balance: $${balance}`;
  },
};

// Example usage:
personAccount.addIncome('Salary', 3000);
personAccount.addIncome('Freelance Work', 1000);
personAccount.addExpense('Rent', 1200);
personAccount.addExpense('Groceries', 300);

console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());

// 
function signUp(newUser) {
  // Check if the user with the same email already exists
  const existingUser = $users.find(user => user.email === newUser.email);

  if (existingUser) {
    console.log('User already has an account.');
  } else {
    // Generate a unique ID for the new user (you can use a library like 'uuid' for this)
    const uniqueId = generateUniqueId();
    // for time
    let date = new Date()
    let hour = date.getHours();
    let timeofDay;
    if(hour >=  16){
      timeofDay = "PM"
    }else{
      timeofDay = "AM"
    }
    // Set other properties for the new user, such as createdAt and isLoggedIn
    newUser._id = uniqueId;
    newUser.createdAt = `${new Date().toLocaleString().slice(0,-3)} ${timeofDay}`;
    newUser.isLoggedIn = false; // Assuming a new user is not logged in by default


    // Push the new user to the users collection
    users.push(newUser);

    console.log('User signed up successfully.');
  }
}

// Example usage:
const newUser = {
  username: 'biko',
  email: 'biko@biko.com',
  password: 'password123',
};

signUp(newUser);
console.log($users)
// Function to generate a unique ID (you can replace this with a better ID generation method)
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 7); 
}
// 
function isUserExist(email) {
  return users.some((user) => user.email === email);

}

// Function to sign up a user
function signUp(newUser) {
  const { email } = newUser;
  
  if (isUserExist(email)) {
    console.log('User already has an account.');
  } else {
    newUser._id = Math.random().toString(36).substr(2, 6); 
    newUser.createdAt = new Date().toLocaleString(); 
    newUser.isLoggedIn = false; 

    users.push(newUser);
    console.log('User signed up successfully.');
  }
}

// Function to sign in a user
function signIn(email, password) {
  const user = users.find((u) => u.email === email);
  if (user) {
    if (user.password === password) {
      user.isLoggedIn = true;
      return 'User signed in successfully.';
    } else {
      return 'Incorrect password.';

    }
  } else {
    return "User doesn't exist.";
  }
}

// Example usage:
const $newUser = {
  username: 'John',
  email: 'john@example.com',
  password: 'password123',
};

signUp($newUser); // Sign up a new user
console.log(signIn('asab@asab.com', '123456')) 

// 
function rateProduct(productId){
  const prod = products.find(product => product._id === productId)
  if(prod){ 
    newRating ={
      usderId : Math.random().toString(36).substring(2, 8),
      rate : 2.8
    }
    prod.ratings.push(newRating)
    return products
  }
  return 'product doesnt exist'

}
console.log(rateProduct('hedfcg'))
// 
function averageRating(productId){
  const prod = products.find(product => product._id === productId)
  if(prod){
    let prodRateArr = []
    let prodRate = prod.ratings
    for(const prd in prodRate){
      var pro = prodRate[prd] 
      prodRateArr.push(pro.rate)
    }
    let total = 0;
    let rateLength = prodRateArr.length;
    for(let i = 0; i < rateLength; i++){
      total += prodRateArr[i]
    }
    if(rateLength < 2){
      return 'no average rating for this product'
    }
    return Math.round(total/rateLength)
  }
}
let testProdId  = 'eedfcf'
let aveVal = averageRating(testProdId)
console.log(`${testProdId} : ${aveVal}`)
// 

function likeProduct(productId, isLiked){
  const prod = products.find(product => product._id === productId);

  if(prod){
    let myLikes = prod.likes
    console.log(myLikes)
      if(isLiked){
        var likeClicked = Math.random().toString(36).substr(2,6)
        myLikes.push(likeClicked)
        return myLikes
      }
      
      else {
        console.log(myLikes)
        myLikes.pop()
        console.log(myLikes)
        return myLikes;
      }

  }
}
// 