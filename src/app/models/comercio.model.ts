export class ComercioModel {
    id: string;
    usuario_id: number;
    localidad_id: number;
    rubro_comercio_id: number;
    tipo_venta_id: number;
    nombre: string;
    direccion: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

export class TipoVentasModel{
    id: string;
    tipo: string;
}