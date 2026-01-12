import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { APP_INITIALIZER } from '@angular/core';
import { AvisoService } from './app/negocio/servicios/aviso.service';
import { provideIonicAngular } from '@ionic/angular/standalone';

function initApp(avisoService: AvisoService) {
  return () => avisoService.cargarAvisos();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),   // 🔥 ESTO RESTAURA EL LOOK IONIC
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [AvisoService],
      multi: true
    }
  ]
});
