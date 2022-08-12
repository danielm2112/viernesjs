//DECLARANDO UNA FUNCION QUE CALCULE LA DISTANCIA ENTRE 2 PUNTOS
function calcularDistancia(x1,y1,x2,y2){
    return (Math.sqrt(Math.pow(x2-x1,2)+ Math.pow(y2-y1,2)))
}

//LLAMAR A LA FUNCION
let distancia = calcularDistancia(0,0,12,0)
console.log(`la distancia calculada fue`,distancia)