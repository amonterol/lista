const listas = [];

module.exports = class Lista {
    constructor(t) {
        this.title = t;
    }
    save() {
        listas.push(this);
    }

    static obtenerListas() {
        return listas;
    }
}