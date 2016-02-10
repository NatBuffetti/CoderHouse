/**
 * Created by Nat on 6/2/2016.
 */
/*Conversor pesos a dolares*/

var cotizacion = 14;
var pesos= 20000;
var pesos_a_dolar = (pesos * cotizacion).toFixed(2);
console.log("El dólar cotiza hoy a $",cotizacion,".$",pesos," equivalen a",pesos_a_dolar,"USD.");

/*Máquina boletos*/

var stock_maquina ={
    dos_pe : 5,
    un_pe : 10,
    cincuenta_cvo : 2,
    veinticinco_cvo : 4,
    diez_cvo : 1,
    cinco_cvo : 10

};

var monedas_vuelto = {};

var valor_boleto = 3.50;
var valor_abonado = 6;

var valor_vuelto;
valor_vuelto = (valor_abonado - valor_boleto).toFixed(2);

console.log("Valor del boleto : ",valor_boleto.toFixed(2));
console.log("Valor abonado : ",valor_abonado.toFixed(2));
console.log("Valor vuelto : ",valor_vuelto);

var i = valor_vuelto;
var auxi = 0;
while (i){
    if (i>=2)
        {
        var auxi = i/stock_maquina.dos_pe;
        if (auxi <=stock_maquina.dos_pe) {
            monedas_vuelto.dos_pe = aux;
            i = i - aux;
        }
        }
    }

console.log("Su vuelto es: ",valor_vuelto,". Monedas entregadas: ");
 */
