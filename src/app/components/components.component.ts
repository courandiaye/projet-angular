import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  gotoCreateNewFolder(){
      this.router.navigate(['/creer-un-nouveau-dossier']);  
  }
}
