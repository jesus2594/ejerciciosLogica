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





