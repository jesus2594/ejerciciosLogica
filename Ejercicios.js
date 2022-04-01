/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

const contarCaracteres = (cadena = "") =>
(!cadena) 
    ? console.warn('No ingresaste ninguna cadena') 
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)

/* contarCaracteres()
contarCaracteres("Hola Mundo") */

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". con validacion
const recortarTexto = (cadena = "", longitud = undefined)=>
    (!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    : (longitud === undefined)
        ? console.warn("No ingresaste la longitud a recortar")
        : console.info(cadena.slice(0, longitud))

/* recortarTexto()
recortarTexto("Hola Mundo", 4)
recortarTexto("Hola Mundo") */


//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const cadenaArreglo = (cadena = "", separador = undefined)=>
    (!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    : (separador === undefined)
        ? console.warn("No ingresaste el caracter separador")
        : console.info(cadena.split(separador))
/* cadenaArreglo()
cadenaArreglo('hola que tal', ' ') */


//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 
const repetirTexto = (texto = "", veces = undefined) => {
    if(!texto) return console.warn("No ingresaste un texto")

    if(veces === undefined) return console.warn("No ingresaste el numero de veces a repetir")

    if(veces === 0) return console.error("El número de veces no puede ser 0")

    if(Math.sign(veces) === -1)return console.error("El número de veces no puede ser negativo")

    for(let i = 1; i<=veces; i++) console.info(`${texto}, ${i}`)
}

//repetirTexto('Hola Mundo', 3)

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirCadena = (cadena = "") =>
(!cadena) 
    ? console.warn('No ingresaste ninguna cadena') 
    : console.info(cadena.split("").reverse().join(""));

//invertirCadena("Hola Mundo");

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const textoEnCadena = (cadena = "", texto = "")=>{
    if(!cadena) return console.warn("No ingresaste el texto largo");

    if(!texto)return console.warn("No ingresaste la palabra a evaluar")

    let i = 0,
    contador = 0;

    while (i !==-1) {
        i = cadena.indexOf(texto, i);
        if(i!==-1){
            i++;
            contador++
        }
    }

    return console.info(`La palabra ${texto} se repite ${contador} veces` );
}
/* textoEnCadena()
textoEnCadena("", "mundo");
textoEnCadena("hola mundo adios mundo")
textoEnCadena("hola mundo adios mundo", "mundo") */

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra = "")=> {
    if(!palabra) return console.warn("No ingresaste una palabra o frase");

    palabra = palabra.toLowerCase()
    let alReves = palabra.split("").reverse().join("")

    return (palabra === alReves)
        ? console.info(`Si es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`)
        : console.info(`No es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`)
}
/* palindromo()
palindromo("hola Mundo")
palindromo("salas")
 */
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("yxz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarCaracteres = (texto = "", patron = "")=>
    (!texto)
      ? console.warn("No ingresaste un texto")
      : (!patron)
       ? console.warn("No ingresaste un patrón de caracteres")
       : console.info(texto.replace(new RegExp(patron, "ig"),""));
/* eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5")
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") */

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = () => console.info(Math.round((Math.random() * 100) + 500));
//aleatorio();
  
//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (numero = 0)=> {
    if(!numero) return console.warn("No ingresaste ningun numero");

    if(typeof numero !=="number")return console.error(`El valor "${numero}" ingresado, NO es un número`);
    
    numero = numero.toString()
    let alReves = numero.split("").reverse().join("")

    return ((numero) === alReves)
        ? console.info(`Si es capicua, numero original ${numero}, numero al revés ${alReves}`)
        : console.info(`No es capicua, numero original ${numero}, numero al revés ${alReves}`)
}
/* capicua()
capicua(1991) */
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número")

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`)

    if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo")

    let fact = 1

    for(let i = 1; i <= numero; i++){
        fact = fact * i
    }
    return console.info(`El factorial de ${numero} es ${fact}`);
}
//factorial(0)

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numeroPrimo = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número")

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`)

    if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo")

    if(numero === 1) return console.error("El numero no puede ser 1")

    if(numero === 0) return console.error("El numero no puede ser 0")

    let divisible = false

    for(let i = 2; i < numero; i++){
        if((numero % i) === 0) {
            divisible = true
            break
        }
    }

    return(divisible)
    ? console.log(`El numero ${numero}, NO es primo`)
    : console.log(`El numero ${numero}, sí es primo`)
}

/* numeroPrimo()
numeroPrimo("320")
numeroPrimo(true)
numeroPrimo(0)
numeroPrimo(1)
numeroPrimo(-13)
numeroPrimo(13) */


//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const numeroParImpar = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");

    if(typeof numero !== "number")return console.error(`El valor "${numero}" ingresado, NO es un número`);

    return((numero % 2) === 0)
        ? console.info(`El número ${numero} es Par`)
        : console.info(`El número ${numero} es Impar`)
}

