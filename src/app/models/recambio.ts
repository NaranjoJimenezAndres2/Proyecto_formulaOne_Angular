export class ClaseRecambios {
    private _idPieza: string;
    private _nombre: string;
    private _precio: number;
    private _tipo: string;
    private _fabricante: string;
    private _cantidadTotal: number;
    private _idEscuderia: string;

    constructor(idPieza: string, nombre: string, precio: number, tipo: string, fabricante: string, cantidadTotal: number, idEscuderia: string) {
        this._idPieza = idPieza;
        this._nombre = nombre;
        this._precio = precio;
        this._tipo = tipo;
        this._fabricante = fabricante;
        this._cantidadTotal = cantidadTotal;
        this._idEscuderia = idEscuderia;
    }

    get idPieza(): string {
        return this._idPieza;
    }

    get nombre(): string {
        return this._nombre;
    }

    get precio(): number {
        return this._precio;
    }

    get tipo(): string {
        return this._tipo;
    }

    get fabricante(): string {
        return this._fabricante;
    }

    get cantidadTotal(): number {
        return this._cantidadTotal;
    }

    get idEscuderia(): string {
        return this._idEscuderia;
    }

    set precio(precio: number) {
        this._precio = precio;
    }

    precioFinal() {
        this._precio=  this._precio * 1.21;
    }
}