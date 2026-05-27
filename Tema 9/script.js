//1

console.log("hola mundo");
//2
let nombre = prompt("ingrese su nombre") ;
console.log("Hola, " + nombre + "!");
//3
let numero1 =prompt("ingrese un numero") ;
let numero2 =prompt("ingrese otro numero") ;
console.log("La suma de " + numero1 + " y " + numero2 + " es: " + (parseFloat(numero1) + parseFloat(numero2)));
//4
let edad = prompt("ingrese su edad") ;
if (parseInt(edad) >= 18) {
  console.log("Eres mayor de edad.");   
} else {
  console.log("No eres mayor de edad.");
}
//5
let numero = prompt("ingrese un numero") ;
if (parseInt(numero) % 2 === 0) {
  console.log("El número " + numero + " es par.");  
} else {
  console.log("El número " + numero + " es impar.");
}

//6
let numeroA = prompt("ingrese el primer numero") ;
let numeroB = prompt("ingrese el segundo numero") ;
let numeroC = prompt("ingrese el tercer numero") ;
let mayor = Math.max(parseFloat(numeroA), parseFloat(numeroB), parseFloat(numeroC));
console.log("El número mayor entre " + numeroA + ", " + numeroB + " y " + numeroC + " es: " + mayor);   
//7
let nota = prompt("ingrese su nota del 1 al 10") ;
if(parseFloat(nota) < 5) {
  console.log("insuficiente");
} else if(parseFloat(nota) >= 5 && parseFloat(nota) <= 7) {
  console.log("aceptado");
} else if(parseFloat(nota) > 7) {
  console.log("muy bueno");
}

//8
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//9
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
  
}

//10
let contraseña = prompt("ingrese una contraseña") ;
if (contraseña === "1234") {
    console.log("Contraseña correcta");
} else {
    console.log("Contraseña incorrecta");
}

//11
let suma = 0;
let ingresarnumero;
do { ingresarnumero = prompt("ingrese un numero  (0 para terminar)") ;
    suma += parseFloat(ingresarnumero);
} while (parseFloat(ingresarnumero) !== 0);
console.log("La suma de los numeros ingresados es: " + suma);   

//12
let a = Number(prompt("Primer número"));
let b = Number(prompt("Segundo número"));
let operacion = prompt("Escribe: suma, resta, multiplicacion o division");

if (operacion === "suma") {
    console.log(a + b);
} else if (operacion === "resta") {
    console.log(a - b);
} else if (operacion === "multiplicacion") {
    console.log(a * b);
} else if (operacion === "division") {
    console.log(a / b);
}


//13
let opcion = prompt("1-Saludar | 2-Fecha | 3-Random");

if (opcion === "1") {
    console.log("Hola!");
} else if (opcion === "2") {
    console.log(new Date());
} else if (opcion === "3") {
    console.log(Math.random());
}

//14
let secreto = Math.floor(Math.random() * 10) + 1;
let intento = Number(prompt("Adivina el número del 1 al 10"));

if (intento === secreto) {
    console.log("Ganaste");
} else {
    console.log("Perdiste. El número era " + secreto);
}

//15
let cantidadPares = 0;

for (let i = 0; i < 5; i++) {
    let num = Number(prompt("Ingresa un número"));

    if (num % 2 === 0) {
        cantidadPares++;
    }
}
console.log("La cantidad de números pares ingresados es: " + cantidadPares);

//16
let nombres = ["Juan", "María", "Pedro", "Ana", "Luis"]
console.log(nombres);

//17
let autos = [
    { marca: "Toyota", modelo: "Corolla", año: 2020 },
    { marca: "Honda", modelo: "Civic", año: 2019 },     
    { marca: "Ford", modelo: "Mustang", año: 2021 }
];
for (let i = 0; i < autos.length; i++) {
    console.log("Marca: " + autos[i].marca + ", Modelo: " + autos[i].modelo + ", Año: " + autos[i].año);
}


//18
let numeros = [5, 3, 8, 1, 2];
 let mayores = Math.max(...numeros);
 let menores = Math.min(...numeros);
 console.log("El número mayor es: " + mayores);
 console.log("El número menor es: " + menores);

//19
 let notas = [8, 7, 10, 6, 9];

let total = 0;

for (let i = 0; i < notas.length; i++) {
    total += notas[i];
}

let promedio = total / notas.length;

console.log("Promedio: " + promedio);


//20
let tuNombres = [];
let texto;

do {
    texto = prompt("Ingresa un nombre o escribe salir");

    if (texto !== "salir") {
        tuNombres.push(texto);
    }

} while (texto !== "salir");

console.log(tuNombres);

//21

console.log("Cantidad de elementos: " + tuNombres.length);

//22
let Numeros = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < Numeros.length; i++) {
    if (Numeros[i] % 2 === 0) {
        console.log(Numeros[i]);
    }
}


//23

let fruta = ["manzana", "banana", "cereza", "durazno", "uva"];

let Buscada = prompt("Ingresa el nombre de una fruta");
if  (fruta.includes(Buscada)) {
    console.log("La fruta " + Buscada + " existe en la lista.");
} else {
    console.log("La fruta " + Buscada + " no existe en la lista.");
}



//24
fruta.pop("manzana");
console.log(fruta);

//25
fruta.push("tangarina");
fruta.push("kiwi");
console.log(fruta);