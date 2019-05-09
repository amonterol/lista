const productos = [];

module.exports = class Producto {
    constructor(nombre, precio, cantidad, imagenUrl, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagenUrl = imagenUrl;
        this.descripcion = descripcion;
    }
    save() {
        this.id = Math.random().toString();
        productos.push(this);
    }

    static obtenerProductos() {
        return productos;
    }

    
}