/* numeroParImpar()
numeroParImpar("12")
numeroParImpar(-12)
numeroParImpar(19) */

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirGrados = (grados = undefined, unidad = undefined) => {
    if(grados === undefined) return console.warn("No ingresaste grados a convertir")

    if(typeof grados !== "number") return console.error(`El valor "${grados}" ingresando, NO es un número`)

    if(unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir")

    if(typeof unidad!== "string") return console.error(`El valor "${unidad}" ingresando, NO es una cadena de texto`)

    if(unidad.length !== 1 ||!/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido")

    if(unidad === "C"){
        return console.info(`${grados}°C = ${Math.round((grados * (9 / 5)) + 32)}°F`);
    }else if(unidad === "F") {
        return console.info(`${grados}°F =  ${Math.round(((grados - 32) * (5 / 9)))}°C`)
    }
}

/* convertirGrados(100, "C")
convertirGrados(32, "F")
convertirGrados(100, "F") */

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.


const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste el numero a convertir")

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`)

    if(base === undefined) return console.warn("No ingresaste la base a convertir")

    if(typeof base!== "number") return console.error(`El valor "${base}" ingresado, NO es un número`)

    if(base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    }else if(base === 10){
        return console.info(`${numero} base ${base} = ${(numero.toString(base))} base 2`)
    } else {
        return console.error("el tipo de base a convertir NO es válido")
    }
}

/* convertirBinarioDecimal()
convertirBinarioDecimal("2")
convertirBinarioDecimal(100)
convertirBinarioDecimal(100, "2")
convertirBinarioDecimal(100, 2)
convertirBinarioDecimal(1110010, 2)
convertirBinarioDecimal(4, 10)
convertirBinarioDecimal(114, 10) */

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if(monto === undefined) return console.warn("No ingresaste el monto")

    if(typeof monto !== "number") return console.error(`El valor "${monto}" ingresado, NO es un número`)

    if(monto === 0) return console.error("El monto no puede ser 0")

    if(Math.sign(monto) === -1) return console.error("El numero no puede ser negativo")

    if(typeof descuento!== "number") return console.error(`El valor "${descuento}" ingresado, NO es un número`)

    return console.info(`${monto} - ${descuento}% = ${monto - ((monto * descuento)/100)}`)

}

/* aplicarDescuento()
aplicarDescuento("200")
aplicarDescuento(0)
aplicarDescuento(-1000)
aplicarDescuento(1000, -20)
aplicarDescuento(1000)
aplicarDescuento(1000, 25) */ 

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020)


const calcularAnios =(fecha = undefined) => {
    if(fecha === undefined) return console.warn("No ingresaste la fecha")

    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida")

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS)

    return(Math.sign(aniosHumanos) === -1)
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
}

/* calcularAnios()
calcularAnios({})
calcularAnios(new Date())
calcularAnios(new Date(1984, 4, 23)) */

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contarLetras = (cadena = "") => {
    if(!cadena) return console.warn("No ingresaste una cadena de texto");

    if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

    let vocales = 0,
    consonantes = 0;

    cadena = cadena.toLocaleLowerCase();

    for(let letra of cadena){
        if(/[aeiouáéíóú]/.test(letra)) {
            vocales++;
        }

        if(/[bcdfghjklmnñpqstvwxyz]/.test(letra)){
            consonantes++;
        }
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

/* contarLetras()
contarLetras(3)
contarLetras("hola mundo") */

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre = (nombre = "") => {
    if(!nombre) return console.warn("No ingresaste un nombre")

    if(typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, NO es una cadena de texto`);

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);

    return (expReg)
        ? console.info(`"${nombre}", es un nombre válido`)
        : console.warn(`"${nombre}", NO es un nombre válido`);
}

/* validarNombre()
validarNombre(3)
validarNombre("Juan Lopez")
validarNombre("Juan Lopez, 19") */

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = "") => {
    if(!email) return console.warn("No ingresaste un email")

    if(typeof email !== "string") return console.error(`El valor "${email}" ingresado, NO es una cadena de texto`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg)
        ? console.info(`"${email}", es un email válido`)
        : console.warn(`"${email}", NO es un email válido`);
}

/* validarEmail()
validarEmail(34)
validarEmail("juan,lopez@gmail")
validarEmail("juanlopez@gmail.com") */

/* Fusión 19 y 20 */
const validarPatron = (cadena = "", patron = "") => {
    if(!cadena) return console.warn("No ingresaste un email")

    if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

    if(!patron === undefined) return console.warn("No ingresaste un patron a evaluar")

    if(!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado, NO es una expresion regular`);

    let expReg = patron.test(cadena);

    return (expReg)
        ? console.info(`"${cadena}", cumple con el patrón ingresado`)
        : console.warn(`"${cadena}", NO cumple con el patrón ingresado`);
}

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const devolverCuadrados = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if(arr.length === 0) return console.error("El arreglo esta vacío")

    for(let num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`)
    }

    const newArray = arr.map(el => el * el)

    return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArray}`);
}

/* devolverCuadrados()
devolverCuadrados(true)
devolverCuadrados({})
devolverCuadrados([])
devolverCuadrados([1, "3", 4, {}])
devolverCuadrados([1, 4, {}])
devolverCuadrados([1, 4, 5]) */

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayMinMax = (arr = undefined) => {

    if(arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if(arr.length === 0) return console.error("El arreglo esta vacío")

    for(let num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`)
    }

    return console.info(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)},\nValor menor: ${Math.min(...arr)}`);
}

arrayMinMax()
arrayMinMax(false)
arrayMinMax([])
arrayMinMax([2, 3, true])
arrayMinMax([1, 4, 5, 99, -60])


//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.


