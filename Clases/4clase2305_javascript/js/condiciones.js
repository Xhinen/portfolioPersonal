let a = 5;
let b = 10;

//Comprueba si a es mayor que b, si son lo mismo, o si b es mayor que a.
// >, <, >=, <=, ==, !=, === (el triple igual es una comprobación mas fuerte) &&(AND), ||(OR)
// ejemplo ===, 1 == '1' -> true
// pero si pongo 1 === '1' -> false

if(a > b && a > 0){
    
    console.log("a es mayor que b");

}else if(a == b){

    console.log("a es lo mismo b");

}else{

    console.log("a no es lo mismo b, y a es menor que b");

}

//SWITCH-CASE

let dia = "Domingo";

switch(dia){
    case "Viernes":
        console.log("Voy a estudiar LM");
        break;

    case "Sabado":
        console.log("Voy a estudiar PHP");
        break;

    case "Domingo":
        console.log("Voy a desconectar");
        break;

    default: console.log("Voy a estudiar js");

}
