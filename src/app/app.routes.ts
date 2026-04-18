import { Routes } from '@angular/router';

import { JugadorList } from './jugador/jugador-list/jugador-list';
import { JugadorForm } from './jugador/jugador-form/jugador-form';

import { PartidaList } from './partida/partida-list/partida-list';
import { PartidaForm } from './partida/partida-form/partida-form';

export const routes: Routes = [

  { path: '', redirectTo: 'jugadores', pathMatch: 'full' },

  { path: 'jugadores', component: JugadorList },
  { path: 'jugadores/nuevo', component: JugadorForm },

  { path: 'partidas', component: PartidaList },
  { path: 'partidas/nueva', component: PartidaForm }

];
