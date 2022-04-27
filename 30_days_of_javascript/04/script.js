/* 
Exercises: Level 1
Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.


let age = prompt('Enter your age:')
if(age >= 18){
    console.log('You are old enough to drive')
}else{
    age = 18 - age
    console.log(`You are left with ${age} years to drive`)
}
*/

/* 
Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.

let myAge = 27
let yourAge = prompt('Enter your age:')
if(myAge < yourAge){
    myAge = yourAge - myAge
    console.log(`You are ${myAge} years older than me`)
}else{
    myAge = myAge -yourAge
    console.log(`You are ${myAge} years younger than me`)
}
*/

/* 
If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.

  

let a = 4
let b = 3

if(a > b){
    console.log(`${a} is greater than ${b}`)
}else {
    console.log(`${a} is less than ${b}`)
}

let a = 4
let b = 3
a > b ? console.log(`${a} is greater than ${b}`)
      : console.log(`${a} is less than ${b}`)
*/


/* 
Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.

let num = prompt('Enter a number:')
if(num % 2 === 0){
    console.log(`${num} is an even number`)
}else{
    console.log(`${num} is an odd number`)
}
*/
/* Exercises: Level 2 */

/* 
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

let  grade = prompt('Enter your score')
grade = Number(grade)

switch(true){
    case grade >= 80 && grade <= 100:
        console.log('A')
    break;
    case grade >= 70 && grade <= 79:
        console.log('B')
    break;
    case grade >= 60 && grade <= 69:
        console.log('C')
    break;
    case grade >= 50 && grade <= 59:
        console.log('D')
    break;
    case grade >= 0 && grade <= 49:
        console.log('F')
    break;   
}
*/

/* 
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer

let input = prompt('Enter a month')


if(input == 'september' || input == 'october' || input == 'november'){
    console.log('the season is Autumn')
}else if (input == 'december' || input == 'january' || input == 'february'){
    console.log('the season is Winter')
}else if (input == 'march' || input == 'april' || input == 'may'){
    console.log('the season is Spring')
}else if (input == 'june' || input == 'july' || input == 'august'){
    console.log('the season is Summer')
}
*/

/* Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.

let day = prompt('What is the day today?')
let dayCap = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()
console.log(dayCap)

switch(true){
    case dayCap === 'Monday'  || dayCap === 'Thursday' || dayCap === 'Wednesday' || dayCap === 'Tuesday' || dayCap === 'Friday':
        console.log(`${dayCap} is a working day`)
        break;
    case dayCap === 'Saturday'  || dayCap === 'Sunday':
            console.log(`${dayCap} is a weekend`)   
        break; 
}

*/
Exercises: Level 3
Write a program which tells the number of days in a month

  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.



let month = prompt('Enter a month?')
let monthCap = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()


switch(true){
    case monthCap === 'January' || monthCap === 'March' || monthCap === 'May' || monthCap === 'July' || monthCap === 'August' || monthCap === 'October' || monthCap === 'December' :
        console.log(`${monthCap} has 31 days`)
    break;

    case monthCap === 'April' || monthCap === 'June' || monthCap === 'September' || monthCap === 'November' :
        console.log(`${monthCap} has 30 days`)
    break;

    case monthCap === 'February' :
        console.log(`${monthCap} has 28 days`)
    break;
    
}
*/



