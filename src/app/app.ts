import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Examen');
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


