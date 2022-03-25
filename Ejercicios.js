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
textoEnCadena()
textoEnCadena("", "mundo");
textoEnCadena("hola mundo adios mundo")
textoEnCadena("hola mundo adios mundo", "mundo")

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.