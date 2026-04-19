import { Component, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Jugador } from '../../modelos/jugador';
import { JugadorService } from '../../servicios/jugador';

@Component({
  selector: 'app-jugador-form',
  imports: [FormsModule],
  templateUrl: './jugador-form.html',
})
export class JugadorForm {
  jugador = signal<Jugador>({
    nickname: '',
    nivel: 1,
    fechaRegistro: ''

  });

  constructor(private service: JugadorService) {

    const nav = history.state;
    console.log('EDIT DATA:', nav.jugador);

    if (nav.jugador) {
      this.jugador.set({
      ...nav.jugador,
      id: nav.jugador.id // 👈 FORZAR ID
    });
    }
  }
  async guardar() {
    const j = this.jugador();

    if (j.id) {
      await this.service.actualizar(j);
      alert('Jugador actualizado');
    } else {
      await this.service.crear(j);
      alert('Jugador creado');
    }
    location.href = '/jugadores';
  }



}
