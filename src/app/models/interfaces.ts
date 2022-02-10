export interface EquipoSchema { 
    _idEscuderia: string;
    _nombre: string;
    _pais: string;
    _motorDistribuidor: string;
    _presupuesto: number;
}

export interface ReparacionSchema {
    _idReparacion: string;
    _idIngeniero: string,
    _idPieza: string,
    _idCoche: string,
    _cantidad: string,
    _fecha: string,
    _estado: string
}

export interface PiezaSchema {
    _id: {
        _idPieza: string,
        _idEscuderia: string,

    },
    precio: number,
}


export interface SalarioSchema {
    _idPersonal: string,
    _nombre: string,
    _apellidos: string,
    _fechaContratacion: Date,
    _salario: number,
}
    