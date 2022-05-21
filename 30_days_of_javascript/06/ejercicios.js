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

