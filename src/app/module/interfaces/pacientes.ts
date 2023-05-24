export interface Pacientes {
    IdPaciente: Number;
    IdIdentificacion: Number;
    NumIdentificacion: string;
    NumExpediente: Number;
    NumINSS: string;
    IdEstadoCivil:Number;
    Email: string;
    //Chingo de id
    IdSexo: Number;
    IdNacionalidad: Number;
    IdPaisNac: Number;
    IdDepartamentoNac: Number;
    IdMunicipioNac: Number;
    IdPaisRes: Number;
    IdDepartamentoRes: Number;
    IdMunicipioRes: Number;
    IdTipoSangre: Number;
    IdProfesiones: Number;
    idReligion: Number;
    //Volvemos a datos
    PrimerNombre: string;
    SegundoNombre: string;
    PrimerApellido: string;
    SegundoApellido: string;
    FechaNac:string;
    DireccionDomiciliar: string;
    TelefonoDomiciliar: string;
    TelefonoMovil: string;
    Activo: string;
    Emabrazada: string;
    Fallecido: string;
}
