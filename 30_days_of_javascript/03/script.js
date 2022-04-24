//Exercises: Level 1

//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
/*let firstName = 'Jesus'
let lastName = 'Marmol'
let country = 'Colombia'
let city = 'Barranquila'
let age = 27
let isMarried = false
let year = 2022
 console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year) */

//Check if type of '10' is equal to 10
//console.log( '10' === 10)

//Check if parseInt('9.8') is equal to 10
//console.log(parseInt('9.8') == 10)

/* Boolean value is either true or false.
Write three JavaScript statement which provide truthy value.
console.log(10 > 5)
console.log(0 === 0)
console.log(true)
Write three JavaScript statement which provide falsy value.
console.log(7 < 1)
console.log(1 !== 1)
console.log(false) */

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3  //true
4 >= 3 //true
4 < 3  //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false
/* console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4') */

//Find the length of python and jargon and make a falsy comparison statement.
//console.log('python'.length !== 'jargon'.length)

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12     //true
4 > 3 && 10 > 12     //false
4 > 3 || 10 < 12     //true
4 > 3 || 10 > 12     //true
!(4 > 3)             //false
!(4 < 3)             //true
!(false)             //true
!(4 > 3 && 10 < 12)  //false
!(4 > 3 && 10 > 12)  //true
!(4 === '4')        //true
//There is no 'on' in both dragon and python //true

/* console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3) )
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log('dragon'.includes('on') && 'python'.includes('on'))
 */

/* 
Use the Date object to do the following activities
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */
/* const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())
 */

//----------------------------------------------------------------------------------------------------------------------------------------------------
//Exercises: Level 2

/* 
Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100

let b = prompt('Enter base')
let h = prompt('Enter height')
let area = 0.5 * b * h
console.log(`The area of the triangle is ${area}`)
*/

/* 
Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12

let a = prompt('Enter side a')
let b = prompt('Enter side b')
let c = prompt('Enter side c')
let perimeter = Number(a) + Number(b)  + Number(c)
console.log(`The perimeter of the triangle is ${perimeter}`)
*/

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
/*let len = prompt('Enter length')
let wid = prompt('Enter width')
let area = len * wid
let perimeter = 2 * (Number(len) + Number(wid))
 console.log(`The area of the rectangle is ${area}`)
console.log(`The perimeter of the rectangle is ${perimeter}`) */

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
/* const pi = 3.14
let r = prompt('Enter radius')
let area = pi * r * r
let c = 2 * pi * r
console.log(`The area of a circle is ${area}`)
console.log(`The circumference of a circle is ${c}`) */

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
/* let x = 4
let y = 2 * (x) - 2
console.log(`The slope is ${y}`) */

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
/* function Slope(y, x){
    return ((y * 2) - (y * 1)) / ((x * 2)-(x * 1))
}
console.log(Slope(2, 2))
console.log(Slope(6, 10)) */

//Compare the slope of above two questions.

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
/* function f(x){
    let y = (x ** 2) + (6 * x) + 9
    return y
}
console.log(f(-3)) */

/* 
Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
let h = prompt('Enter hours')
let rph = prompt('Enter rate per hour')
let pay = h * rph
console.log(`The pay is ${pay}`)  */

//If the length of your name is greater than 7 say, your name is long else say your name is short.
/* const namelen = 'Jesus'
namelen.length > 7
    ? console.log(namelen)
    : console.log('Your name is short') */

/* 
Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh

let firstName2 = 'Jesus David'
let lastName2 = 'Marmol'
firstName2.length > lastName2.length
? console.log(`Your first name, ${firstName2} is longer than your family name, ${lastName2}`)
: console.log(`Your first name, ${firstName2} is smaller than your family name, ${lastName2}`)
*/

/* 
Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.

let myAge = 250
let yourAge = 25
let difAge = Number(myAge) - Number(yourAge)

console.log(`I am ${difAge} years older than you`)
*/

/* 
Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive
Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/
/* let birthYear = prompt('Enter birth year')
const now = new Date()
let yearCurrent = now.getFullYear()
let substract = yearCurrent - Number(birthYear)
let until18 = 18 - substract
substract >= 18
? console.log(`You are ${substract}. You are old enough to drive`) 
: console.log(`You are ${substract}. You will be allowed to drive after ${until18} year(s)`) */

/* 
Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.
60seconds 60minutes 24hours 365days

let years = prompt('Enter number of years you live:')
let secondsLive = (60 * 60 * 24 *365) * years
console.log(`You lived ${secondsLive} seconds.`)

*/

/* 
Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm

const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
*/

//----------------------------------------------------------------------------------
Exercises: Level 3
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

const now = new Date()
const year = now.getFullYear()
let month = now.getMonth() + 1
if (month < 10)  month = '0'+month;
//month = ("0" + month).slice(-2);
const date = now.getDate()
let hours = now.getHours()
hours = ("0" + hours).slice(-2);
let minutes = now.getMinutes()
minutes = ("0" + minutes).slice(-2);


console.log(`${year}-${month}-${date} ${hours}:${minutes}`)












