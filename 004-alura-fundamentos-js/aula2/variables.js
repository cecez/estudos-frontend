// --- var
// variável pode ser declarada após sua inicialização, pois o JS primeiro busca as declarações
var height = 2;
var width = 10;
area = height * width;
var area;
console.log(area);

// --- let
// variável disponível apenas no escopo que foi declarada
// inicialmente undefined
let test;
console.log("test está indefinido?", test === undefined);

if (true) {
    test = "Hello, World!";
    var test2 = "Hello, Mars!";
}
console.log(test);
console.log(test2);