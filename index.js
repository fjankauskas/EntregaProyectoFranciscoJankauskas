let carritoDeCompra = JSON.parse(localStorage.getItem('carrito')) || [];
let data = []
const carritoCantidad = document.querySelector('#carritoCantidad')
const productos = document.querySelector('#productos')
const vaciarCarrito = document.querySelector('#vaciarCarrito')
const precioTotal = document.querySelector('#precioTotal')
const procesarCompra = document.querySelector('#procesarCompra')



async function fetchData() {
    const res = await fetch("data.json")
    data = await res.json()
    data.forEach((prod) =>{
        const {id,nombre, precio, img, cantidad} = prod
        productos.innerHTML +=`
        <div class="card mt-3" style="width: 18rem;">
        <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
        </div>
        </div>
        `
    })
}

function agregarProducto(id) {
    const existe = carritoDeCompra.some((prod) => prod.id === id);

    if (existe) {
        const prod = carritoDeCompra.find((prod) => prod.id === id);
        prod.cantidad++;
    } else {
        const item = data.find((prod) => prod.id === id);
        carritoDeCompra.push({ ...item, cantidad: 1 });
    }
    mostrarCarrito();
}

fetchData();


procesarCompra.addEventListener('click',() =>{
    if(carritoDeCompra.length === 0){
        Swal.fire({
            title: "¡Tu carrito está vacio!",
            text: "Compra algo para continuar con la compra",
            icon: "error",
            confirmButtonText: "Aceptar",
        });
    } else {
        location.href = "./html/compra.html"
        procesarPedido()
    }
})


vaciarCarrito.addEventListener('click', () =>{
    carritoDeCompra.length = []
    mostrarCarrito()
})




const mostrarCarrito = () => {
    const mostradoDeProducto = document.querySelector('.modal .modal-body')

    mostradoDeProducto.innerHTML = ''
    carritoDeCompra.forEach((prod) =>{
        const {id,nombre,img,precio,cantidad} = prod
        mostradoDeProducto.innerHTML += `
        <div class=carrito-contenedor> </div>
        <div> 
        <img class=img-carrito src="${img}"/>
        </div>

        <div> 
        <p>Producto: ${nombre} </p>
        <p>Precio: ${precio} </p>
        <p>Cantidad: ${cantidad} </p>
        <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar producto</button>
        </div>
        `
    })

    if(carritoDeCompra.length === 0){
        mostradoDeProducto.innerHTML = `
        <p class="text-center text-primary parrafo">Aun no has agregado nada</p>
        `
    }

    carritoCantidad.textContent = carritoDeCompra.length

    if(precioTotal){
    precioTotal.textContent = carritoDeCompra.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    }
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

window.addEventListener('load', mostrarCarrito);



