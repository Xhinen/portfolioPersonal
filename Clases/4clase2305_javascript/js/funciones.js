//FUNCIONES SIN PARÁMETROS

function saludo(){
    console.log("Hola mundo");
}

saludo();
//FUNCIONES CON PARÁMETROS

function suma(digito1, digito2){
    let resultado = digito1 + digito2;
    console.log(resultado);
}

suma(10,5);

//FUNCIONES CON RETURN SIN PARÁMETROS

function retorno1(){
    let numero = 5;
    return numero;
}

retorno1(); //esto lo devuelve
console.log(retorno1()); //esto lo imprime

//FUNCIONES CON RETURN Y CON PARÁMETROS

function retorno2(numero){
    return numero;
}

console.log(retorno2(20));
console.log(retorno2(30));
console.log(retorno2(40));