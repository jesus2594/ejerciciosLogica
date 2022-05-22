//Exercises:Day 6
//Exercises: Level 1

//Iterate 0 to 10 using for loop, do the same using while and do while loop
/* console.log("for loop 0 to 10")
for (let i = 0; i < 11; i++) {
    console.log(i)
}

console.log("while loop 0 to 10")
let c = 0
while (c <= 10) {
    console.log(c)
    c++
}

console.log("do while loop 0 to 10")
let n = 0
do {
    console.log(n)
    n++
} while (n <= 10); */

//Iterate 10 to 0 using for loop, do the same using while and do while loop
/* console.log("for loop 10 to 0")
for (let i = 10; i >=0; i--) {
    console.log(i)
}

console.log("while loop 10 to 0")
let c = 10
while (c >= 0) {
    console.log(c)
    c--
}

console.log("do while loop 10 to 0")
let n = 10
do {
    console.log(n)
    n--
} while (n >= 0); */

//Iterate 0 to n using for loop
/* let n = 20
for (let i = 0; i <=n; i++) {
    console.log(i)
} */

/* 
Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######

let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
   printing spaces
  for (let j = 0; j < n - i; j++) {
    string += "";
  }
   printing #
  for (let k = 0; k < i; k++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);
*/

/* 
Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100

for(let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

*/

/* 
Using loop print the following pattern
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000

console.log(`i   i^2 i^3 `)
for(let i = 0; i <= 10; i++) {
    
    console.log(`${i}\t${i * i}\t${i * i * i}`)
}
*/

//Use for loop to iterate from 0 to 100 and print only even numbers
/* for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0){
        console.log(i)
    }
} */


//Use for loop to iterate from 0 to 100 and print only odd numbers
/* for(let i = 0; i <= 100; i++) {
    if(i % 2 !== 0){
        console.log(i)
    }
} */

//Use for loop to iterate from 0 to 100 and print only prime numbers
/* for(let num = 2 ; num <= 100; num++){
    let isPrime = true;

for (let i=2; i <= num-1; i++){
    
    if(num%i === 0){
        isPrime = false;
        break
    }
}
if (isPrime) console.log(`${num} `);
} */

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
/* let sum = 0
for(let i = 0; i <= 100; i++){
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)
 */

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
/* let even = 0
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0){
        even += i
        
    }
}

let odds = 0
for(let j = 0; j <= 100; j++) {
    if(j % 2 !== 0){
        odds += j
        
    }
}

console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odds}.`) */

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//  [2550, 2500]
/* let arr = []
let even = 0
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0){
        even += i
        
    }
}


let odds = 0
for(let j = 0; j <= 100; j++) {
    if(j % 2 !== 0){
        odds += j
        
    }
}
arr.push(even)
arr.push(odds)
console.log(arr) */

//Develop a small script which generate array of 5 random numbers
/* let arr = []
let num
for(let i = 0; i < 5; i++) {
     num = Math.floor(Math.random () * 11)
     arr.push(num)
}
console.log(arr) */

//Develop a small script which generate array of 5 random numbers and the numbers must be unique
/*
let arr = []
let num
 while(arr.length < 5){
    num = Math.floor(Math.random () * 11)
    if(arr.includes(num)){
        continue
    }
    arr.push(num)

} 
for(let i = 0; arr.length < 5; i++) {
     num = Math.floor(Math.random () * 11)
     if(arr.includes(num)){
        continue
     }
        arr.push(num)     
}
console.log(arr)
*/

//Develop a small script which generate a six characters random id:
//5j2khz
/* function generateId() {
    let id = "";
    let randomCharts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 6; i++)
      id += randomCharts.charAt(Math.floor(Math.random() * randomCharts.length));
  
    return id;
  }
  
  console.log(generateId()); */

