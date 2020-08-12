
//Ask income
let income= prompt("¿Cuanto es el ingreso");
//Ask cost
let cost= prompt("¿Cuanto es el costo?");
//Ask tax percent
let taxPercent= prompt("¿Cual es el porcentaje de impuesto?");
//Calculate gross profit
let grossProfit= income-cost;
//Calculate real tax
let tax= grossProfit*taxPercent/100;
//Calculate net profit
let netProfit= grossProfit-tax;
//Show net profit
document.write("$" + netProfit);