import { OrdenDetalle } from "./orden-detalle"

export interface Orden {
    n_order:string | null
    idEmpleado:Number
    idPaciente:Number
    idTipoServicio:Number
    idTipoOrden:Number 
    asistencia:string
    observaciones:string
    fechaOrden:string|null
    activo:string
    fechaImprime:string|null
    detalles:OrdenDetalle[]

    //opt
    paciente:string |null
    tipo_orden:string|null
}
