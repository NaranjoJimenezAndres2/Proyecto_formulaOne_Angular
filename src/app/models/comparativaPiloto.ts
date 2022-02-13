export class ClaseComparativaPiloto {
    private _idPiloto: string;
    private _nombre: string;
    private _apellidos: string;
    private _fechaContratacion: Date;
    private _puntosTotales: number;
    private _abandonos: number;
    private _adelantamientos: number;
    private _foto:any;

    constructor(
        _idPiloto: string,
        _nombre: string,
        _apellidos: string,
        _fechaContratacion: Date,
        _puntosTotales: number,
        _abandonos: number,
        _adelantamientos: number,
        _foto:any
    ) {
        this._idPiloto = _idPiloto;
        this._nombre = _nombre;
        this._apellidos = _apellidos;
        this._fechaContratacion = _fechaContratacion;
        this._puntosTotales = _puntosTotales;
        this._abandonos = _abandonos;
        this._adelantamientos = _adelantamientos;
        this._foto = _foto;
    }

    get id() {
        return this._idPiloto;
    }

    get name() {
        return this._nombre;
    }

    get secondName() {
        return this._apellidos;
    }

    get date() {
        return this._fechaContratacion;
    }

    get points() {
        return this._puntosTotales;
    }

    get abandonos() {
        return this._abandonos;
    }

    get adelantamientos() {
        return this._adelantamientos;
    }

    get foto() {
        return this._foto;
    }

    setFoto(){
        if (this._idPiloto == 'ALO'){
            this._foto = "assets/img/alonso.png";
        }
        else if (this._idPiloto == 'OCO'){
            this._foto = "assets/img/ocon.png";
        }
        else if (this._idPiloto == 'HAM'){
            this._foto = "assets/img/hamilton.png";
        }
        else if (this._idPiloto == 'BOT'){
            this._foto = "assets/img/bottas.png";
        }
        else if (this._idPiloto == 'AST'){
            this._foto = "assets/img/ast.jpg";
        }
        else if (this._idPiloto == 'MER'){
            this._foto = "assets/img/mer.png";
        }
        else if (this._idPiloto == 'TAU'){
            this._foto = "assets/img/tau.jpg";
        }
        else if (this._idPiloto == 'WIL'){
            this._foto = "assets/img/wil.png";
        }
        else {
            this._foto = "assets/img/default.png";
        }

    }
}

