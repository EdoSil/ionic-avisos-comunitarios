import { Component, Input, Output, EventEmitter } from '@angular/core';
// componentes Ionic utilizados en el HTML
import { IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Aviso } from 'src/app/modelo/entidades/aviso.model';
import { AlertController } from '@ionic/angular/standalone';
import { FechaPipe } from '../../pipes/fecha.pipe';
import { CommonModule } from '@angular/common';
import { trash } from 'ionicons/icons';


@Component({
  selector: 'app-item-aviso',
  standalone: true,
  imports: [IonItem, IonLabel, IonButton, FechaPipe, CommonModule, IonIcon],
  templateUrl: './item-aviso.component.html',
  styleUrls: ['./item-aviso.component.scss'],
})
export class ItemAvisoComponent {

  constructor(private alertController: AlertController) {}

  trashIcon = trash;


  // decorador Input para recibir un aviso desde el componente padre
  @Input() aviso!: Aviso;

  // emitter para notificar la eliminación del aviso
  @Output() eliminar = new EventEmitter<number>();

  onEliminacion(): void {
    this.eliminar.emit(this.aviso.id);
  }

  async confirmarEliminacion(): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Eliminar aviso',
    message: '¿Estás seguro de eliminar este aviso?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Eliminar',
        role: 'destructive',
        handler: () => {
          this.onEliminacion();
        }
      }
    ]
  });

  await alert.present();
}

}



  


