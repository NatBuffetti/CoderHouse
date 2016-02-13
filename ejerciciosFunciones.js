/**
 * Created by Nat on 13/2/2016.
 */

/*1 y 3*/
console.log("EJERCICIOS 1 Y 3");
function mostrar (a,b){
    for (var i=a;i<=b;i++){
        console.log(i);
    }
}

mostrar(1,10);

/*2*/
console.log("EJERCICIO 2");
function mostrarPar (a,b){
    for (var i=a;i<=b;i++)
    {
        if (i%2==0){
            console.log(i);
        }
    }
}

mostrarPar(1,100);

/*4 y 5*/
console.log("EJERCICIOS 4 Y 5");
function mostrarSuma(a,b){
    var suma =0;
    for (var i= a;i<=b;i++){
        suma+=i;
    }
    console.log(suma);
}
mostrarSuma(1,10);

/*6*/
console.log("EJERCICIO 6");
var vector = [1,2,3,4,5];

 function mostrarVector (vector){
     for (var i= 0;i<vector.length;i++){
         console.log(vector[i]);
     }
 }
mostrarVector(vector);

/*7*/
console.log("EJERCICIO 7");
var vector = [1,2,3,4,5];
var b = parseInt(vector.length/2);
function mostrarMitadVector (vector){
    for (var i= 0;i<b;i++){
        console.log(vector[i]);
    }
}
mostrarMitadVector(vector);

/*8, 9 y 10*/
console.log("EJERCICIOS 8,9 Y 10");
var vector = [];
function llenarVector (a,b){
    for (var i=0; i<=b; i++){
        vector[i]= a;
        a++;
    }
    console.log(vector);
}
llenarVector (1,100);

/*11*/
console.log("EJERCICIO 11");
var vector = [];
var vectorPar=[];
function mostrarVectorPar (a,b){
    var z=0;
    for (var i=0; i<=b; i++){
        vector[i]= a;
        if(vector[i]%2==0)
        {
            vectorPar[z]=a;
            z++;
        }
        a++;
    }
    console.log(vectorPar);
}
mostrarVectorPar (1,100);

/*12*/
console.log("EJERCICIO 12");
var vector=[];
var obje ={};

function vectorAObje (vector) {
    for (var i = 0; i < vector.length; i++) {
        obje.key=i;
        obje.valor = vector[i];
        console.log(obje);
        }
    }
vectorAObje([100,200,300]);

/*13*/
console.log("EJERCICIO 13");

function contarLetras (frase){
    var letrasCant ={};
    for (var i = 0;i<frase.length;i++)
    {
        var letra = frase.charAt(i);
        if (letrasCant[letra])
        {
            letrasCant[letra]++;
        } else{
            letrasCant[letra]=1;
        }
    }

    console.log(letrasCant);
}

contarLetras("apa la papa");
