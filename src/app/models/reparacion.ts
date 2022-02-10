export class ClaseReparaciones {
    private _idReparacion: string;
    private _idIngeniero:string ;
    private _idPieza:string ;
    private _idCoche:string ;
    private _cantidad: number;
    private _fecha: Date;
    private _estado: string ;
    constructor(idReparacion: string, idIngeniero: string, idPieza: string, idCoche: string, cantidad: number, fecha: Date, estado: string) {
        this._idReparacion = idReparacion;
        this._idIngeniero = idIngeniero;
        this._idPieza = idPieza;
        this._idCoche = idCoche;
        this._cantidad = cantidad;
        this._fecha = fecha;
        this._estado = estado;
    }

    get idReparacion(): string {
        return this._idReparacion;
    }

    get idIngeniero(): string {
        return this._idIngeniero;
    }

    get idPieza(): string {
        return this._idPieza;
    }

    get idCoche(): string {
        return this._idCoche;
    }

    get cantidad(): number {
        return this._cantidad;
    }
    set cantidad(cantidad: number) {
        this._cantidad = cantidad;
    }

    get fecha(): Date {
        return this._fecha;
    }

    get estado(): string {
        return this._estado;
    }

    set estado(estado: string) {
        this._estado = estado;
    }

}