//Exercises: Level 2
/* Develop a small script which generate any number of characters random id:

    fe3jo1gl124g

    xkqci4utda1lmbelpkm03rba
 

    function generateId() {
        let id = "";
        let randomCharts = "abcdefghijklmnopqrstuvwxyz0123456789";
        const min = 8
        const max = 30
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
      
        for (let i = 0; i < num; i++)
          id += randomCharts.charAt(Math.floor(Math.random() * randomCharts.length));
      
        return id;
      }
      
      console.log(generateId());
      */
//Write a script which generates a random hexadecimal number. = '#ee33df'
/* const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
console.log(random_hex_color_code()) */

//Write a script which generates a random rgb color number. = rgb(240,180,80)
/* const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`;
console.log(rgb) */

//Using the above countries array, create the following new array.
//const arr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
/*let newArr = []
for (const i of arr) {
    newArr.push(i)
}
console.log(newArr) */

//Using the above countries array, create an array for countries length
//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
/* let lengthArr = []
for (const i of arr) {
    lengthArr.push(i.length)
}
console.log(lengthArr) */

//Use the countries array to create the following array of arrays:
/* 
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]

let lengthArr = []
for (const i of arr) {
    lengthArr.push([i, i.slice(0, 3), i.length])
}
console.log(lengthArr)
*/

/* 
In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land
['Finland','Ireland', 'Iceland']

const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let arr = []
for(let i = 0; i < countries.length; i++){
    if(countries[i].toLowerCase().includes('land'))
    arr.push(countries[i].charAt(0).toUpperCase() + countries[i].slice(1).toLowerCase())
}
if(arr.length > 0 )
  console.log(arr);
else
  console.log('All these are countries without land')
*/

/* 
In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia
['Albania', 'Bolivia','Ethiopia']
*/

/*
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let arr = ""
 for(let i = 0; i < countries.length; i++){
    if(countries[i].toLowerCase().endsWith('ia'))
    arr.push(countries[i].charAt(0).toUpperCase() + countries[i].slice(1).toLowerCase())
}
if(arr.length > 0 )
  console.log(arr);
else
  console.log('All these are countries without ia') */

//Using the above countries array, find the country containing the biggest number of characters.
//Ethiopia
/* const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let arr = ""
let max = 0

for(let i = 0; i < countries.length; i++){
    valor = countries[i].length
    if(max < valor ){
        max = valor

        if(countries[i].length === max){
            arr = countries[i].charAt(0).toUpperCase() + countries[i].slice(1).toLowerCase()
        }  
    }  
}
console.log(arr)
 */

//Using the above countries array, find the country containing only 5 characters.
//['Japan', 'Kenya']
/* const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let arr = []

for(let i = 0; i < countries.length; i++){   

    if(countries[i].length === 5)
         arr.push(countries[i].charAt(0).toUpperCase() + countries[i].slice(1).toLowerCase())
     
}
console.log(arr) */

//Find the longest word in the webTechs array
/* const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let arr = ""
let max = 0

for(let i = 0; i < webTechs.length; i++){
    valor = webTechs[i].length
    if(max < valor ){
        max = valor

        if(webTechs[i].length === max)
            arr = webTechs[i].charAt(0).toUpperCase() + webTechs[i].slice(1).toLowerCase() 
    }  
}
console.log(arr) */

//Use the webTechs array to create the following array of arrays:
//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
/* const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

let newArr = []
for (const i of webTechs) {
    newArr.push([i,  i.length])
}
console.log(newArr) */
//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
/* const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let arr = ""
for(let i = 0; i < mernStack.length; i++){
    
    arr += mernStack[i].charAt(0)
}
console.log(arr) */

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
/* const arr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (const i of arr) {
    console.log(i)
} */

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
/* const fruitArray = ['banana', 'orange', 'mango', 'lemon']
let reverse = []
for(let i = fruitArray.length -1; i > -1; i--){
    reverse.push(fruitArray[i])
}
console.log(reverse) */

/* Print all the elements of array as shown below.

HTML
CSS
JS
REACT
NODE
EXPRESS
MONGODB 

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

 for(let i = 0; i < fullStack.length; i++) 
    for(let j = 0; j < fullStack[i].length; j++)
    console.log(fullStack[i][j])
*/

