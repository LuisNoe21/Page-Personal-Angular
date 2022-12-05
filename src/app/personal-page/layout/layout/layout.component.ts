// import * as icons from 'ionicons/icons';
import { Component } from '@angular/core';
// import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  mostrar = false;

  mostrarMenu() {
    this.mostrar = !this.mostrar;
  }
}
