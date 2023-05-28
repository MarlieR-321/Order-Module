import { OrdenDetalleEnv } from "./orden-detalle-env"

export interface OrdenEnv {
    idEmpleado:Number
    idPaciente:Number
    idTipoServicio:Number
    idTipoOrden:Number 
    asistencia:string
    observaciones:string
    n_Orden:string,
    activo:string
    fechaImprime:string|null
    fechaOrden:string|null
    detalles:OrdenDetalleEnv[]
}
