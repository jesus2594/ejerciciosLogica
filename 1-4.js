/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

const contarCaracteres = (cadena = "") =>
(!cadena) 
    ? console.warn('No ingresaste ninguna cadena') 
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)

//contarCaracteres()
//contarCaracteres("Hola Mundo")

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". con validacion
const recortarTexto = (cadena = "", longitud = undefined)=>
    (!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    : (longitud === undefined)
        ? console.warn("No ingresaste la longitud a recortar")
        : console.info(cadena.slice(0, longitud))

recortarTexto()
recortarTexto("Hola Mundo", 4)
recortarTexto("Hola Mundo")
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 