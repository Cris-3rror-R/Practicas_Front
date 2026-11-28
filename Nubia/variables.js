let message;
message = "hola";//almacenar la cadena "hola" en la variable llamada message
message = "mundo"; //funciona como en python toma el ultimo valor
alert(message)

//se puede declarar varias variables una sola linea

let user = "Cris", age = 21, hobbies= "Drawing";
alert(user)

//También podemos declarar dos variables y copiar datos de una a la otra.
let hello = 'Hola mundo!';

let message1;

// copia 'Hola mundo' de hello a message
message1 = hello;

// Ahora, ambas variables contienen los mismos datos
alert(hello); // Hola mundo!
alert(message1); // Hola mundo!

//se puede declara una variable sin "let" ya que no se usa usestrict al principio
num = 2
alert(num)

//CONSTANTES
//se escriben con cons
const myBirthday = '18.04.1982';
//constantes en Mayusculas
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...cuando debemos elegir un color
let color = COLOR_ORANGE;
alert(color); // #FF7F00