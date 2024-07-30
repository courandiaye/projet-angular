import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './index/index.component';
import { ComponentsComponent } from './components/components.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { DossierComponent } from './dossier/dossier.component';
import { EquipeComponent } from './components/equipe/equipe.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    ComponentsComponent,
    FormulaireComponent,
    DossierComponent,
    EquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
