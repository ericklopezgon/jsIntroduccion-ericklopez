// ----- Declaracion de variables ----- 
const precio = 400000
document.querySelector(".precio-inicial").innerHTML = precio
let total = document.querySelector(".valor-total");
let totalamount = parseInt(document.querySelector(".cantidad").innerHTML);

// ----- Funciones event onclick ----- 
// Funcion boton +
function sumar(){
    // Funcionalidad al sumar
    let plus = document.querySelector(".cantidad");
    let amountplus = parseInt(plus.innerHTML);
    plus.innerHTML = amountplus +1
    // Calculo del total al sumar
    totalamount = parseInt(plus.innerHTML); // Actualizar totalamount
    total.innerHTML = totalamount * precio; // Calcular y actualizar el valor total
}

// Funcion boton -
function restar(){
    // if; si el valor es menor o igual a 0, no se realiza la funcion
    if (total.innerHTML <= 0) return; 
    // Funcionalidad al restar  
    let minus = document.querySelector(".cantidad");
    let amountminus = parseInt(minus.innerHTML);
    minus.innerHTML = amountminus -1
    // Calculo del total al restar
    totalamount = parseInt(minus.innerHTML); // Actualizar totalamount
    total.innerHTML = totalamount * precio; // Calcular y actualizar el valor total
    }













