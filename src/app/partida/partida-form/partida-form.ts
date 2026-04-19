import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Partida } from '../../modelos/partida';
import { Jugador } from '../../modelos/jugador';
import { PartidaService } from '../../servicios/partida';
import { JugadorService } from '../../servicios/jugador';

@Component({
  selector: 'app-partida-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './partida-form.html',
  styleUrl: './partida-form.css',
})
export class PartidaForm {

  jugadores = signal<Jugador[]>([]);

  partida = signal<Partida>({
    puntuacion: 0,
    duracion: 0,
    fecha: '',
    jugadorId: 0
  });

  constructor(
    private jugadorService: JugadorService,
    private partidaService: PartidaService,
    private router: Router
  ) {
    this.cargarJugadores();

    const nav = history.state;

    if (nav?.partida) {
      this.partida.set({ ...nav.partida });
    }
  }

  async cargarJugadores() {
    this.jugadores.set(await this.jugadorService.listar());
  }

  async guardar() {
    const p = this.partida();

    if (!p.jugadorId) {
      this.mostrarToast('Seleccione un jugador', 'danger');
      return;
    }

    if (p.id) {
      await this.partidaService.actualizar(p);
      this.mostrarToast('Partida actualizada');
    } else {
      await this.partidaService.crear(p);
      this.mostrarToast('Partida creada');
    }

    // 🔥 NO reload, navegación Angular correcta
    this.router.navigate(['/partidas']);
  }

  mostrarToast(msg: string, tipo: string = 'success') {
    const toastEl = document.getElementById('toastMsg');
    const text = document.getElementById('toastText');

    if (toastEl && text) {
      text.innerText = msg;

      toastEl.className = `toast align-items-center text-bg-${tipo} border-0`;

      const toast = new (window as any).bootstrap.Toast(toastEl);
      toast.show();
    }
  }
}
