const productos= [
    {nombre:'Guitarra Epiphone',precio:2000},
    {nombre:'Guitarra SG Epiphone',precio:1800},
    {nombre:'Guitarra CORT',precio:1500},
    {nombre:'Guitarra Ibañez',precio:2000}
]
let carritoDeCompra = []

let seleccionarProductos = prompt('¿Desea llevar algun producto? Responda Si o No')

while(seleccionarProductos != 'Si' && seleccionarProductos != 'No'){
    alert('Ingrese Si o No')
    prompt('¿Desea llevar algun producto? Responda Si o No')
}

if(seleccionarProductos === 'Si'){
    alert('Estos son nuestros productos')
    let nuestrosProductos = productos.map((producto) => producto.nombre + " " + producto.precio)
    alert(nuestrosProductos.join(" - "))
} else if (seleccionarProductos === 'No') {
    alert('Hasta pronto')
}

while(seleccionarProductos != 'No'){
    let producto = prompt ('Agrega un producto')
    let precio = 0

    if (producto == 'Guitarra Epiphone' || producto == 'Guitarra SG Epiphone' || producto == 'Guitarra CORT' || producto == 'Guitarra Ibañez' ){
        switch (producto){
            case 'Guitarra Epiphone':
                precio = 2000;
                break;
            case 'Guitarra SG Epiphone':
                precio = 1800;
                break;
            case 'Guitarra CORT':
                precio = 1500;
                break;
            case 'Guitarra Ibañez':
                precio = 2000;
                break;
        default:
            break;
        }
    let unidades = parseInt(prompt('¿Cuantas unidades quiere llevar?'))
    carritoDeCompra.push({producto, unidades, precio})
    console.log(carritoDeCompra)
    } else {
        alert('No tenemos ese producto')
    }

    seleccionarProductos = prompt('¿Desea seguir comprando?')

    while(seleccionarProductos ==='No'){
        alert('Muchas gracias por comprar')
        carritoDeCompra.forEach((carritoDeCompraFinal) => {
            console.log(`producto: ${carritoDeCompraFinal.producto}, unidades: ${carritoDeCompra.unidades}, total a pagar ${carritoDeCompraFinal.unidades * carritoDeCompraFinal.precio}`)
        })
    break
    }
}

const total = carritoDeCompra.reduce((ecc, el) => ecc + el.precio * el.unidades, 0)
console.log(`El total a pagar es: ${total}`)






// const envio = () =>{
//     if (total >= 1500){
//         alert("El envio es gratuito")
//     } else{
//         total +=25
//         alert("El costo de envio es de $25, el total seria: " + total)
//     }
// }

// envio()
