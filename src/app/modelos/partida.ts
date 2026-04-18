export interface Partida {
  id?: number;
  puntuacion: number;
  duracion: number; // minutos
  fecha: string;
  jugadorId: number; // FK
}
