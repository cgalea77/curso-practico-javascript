// Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function perimetroCuadrado(lado){ 
    return lado * 4;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){ 
    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm", 
//     + ladoTriangulo2 
//     + "cm", baseTriangulo 
//     + "cm");

// const alturaTriangulo = 5.5; 
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base){
    return parseFloat (lado1) + parseFloat (lado2) + parseFloat (base);

} 


// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log("El área del triangulo es: " + areaTriangulo + "cm2");
// console.groupEnd();

// Código Circulo
console.group("Circulos")

// Radio

// const radioCirculo = 4;
// console.log("El radio del Circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area

function areaCirculo(radio) {
    return (radio * radio) * PI;

}
console.groupEnd();

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
    
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = base.value;

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = base.value;
    const altura = document.getElementById("InputAlturaTriangulo");
    const value4 = altura.value;
    const area = areaTriangulo(value3, value4);
    alert(area);
}




function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert("El diametro del circulo es: " + diametro);
}


function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}
