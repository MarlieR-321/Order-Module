import { OrdenDetalle } from "./orden-detalle"

export interface Orden {
    n_order:string
    idEmpleado:Number
    idPaciente:Number
    idTipoServicio:Number
    idTipoOrden:Number
    asistencia:string
    observaciones:string
    fechaOrden:string
    activo:string
    fechaImprime:string
    detalles:OrdenDetalle[]

    //opt
    paciente:string
    tipo_orden:string
}
