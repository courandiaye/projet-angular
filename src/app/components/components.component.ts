import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent implements OnInit{
closeModal() {
throw new Error('Method not implemented.');
}
modal: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  gotoCreateNewFolder(){
      this.router.navigate(['/creer-un-nouveau-dossier']);  
  }
}
