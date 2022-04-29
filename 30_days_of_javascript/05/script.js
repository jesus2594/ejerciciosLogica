//Exercise: Level 1
/* 
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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
*/

//Declare an empty array
//const arr = []

//Declare an array with more than 5 number of elements
//const arr2 = [1,2,3,4,5]

//Find the length of your array
//console.log(arr2.length)

//Get the first item, the middle item and the last item of the array
/* console.log(arr2[0])
console.log(arr2[2])
let last = arr2.length
console.log(last) */

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
//const mixedDataTypes = [1, 'hola', ['low', 'high'], true, {}, [['b'], ['v']]]
//console.log(mixedDataTypes.length)

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//Print the array using console.log()
//console.log(itCompanies)
//Print the number of companies in the array
//console.log(itCompanies.length)
//Print the first company, middle and last company
//console.log(itCompanies[0])
//var middle = itCompanies[Math.floor(itCompanies.length / 2)];
//console.log(middle)
//let last = itCompanies.length - 1
//let lastCo = itCompanies[last]
//console.log(lastCo)
/* 
Print out each company
for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i])
} */

//Change each company name to uppercase one by one and print them out
/* for(let i = 0; i < itCompanies.length; i++){
  console.log(itCompanies[i].toUpperCase())
} */

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
//itCompanies.push( 'and ' + itCompanies.pop());
//console.log(`${itCompanies.join(', ')} are big IT companies`)

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
//let index = itCompanies.indexOf('AppleInc')
//index === -1 ? console.log('This company is not found'): console.log(itCompanies[index])

//Filter out companies which have more than one 'o' without the filter method

/* 
for(let i = 0; i < itCompanies.length; i++){
  arr = itCompanies[i]
  let pattern = /o/gi
  let n = arr.match(pattern)
  
  
  for(let j = 0; j < arr.length; j++ ){
    
    if(n != null && n.length > 1){
      console.log(arr)
    }
  }
  
} */

//Sort the array using sort() method
//console.log(itCompanies.sort())

//Reverse the array using reverse() method
//console.log(itCompanies.reverse())

//Slice out the first 3 companies from the array
/* console.log(itCompanies)
let sli3com = itCompanies.length - 3
let newArr = itCompanies.slice(sli3com)
console.log(newArr) */

//Slice out the last 3 companies from the array
/* console.log(itCompanies)
let newArr = itCompanies.slice(0, 3)
console.log(newArr) */

//Slice out the middle IT company or companies from the array
/* let middle = itCompanies[Math.floor((itCompanies.length - 1) / 2)];
let pos = itCompanies.indexOf(middle)
console.log(itCompanies.slice(pos, pos + 1)) */

//Remove the first IT company from the array
//console.log(itCompanies)
//console.log(itCompanies.shift())

//Remove the middle IT company or companies from the array
/* let middle = itCompanies[Math.floor((itCompanies.length - 1) / 2)];
let pos = itCompanies.indexOf(middle)
console.log(itCompanies.slice(pos, pos + 1))  */

//Remove the last IT company from the array
//console.log(itCompanies)
//console.log(itCompanies.pop())

//Remove all IT companies
//console.log(itCompanies.splice())

/* Exercise: Level 2 */

//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
 
/* First remove all the punctuations and change the string to array and count the number of words in the array 


let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let str = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")
let strSpli = str.split(' ')
console.log(strSpli)
console.log(strSpli.length)
*/

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']


/* add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes('Meat')){
  console.log(shoppingCart)
  shoppingCart.unshift('Meat')
  console.log(shoppingCart)

}else{
  console.log('it already added')
}
*/
//add Sugar at the end of you shopping cart if it has not been already added
/* if(!shoppingCart.includes('Sugar')){
  console.log(shoppingCart)
  shoppingCart.push('Sugar')
  console.log(shoppingCart)

}else{
  console.log('it already added')
} */

//remove 'Honey' if you are allergic to honey
/* let allergic = false
if(allergic){
  console.log(shoppingCart)
  shoppingCart.pop('Honey')
  console.log(shoppingCart)

}else{
  console.log('I am not allergic to honey')
  console.log(shoppingCart)

} */

//modify Tea to 'Green Tea'
/* let index =  shoppingCart.indexOf('Tea')
shoppingCart.splice(index, 1, 'Green Tea')
console.log(shoppingCart) */

//Concatenate the following two variables and store it in a fullStack variable.
/* 
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
*/










