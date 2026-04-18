import { Injectable } from '@angular/core';
import { IndexedDBService } from './indexeddb';
import { Partida } from '../modelos/partida';

@Injectable({ providedIn: 'root' })
export class PartidaService {

  private store = 'partidas';

  constructor(private db: IndexedDBService) {}

  listar(): Promise<Partida[]> {
    return this.db.getAll(this.store);
  }

  crear(p: Partida) {
    return this.db.add(this.store, p);
  }

  eliminar(id: number) {
    return this.db.delete(this.store, id);
  }
}
