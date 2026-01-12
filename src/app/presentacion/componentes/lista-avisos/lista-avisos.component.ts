import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes Ionic utilizados en el HTML
import { IonList } from '@ionic/angular/standalone';

// importación del modelo
import { Aviso } from 'src/app/modelo/entidades/aviso.model';

// componente hijo
import { ItemAvisoComponent } from '../item-aviso/item-aviso.component';

@Component({
  selector: 'app-lista-avisos',
  standalone: true,
  imports: [
    CommonModule,      // *ngFor
    IonList,           // ion-list
    ItemAvisoComponent // app-item-aviso
  ],
  templateUrl: './lista-avisos.component.html',
  styleUrls: ['./lista-avisos.component.scss'],
})
export class ListaAvisosComponent {

  // recibe la lista de avisos desde la Page
  @Input() avisos: Aviso[] = [];

  // emite el id del aviso a eliminar hacia la Page
  @Output() eliminarAviso = new EventEmitter<number>();

  // recibe el evento desde ItemAvisoComponent y lo re-emite
  onEliminar(id: number): void {
    this.eliminarAviso.emit(id);
  }
}
