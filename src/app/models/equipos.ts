export class ClaseEquipo{
    protected _idEscuderia: string;
    protected _nombre: string;
    protected _pais: string;
    protected _motorDistribuidor: string;
    protected _presupuesto: number;
    protected _escudo: any
    constructor (idEscuderia: string, nombre: string, pais: string, motorDistribuidor: string, presupuesto: number, escudo: any){
        this._idEscuderia = idEscuderia;
        this._nombre = nombre;
        this._pais = pais;
        this._motorDistribuidor = motorDistribuidor;
        this._presupuesto = presupuesto;
        this._escudo = escudo;

    }

    public get idEscuderia(): string {
        return this._idEscuderia;
    }
    
    public get nombre(): string {
        return this._nombre;
    }

    public get pais(): string {
        return this._pais;
    }   

    public get motorDistribuidor(): string {
        return this._motorDistribuidor;
    }
    
    public get presupuesto(): number {
        return this._presupuesto;
    }

    public get escudo(): any {
        return this._escudo;
    }

    public set escudo(escudo: any) {
        this._escudo = escudo;
    }

    setEscudo(){
        if (this._idEscuderia == 'ALP'){
            this._escudo = "assets/img/alp.png";
        }
        else if (this._idEscuderia == 'FER'){
            this._escudo = "assets/img/fer.png";
        }
        else if (this._idEscuderia == 'RBR'){
            this._escudo = "assets/img/rbr.png";
        }
        else if (this._idEscuderia == 'MCL'){
            this._escudo = "assets/img/mcl.png";
        }
        else if (this._idEscuderia == 'AST'){
            this._escudo = "assets/img/ast.jpg";
        }
        else if (this._idEscuderia == 'MER'){
            this._escudo = "assets/img/mer.png";
        }
        else if (this._idEscuderia == 'TAU'){
            this._escudo = "assets/img/tau.jpg";
        }
        else if (this._idEscuderia == 'WIL'){
            this._escudo = "assets/img/wil.png";
        }
        else {
            this._escudo = "assets/img/default.png";
        }





    }
        


    

}