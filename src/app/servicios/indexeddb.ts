import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  private dbPromise: Promise<IDBPDatabase>;

  constructor() {
    this.dbPromise = openDB('game-db', 1, {
      upgrade(db) {

        if (!db.objectStoreNames.contains('jugadores')) {
          db.createObjectStore('jugadores', {
            keyPath: 'id',
            autoIncrement: true
          });
        }

        if (!db.objectStoreNames.contains('partidas')) {
          const store = db.createObjectStore('partidas', {
            keyPath: 'id',
            autoIncrement: true
          });

          store.createIndex('jugadorId', 'jugadorId');
        }
      }
    });
  }

  async add(store: string, data: any) {
    return (await this.dbPromise).add(store, data);
  }

  async getAll(store: string) {
    return (await this.dbPromise).getAll(store);
  }

  async delete(store: string, id: number) {
    return (await this.dbPromise).delete(store, id);
  }

  async update(store: string, data: any) {
    if (!data.id) {
      throw new Error('ID requerido para actualizar');
    }

    return (await this.dbPromise).put(store, data);
  }


}
