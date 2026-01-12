import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Plugin Camera de Capacitor para capturar imágenes
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { camera, save } from 'ionicons/icons';


import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonTextarea,
  IonButtons, 
  IonBackButton,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { AvisoService } from 'src/app/negocio/servicios/aviso.service';

@Component({
  selector: 'app-crear-aviso',
  standalone: true,
  templateUrl: './crear-aviso.page.html',
  styleUrls: ['./crear-aviso.page.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonTextarea,
    IonButton,
    IonButtons,
    IonBackButton, 
    IonIcon
  ]
})
export class CrearAvisoPage {

  formularioAviso: FormGroup;

  // Almacena la imagen capturada en formato base64
  fotoBase64: string | null = null;

  cameraIcon = camera;
  saveIcon = save;

  /**
   * Aquí se reinicia el formulario para evitar
   * que queden datos del aviso anterior.
   */
  ionViewWillEnter(): void {
    this.formularioAviso.reset();
    this.fotoBase64 = null; // limpia la foto si existía
  }

  constructor(private fb: FormBuilder,
              private avisoService: AvisoService, 
              private router: Router) {

    this.formularioAviso = this.fb.group({
      titulo: [ '',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      descripcion: [
        '',
        [
          Validators.required,
          Validators.minLength(20)
        ]
      ]
    });
  }

  // Método solo para probar validaciones (aún no guarda)
 async enviar(): Promise<void> {
  if (this.formularioAviso.invalid) {
    this.formularioAviso.markAllAsTouched();
    return;
  }

  await this.avisoService.agregarAviso({
    id: Date.now(),
    titulo: this.formularioAviso.value.titulo,
    descripcion: this.formularioAviso.value.descripcion,
    fechaCreacion: new Date(),
  // Se guarda la imagen tomada (si existe)
    imagen: this.fotoBase64 ?? undefined
  });

  // Limpieza explícita 
    this.formularioAviso.reset();
    this.fotoBase64 = null;

this.router.navigate(['/lista-avisos']);
  
}

/**
 * Abre la cámara del dispositivo y captura una foto.
 * La imagen se guarda en formato base64 para poder
 * mostrarla fácilmente en la vista.
 */
async tomarFoto(): Promise<void> {
  const imagen = await Camera.getPhoto({
    quality: 70,                 // Calidad de la imagen
    allowEditing: false,         // No permite edición
    resultType: CameraResultType.Base64, // Resultado en base64
    source: CameraSource.Camera  // Usa la cámara (no galería)
  });

  // Se construye el string base64 compatible con <img>
  this.fotoBase64 = `data:image/jpeg;base64,${imagen.base64String}`;
}

}
