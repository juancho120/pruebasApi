export class ComercioModel {
    id: number;
    usuario_id: number;
    localidad_id: number;
    rubro_comercio_id: number;
    nombre: string;
    direccion: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;

    celiaco: boolean;

    constructor() {
        this.celiaco = true;
    }
}