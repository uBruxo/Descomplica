var valores = [8,1,7,2,9]

console.log(valores[3])

console.log("Array invertido: " + valores.reverse());

for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posicao: " + valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";


var motos = new Array("BMW", "Yamaha","Honda");

//Calcular a média de todos os numeros de um array

var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];
}

var media = soma/valores.length;

console.log(media);

var arr1 = [1,2,3,4,5,6];

console.log(arr1.join('|')); // O join separa o array com o elemento que desejar.

var retirado = arr1.shift(); //  shift retira o primeiro elemento do array

console.log(retirado);

console.log(arr1);

console.log("Posição do numero 3: " + arr1.indexOf(3));

arr1.push(7); // push acrescenta um numero no array

console.log(arr1);

arr1.pop(); // Pop remove o ultimo elemento do array

console.log(arr1);

var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,3)

console.log(arr2)

var nomes = ["Maria", "Joao", "Lucas", "Pedro"];
var novos = nomes.splice(1,2,"Luiz", "Alberto");
console.log(nomes);

var pais = ["Brasil", "Argentina", "Colombia"]

pais.unshift("Uruguai");
console.log(pais);

var nomes2 = ["Guilherme" , "Samuel", "Davi", "Manuel", "João"]
nomes2.push("Monica");
nomes2.pop();
console.log("Posição do Samuel é: " + nomes2.indexOf("Samuel"));
nomes2.splice(3,1,"Emanuel");
console.log(nomes2);