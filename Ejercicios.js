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

numeroParImpar()
numeroParImpar("12")
numeroParImpar(-12)
numeroParImpar(19)

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
