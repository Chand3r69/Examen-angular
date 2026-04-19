import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidaService } from '../../servicios/partida';
import { JugadorService } from '../../servicios/jugador';
import { Partida } from '../../modelos/partida';
import { Jugador } from '../../modelos/jugador';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-partida-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './partida-list.html',

})
export class PartidaList {
  partidas = signal<Partida[]>([]);
  jugadores = signal<Jugador[]>([]);

  constructor(
    private partidaService: PartidaService,
    private jugadorService: JugadorService,
    private router: Router
  ) {
    this.cargar();
  }

  async cargar() {
    this.partidas.set(await this.partidaService.listar());
    this.jugadores.set(await this.jugadorService.listar());
  }

  getJugadorNombre(id: any) {
    return this.jugadores()
      .find(j => Number(j.id) === Number(id))
      ?.nickname || 'N/A';
  }

  editar(p: Partida) {
    this.router.navigate(['/partidas/nueva'], {
      state: { partida: p }
    });
  }

  async eliminar(id: number) {
    const ok = confirm('¿Eliminar esta partida?');
    if (!ok) return;

    await this.partidaService.eliminar(id);
    this.cargar();

    (window as any).mostrarToast('Partida eliminada', 'danger');
  }

}



