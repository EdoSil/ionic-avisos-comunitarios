import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AvisoService } from 'src/app/negocio/servicios/aviso.service';
import { Aviso } from 'src/app/modelo/entidades/aviso.model';
import { ListaAvisosComponent } from '../../componentes/lista-avisos/lista-avisos.component';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-lista-avisos-page',
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    RouterLink, IonButton, ListaAvisosComponent
  ],
  templateUrl: './lista-avisos.page.html',
  styleUrls: ['./lista-avisos.page.scss'],})
export class ListaAvisosPage implements OnInit {

  // crear array de avisos de tipo Aviso
  avisos: Aviso[] = [];

  // inyectar el servicio de avisos en el constructor
  constructor(private avisoService: AvisoService) { }

  // inicializar el array de avisos al cargar el componente
  ngOnInit(): void {

  this.avisoService.cargarAvisos().then(() => {
     this.avisos = this.avisoService.obtenerAvisos();
  });

  /* BLOQUE DE CÓDIGO PARA PRUEBAS INICIALES
    if (this.avisos.length === 0) {
      // ingresar algunos avisos de ejemplo
      this.avisoService.agregarAviso({
        id: 1,
        titulo: 'Mascota perdida',
        descripcion: 'Se ha perdido un perro en el parque central.',
        fechaCreacion: new Date()
      } as Aviso);

      this.avisos = this.avisoService.obtenerAvisos();
    }
      */
  }

  // Método para manejar la eliminación de un aviso
  async onEliminarAviso(id: number): Promise<void> {
  await this.avisoService.eliminarAviso(id);
  this.avisos = this.avisoService.obtenerAvisos();
}

}

