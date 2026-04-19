import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorService } from '../../servicios/jugador';
import { Jugador } from '../../modelos/jugador';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugador-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './jugador-list.html'
})
export class JugadorList {

  jugadores = signal<Jugador[]>([]);

  constructor(
    private service: JugadorService,
    private router: Router
  ) {
    this.cargar();
  }

  async cargar() {
    const data = await this.service.listar();
    this.jugadores.set(data);
  }

  async eliminar(id: number) {
      await this.service.eliminar(id);
      await this.cargar();
  }

  editar(j: Jugador) {
    this.router.navigate(['/jugadores/nuevo'], {
      state: { jugador: j }
    });
  }

}
