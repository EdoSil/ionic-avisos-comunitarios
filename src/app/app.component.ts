import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  IonApp,
  IonRouterOutlet
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    RouterModule
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {}
}
