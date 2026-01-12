import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./presentacion/paginas/lista-avisos/lista-avisos.page')
        .then(m => m.ListaAvisosPage),
  },
  {
    path: 'lista-avisos',
    loadComponent: () =>
      import('./presentacion/paginas/lista-avisos/lista-avisos.page')
        .then(m => m.ListaAvisosPage),
  },
  {
    path: 'crear-aviso',
    loadComponent: () =>
      import('./presentacion/paginas/crear-aviso/crear-aviso.page')
        .then(m => m.CrearAvisoPage),
  },
];
