import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Partida } from '../../modelos/partida';
import { Jugador } from '../../modelos/jugador';
import { PartidaService } from '../../servicios/partida';
import { JugadorService } from '../../servicios/jugador';

@Component({
  selector: 'app-partida-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './partida-form.html',
  styleUrl: './partida-form.css',
})
export class PartidaForm {
  jugadores= signal<Jugador[]>([]);
  partida = signal<Partida>({
    puntuacion: 0,
    duracion: 0,
    fecha: '',
    jugadorId: 0
  });

  constructor(
    private jugadorService: JugadorService,
    private partidaService: PartidaService
  ) {
    this.cargarJugadores();
    const nav = history.state;

    if (nav.partida) {
      this.partida.set({ ...nav.partida });
    }
  }
  async cargarJugadores() {
    this.jugadores.set(await this.jugadorService.listar());
  }

  async guardar() {
    const p = this.partida();

    if (p.id) {
      await this.partidaService.actualizar(p);
      alert('Partida actualizada');
    } else {
      await this.partidaService.crear(p);
      alert('Partida creada');
    }

    location.href = '/partidas';
  }

}
