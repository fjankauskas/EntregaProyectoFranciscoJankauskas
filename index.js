
alert("Ingrese la opcion del producto que desee, para salir ingrese 0")
let seleccionarProducto = parseInt(prompt("1-Guitarra $2000 2-Amplificador $800 3-Cables $20 4-Puas $10"))
let seleccionarCantidad;
let total = 0;

const cantidad = (cant, precio) => {
    return cant * precio
}

while (seleccionarProducto != 0){
    switch(seleccionarProducto){
        case 1:
            seleccionarCantidad = parseInt(prompt("El producto seleccionado es Guitarra, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 2000)
        break;
        case 2:
            seleccionarCantidad = parseInt(prompt("El producto seleccionado es Amplificado, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 800)
        break;
        case 3:
            seleccionarCantidad = parseInt(prompt("El producto seleccionado es Cables, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 20)
        break;
        case 4:
            seleccionarCantidad= parseInt(prompt("El producto seleccionado es Puas, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 10)
        break;  
        
    default:
        break
    }
    seleccionarProducto = parseInt(prompt("1-Guitarra $2000 2-Amplificador $800 3-Cables $20 4-Puas $10"))
}

alert("El total de la compra es de: " + total)

const envio = () =>{
    if (total >= 1500){
        alert("El envio es gratuito")
    } else{
        total +=25
        alert("El costo de envio es de $25, el total seria: " + total)
    }
}

envio()
