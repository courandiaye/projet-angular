import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './index/index.component';
import { ComponentsComponent } from './components/components.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { DossierComponent } from './dossier/dossier.component';
import { EquipeComponent } from './components/equipe/equipe.component';

   const routes: Routes = [
  { path: "", component:IndexComponent},
  { path: "connexion", component:LoginComponent},
  { path: "inscription", component:RegisterComponent},
  { path: "dashboard", component:ComponentsComponent},
  { path: "index", component:IndexComponent},
  { path: "CRÉER UN FORMULAIRE", component:FormulaireComponent},
  { path: "creer-un-nouveau-dossier", component:DossierComponent},
  { path: "equipe", component:EquipeComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
