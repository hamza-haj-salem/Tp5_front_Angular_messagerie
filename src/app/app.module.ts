import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContenuComponent } from './contenu/contenu.component';
import { SendComponent } from './send/send.component';
import { ListeMsgEnvoyeeComponent } from './liste-msg-envoyee/liste-msg-envoyee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { InscrireComponent } from './inscrire/inscrire.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ContenuComponent,
    SendComponent,
    ListeMsgEnvoyeeComponent,
    InscrireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
