import { Component } from '@angular/core';
import { JugadorService } from '../../servicios/jugador';
import { Jugador } from '../../modelos/jugador';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jugador-list',
  imports: [CommonModule],
  templateUrl: './jugador-list.html',
  styleUrl: './jugador-list.css',
})
export class JugadorList {
  jugadores: Jugador[] = [];

  constructor(private jugadorService: JugadorService) {}

  ngOnInit(): void {
    this.cargarJugadores();
  }

  cargarJugadores() {
    this.jugadorService.listar().then(data => {
      this.jugadores = data;
    });
  }

  eliminar(id: number) {
    this.jugadorService.eliminar(id).then(() => {
      this.cargarJugadores();
    });
  }


}
