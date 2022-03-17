// ----- type number
const firstNumber = 3;
const floating = 0.4;
console.log(typeof(firstNumber));

// Infinity
const infinity = 1 / 0;
console.log(infinity);

// NaN
const test = "test";
console.log(test * 2);

// ----- type string
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
console.log(typeof("test"));

// O JavaScript usa, por padrão, o UTF-16. O número 16 está relacionado aos espaços em bits ocupados por cada caractere.

// ----- type boolean
console.log(typeof(false));

// null (ausência de valor)
// undefined (ausência de valor, dado não inicializado, também é o valor retornado por uma função que não tem cláusula return)
console.log(null == undefined); // true
console.log(null === undefined); // false

// camelCase: Esta é a convenção utilizada pelo JavaScript para variáveis e funções.