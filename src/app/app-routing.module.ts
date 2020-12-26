import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContenuComponent } from './contenu/contenu.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { ListeMsgEnvoyeeComponent } from './liste-msg-envoyee/liste-msg-envoyee.component';
import { SendComponent } from './send/send.component';

const routes: Routes = [
  { path:"contenu",component:ContenuComponent},
  { path:"ListeMsgEnv",component:ListeMsgEnvoyeeComponent},
  { path:"send",component:SendComponent},
  { path:"inscrire",component:InscrireComponent},
  { path:"",component:ConnexionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
