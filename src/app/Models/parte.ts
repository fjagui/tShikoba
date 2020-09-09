import { Time } from '@angular/common';

export class Parte {
  id: number;
  fecha: Date;
  descripcion: string;
  horaSalidaAula: Time;
  horaLlegadaJefatura: Time;
  formato: string;
  observacion: string;
  puntos: number;
  idTipo: number;
  idAlumno: number;
  idProfesor: number;
  idEstado: number;
  recupera: number;
  fechaConfirmacion: Date;
  fechaComunicacion: Date;
  numero: number;
}
