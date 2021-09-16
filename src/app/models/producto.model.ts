export interface Producto {
    id: number;
    nombre: string,
    formato: string,
    cantidad: number,
    precioSin: string,
    categoria: string,
    iva: string,
    precioCon: string,
    fk_negocio_id: number,
}
