import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Aviso } from 'src/app/modelo/entidades/aviso.model';

const AVISOS_KEY = 'avisos';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {

  private avisos: Aviso[] = [];

  constructor() {
    console.log('AvisoService instancia creada', Date.now());
  }

  async cargarAvisos(): Promise<void> {
    const { value } = await Preferences.get({ key: AVISOS_KEY });
    this.avisos = value ? JSON.parse(value) : [];
  }

  obtenerAvisos(): Aviso[] {
    return this.avisos;
  }

  async agregarAviso(aviso: Aviso): Promise<void> {
    this.avisos.push(aviso);
    await Preferences.set({
      key: AVISOS_KEY,
      value: JSON.stringify(this.avisos)
    });
  }

  async eliminarAviso(id: number): Promise<void> {
    this.avisos = this.avisos.filter(a => a.id !== id);
    await Preferences.set({
      key: AVISOS_KEY,
      value: JSON.stringify(this.avisos)
    });
  }
}
