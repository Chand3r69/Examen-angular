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

  }
  async guardar (){
      await this.service.crear(this.jugador());
      alert('Jugador creado');
    }

}
