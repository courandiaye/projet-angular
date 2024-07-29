import { Component } from '@angular/core';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrl: './dossier.component.css',
  
  
})
export class DossierComponent {
  modal3!: boolean;
 openModal3() {
    this.modal3 = true;
  }

  toggleModal3() {
    this.modal3 = !this.modal3;
  }

  closeModals3() {
    this.modal3 = false;
  }

}
