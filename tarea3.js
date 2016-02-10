/**
 * Created by Nat on 6/2/2016.
 */
/*Conversor pesos a dolares*/

var cotizacion = 14;
var pesos= 20000;
var pesos_a_dolar = (pesos * cotizacion).toFixed(2);
console.log("El dólar cotiza hoy a $",cotizacion,".$",pesos," equivalen a",pesos_a_dolar,"USD.");

/*Máquina boletos - vuelto : no suma stock al momento del pago*/

var stock_maquina = {
    un_pe:10,
    cinc_cvo:5,
    vein_cvo:10,
    diez_cvo:5,
    cinco_cvo:10
};

var monedas_vuelto = {};

var valor_boleto = 3.50;
var valor_abonado = 5;

var valor_vuelto;
valor_vuelto = (valor_abonado - valor_boleto).toFixed(2);

console.log("Valor del boleto : ",valor_boleto.toFixed(2));
console.log("Valor abonado : ",valor_abonado.toFixed(2));
console.log("Valor vuelto : ",valor_vuelto);

var i = valor_vuelto;

while (i) {
    var aux1 = parseInt(i/1);
    var aux2 = parseInt(i/0.50);
    var aux3 = parseInt(i/0.25);
    var aux4 = parseInt(i/0.1);
    var aux5 = parseInt(i/0.05);
    if (i>=0.25){
            if(i>=1){
                if(aux1<=stock_maquina.un_pe){
                    stock_maquina.un_pe= stock_maquina.un_pe - aux1;
                    monedas_vuelto.unpe=aux1;
                    i=i-(aux1*1);
                }else if (aux2<=stock_maquina.cinc_cvo){
                    stock_maquina.cinc_cvo= stock_maquina.cinc_cvo - aux2;
                    monedas_vuelto.cinc_cvo=aux2;
                    i=i-(aux2*0.50);
                }else if (aux3<=stock_maquina.vein_cvo){
                    stock_maquina.vein_cvo= stock_maquina.vein_cvo - aux3;
                    monedas_vuelto.vein_cvo=aux3;
                    i=i-(aux3*0.25);
                }else if(aux4<=stock_maquina.diez_cvo){
                    stock_maquina.diez_cvo= stock_maquina.diez_cvo - aux4;
                    monedas_vuelto.diez_cvo=aux4;
                    i=i-(aux4*0.1);
                }else if (aux5<=stock_maquina.cinco_cvo){
                    stock_maquina.cinco_cvo= stock_maquina.cinco_cvo - aux5;
                    monedas_vuelto.cinco_cvo=aux5;
                    i=i-(aux5*0.05);
                }else console.log ("No tengo modedas suficientes para tu vuelto. Perdón!");
            }else if (i>=0.50){
                if (aux2<=stock_maquina.cinc_cvo){
                    stock_maquina.cinc_cvo= stock_maquina.cinc_cvo - aux2;
                    monedas_vuelto.cinc_cvo+=aux2;
                    i=i-(aux2*0.50);
                }else if (aux3<=stock_maquina.vein_cvo){
                    stock_maquina.vein_cvo= stock_maquina.vein_cvo - aux3;
                    monedas_vuelto.vein_cvo+=aux3;
                    i=i-(aux3*0.25);
                }else if(aux4<=stock_maquina.diez_cvo){
                    stock_maquina.diez_cvo= stock_maquina.diez_cvo - aux4;
                    monedas_vuelto.diez_cvo+=aux4;
                    i=i-(aux4*0.1);
                }else if (aux5<=stock_maquina.cinco_cvo){
                    stock_maquina.cinco_cvo= stock_maquina.cinco_cvo - aux5;
                    monedas_vuelto.cinco_cvo+=aux5;
                    i=i-(aux5*0.05);
                }else console.log ("No tengo modedas suficientes para tu vuelto. Perdón!");
            }else if (aux3<=stock_maquina.vein_cvo)
                {
                    stock_maquina.vein_cvo= stock_maquina.vein_cvo - aux3;
                    monedas_vuelto.vein_cvo+=aux3;
                    i=i-(aux3*0.25);
                }else if(aux4<=stock_maquina.diez_cvo){
                    stock_maquina.diez_cvo= stock_maquina.diez_cvo - aux4;
                    monedas_vuelto.diez_cvo+=aux4;
                    i=i-(aux4*0.1);
                }else if (aux5<=stock_maquina.cinco_cvo){
                    stock_maquina.cinco_cvo= stock_maquina.cinco_cvo - aux5;
                    monedas_vuelto.cinco_cvo+=aux5;
                    i=i-(aux5*0.05);
                }else console.log ("No tengo modedas suficientes para tu vuelto. Perdón!");
    }else if (i>=0.10){
        if(aux4<=stock_maquina.diez_cvo){
            stock_maquina.diez_cvo= stock_maquina.diez_cvo - aux4;
            monedas_vuelto.diez_cvo+=aux4;
            i=i-(aux4*0.1);
        }else if (aux5<=stock_maquina.cinco_cvo){
            stock_maquina.cinco_cvo= stock_maquina.cinco_cvo - aux5;
            monedas_vuelto.cinco_cvo+=aux5;
            i=i-(aux5*0.05);
        }else console.log ("No tengo modedas suficientes para tu vuelto. Perdón!");
    }else if (aux5<=stock_maquina.cinco_cvo)
        {
        stock_maquina.cinco_cvo= stock_maquina.cinco_cvo - aux5;
        monedas_vuelto.cinco_cvo+=aux5;
        i=i-(aux5*0.05);
        }else console.log ("No tengo modedas suficientes para tu vuelto. Perdón!");
};
console.log("Su vuelto es: ",valor_vuelto, ". Monedas entregadas: ", monedas_vuelto);

