//Calculador de porcentaje de recargo en base a cantidad de cuotas 

let cuotas = parseInt(prompt("Ingrese cantidad de cuotas"));

if ((cuotas >= 0) && (cuotas <= 3)){
    alert("Sin interés");
}else if ((cuotas > 3) && (cuotas <= 12)){
    alert("10% de recargo");
}else if ((cuotas > 12) && (cuotas <= 18)){
    alert("25% de recargo");
}else{
    alert("40% de recargo");
}

