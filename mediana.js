
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;

        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

const lista = [100, 200, 500, 4000, 800, 900, 400,];

lista.sort((a,b)=>a-b) 

const mitadLista = parseInt(lista.length / 2);

let mediana;

if (lista.length){
    const elemento1 = lista[mitadLista -1];
    const elemento2 = lista[mitadLista];

    const promedioElemeto1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemeto1y2;
}else {
    mediana = lista[mitadLista];
    // posicion mitadLista1 dentro de lista1
}
