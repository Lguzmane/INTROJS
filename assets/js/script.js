
const precioBase = 400000; 
let cantidad = 1;

const cantidadElement = document.querySelector('#cantidad');
const totalElement = document.querySelector('#total');


function actualizarTotal() {
    const total = precioBase * cantidad;
    totalElement.innerHTML = `$${total}`;
}


document.querySelector('#aumentar').addEventListener('click', () => {
    cantidad++;
    cantidadElement.innerHTML = cantidad;
    actualizarTotal();
});

document.querySelector('#disminuir').addEventListener('click', () => {
    if (cantidad > 1) {
        cantidad--;
        cantidadElement.innerHTML = cantidad;
        actualizarTotal();
    }
});
