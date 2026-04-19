import { Injectable } from '@angular/core';
import { IndexedDBService } from './indexeddb';
import { Jugador } from '../modelos/jugador';

@Injectable({ providedIn: 'root' })
export class JugadorService {

  private store = 'jugadores';

  constructor(private db: IndexedDBService) {}

  listar(): Promise<Jugador[]> {
    return this.db.getAll(this.store);
  }

  crear(j: Jugador) {
    return this.db.add(this.store, j);
  }

  eliminar(id: number) {
    return this.db.delete(this.store, id);
  }
  actualizar(j: Jugador) {
    return this.db.update(this.store, j);
  }
}
