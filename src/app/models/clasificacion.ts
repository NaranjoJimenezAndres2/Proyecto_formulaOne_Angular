export class ClaseClasificacion {
    private _idPiloto: string;
    private _nombre: string;
    private _apellidos: string;
    private _fechaContratacion: Date;
    private _puntosTotales: number;
  
    constructor(
      _idPiloto: string,
      _nombre: string,
      _apellidos: string,
      _fechaContratacion: Date,
      _puntosTotales: number
    ) {
      this._idPiloto = _idPiloto;
      this._nombre = _nombre;
      this._apellidos = _apellidos;
      this._fechaContratacion = _fechaContratacion;
      this._puntosTotales = _puntosTotales;
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
  }
  