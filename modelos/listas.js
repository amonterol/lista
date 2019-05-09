const listas = [];

module.exports = class Lista {
    constructor(nombre, lugar, fecha, estado, imagenUrl) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.fecha = fecha;
        this.estado = estado;
        this.imagenUrl = imagenUrl;
    }
    save() {
        listas.push(this);
    }

    static obtenerListas() {
        return listas;
    }
}
