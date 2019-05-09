const productos = [];

module.exports = class Producto {
    constructor(t) {
        this.title = t;
    }
    save() {
        productos.push(this);
    }

    static obtenerProductos() {
        return productos;
    }
}