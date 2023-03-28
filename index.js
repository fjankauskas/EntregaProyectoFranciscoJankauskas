const stockProductos= [
    {id:1,nombre:'Guitarra Epiphone',precio:2000,img:"img/guitarra-epiphone.jpg",},
    {id:2,nombre:'Guitarra SG Epiphone',precio:1800,img:"img/guitarra-sg-epiphone.jpg",},
    {id:3,nombre:'Guitarra CORT',precio:1500,img:"img/guitarra-cort.jpg",},
    {id:4,nombre:'Guitarra Ibañez',precio:2000,img:"img/guitarra-ibañez.jpg",}
]
let carritoDeCompra = []

document.addEventListener('DOMContentLoaded', () => {
    carritoDeCompra = JSON.parse(localStorage.getItem('carrito')) ||  []
    mostrarCarrito()
})

const carritoCantidad = document.querySelector('#carritoCantidad')
const productos = document.querySelector('#productos')

stockProductos.forEach((prod) =>{
    const {id,nombre, precio, img} = prod
    productos.innerHTML +=`
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">Precio: ${precio}</p>
    <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
    </div>
    `
})

function agregarProducto(id){
    const agregadoDeProducto = stockProductos.find((prod) => prod.id === id)
    carritoDeCompra.push(agregadoDeProducto)
    mostrarCarrito()
}

const mostrarCarrito = () => {
    const mostradoDeProducto = document.querySelector('.modal .modal-body')

    mostradoDeProducto.innerHTML = ''
    carritoDeCompra.forEach((prod) =>{
        const {id,nombre,img,precio} = prod
        mostradoDeProducto.innerHTML += `
        <div class=carrito-contenedor> </div>
        <div> 
        <img class=img-carrito src="${img}"/>
        </div>

        <div> 
        <p>Producto: ${nombre} </p>
        <p>precio: ${precio} </p>
        <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar producto</button>
        </div>
        `
    })

    carritoCantidad.textContent = carritoDeCompra.length

    storage()
}

function eliminarProducto(id){
    const idDeGuitarra = id
    carritoDeCompra = carritoDeCompra.filter((guitarra) => guitarra.id !== idDeGuitarra)
    mostrarCarrito()
}

function storage(){
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompra))
}


