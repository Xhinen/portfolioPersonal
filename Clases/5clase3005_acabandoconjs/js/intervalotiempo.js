let tiempo = document.querySelector("#tiempo");
let segundos = 0;

//SET INTERVAL(Intervalo de tiempo)
//setInterval(function, tiempo(ms))

let intervalo = setInterval(function(){
    segundos += 1;
    tiempo.innerHTML = segundos;
}, 1000)


//SET TIMEOUT (retardo de tiempo)
//setTimeout(function,tiempo(ms))

setTimeout(function(){
    //clearInterval(intervalo)
    alert("Se ha acabdo el tiempo");
}, 5000)