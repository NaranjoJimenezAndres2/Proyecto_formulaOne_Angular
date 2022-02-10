export class ClaseEquipoDetalle {
    private _idEscuderia: string;
    private _nombre: string;
    private _piezasCoste: number;
    private _salarioCoste: number;
    private _presupuesto : number;

    constructor(idEscuderia: string, nombre: string, piezasCoste: number, salarioCoste: number, presupuesto: number) {
        this._idEscuderia = idEscuderia;
        this._nombre = nombre;
        this._piezasCoste = piezasCoste;
        this._salarioCoste = salarioCoste;
        this._presupuesto = presupuesto;
    }

    get idEscuderia(): string {
        return this._idEscuderia;
    }

    set idEscuderia(value: string) {
        this._idEscuderia = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    get piezasCoste(): number {
        return this._piezasCoste;
    }

    set piezasCoste(value: number) {
        this._piezasCoste = value;
    }

    get salarioCoste(): number {
        return this._salarioCoste;
    }

    set salarioCoste(value: number) {
        this._salarioCoste = value;
    }

    get presupuesto(): number {
        return this._presupuesto;
    }

    set presupuesto(value: number) {
        this._presupuesto = value;
    }

    presupuestoFinal() {
        this._presupuesto = this._presupuesto - (this._piezasCoste + this._salarioCoste);
    }
}