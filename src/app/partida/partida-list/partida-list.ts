import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidaService } from '../../servicios/partida';
import { JugadorService } from '../../servicios/jugador';
import { Partida } from '../../modelos/partida';
import { Jugador } from '../../modelos/jugador';


@Component({
  selector: 'app-partida-list',
  imports: [CommonModule],
  templateUrl: './partida-list.html',
  styleUrl: './partida-list.css',
})
export class PartidaList {
  partidas = signal<Partida[]>([]);
  jugadores = signal<Jugador[]>([]);

  constructor(
    private partidaService: PartidaService,
    private jugadorService: JugadorService
  ) {
    this.cargar();
  }

  async cargar() {
    this.partidas.set(await this.partidaService.listar());
    this.jugadores.set(await this.jugadorService.listar());
  }

  getJugadorNombre(id: number) {
    return this.jugadores().find(j => j.id === id)?.nickname || 'N/A';
  }

}
