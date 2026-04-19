import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private service: JugadorService,
    private router: Router
  ) {

    const nav = history.state;

    if (nav?.jugador) {
      this.jugador.set({
        ...nav.jugador,
        id: nav.jugador.id
      });
    }
  }

  async guardar() {
    const j = this.jugador();

    if (!j.nickname?.trim()) {
      this.mostrarToast('El nickname es obligatorio');
      return;
    }

    if (j.nivel <= 0) {
      this.mostrarToast('Nivel inválido');
      return;
    }

    if (j.id) {
      await this.service.actualizar(j);
      this.mostrarToast('Jugador actualizado');
    } else {
      await this.service.crear(j);
      this.mostrarToast('Jugador creado');
    }

    this.router.navigate(['/jugadores']);
  }

  mostrarToast(msg: string) {
    const toastEl = document.getElementById('toastMsg');
    const text = document.getElementById('toastText');

    if (toastEl && text) {
      text.innerText = msg;

      const toast = new (window as any).bootstrap.Toast(toastEl);
      toast.show();
    }
  }
}
