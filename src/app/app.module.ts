import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { VentesComponent } from './ventes/ventes.component';
import { AcheteursComponent } from './acheteurs/acheteurs.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewproduitComponent } from './newproduit/newproduit.component';
import { NewacheteurComponent } from './newacheteur/newacheteur.component';
import { NewventeComponent } from './newvente/newvente.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


/*function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'niastore-realm',
        clientId: 'niastore-angular-client'
      },
      initOptions: {
        onLoad: 'check-sso',//authentifier une seule fois pour acceder dans tous les element de application
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}*/

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    VentesComponent,
    AcheteursComponent,
    HomeComponent,
    NotificationComponent,
    NewproduitComponent,
    NewacheteurComponent,
    NewventeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    KeycloakAngularModule,
    NgxPaginationModule // Ajouter ici
  ],


 /* providers: [
    {provide : APP_INITIALIZER, deps : [KeycloakService],useFactory : initializeKeycloak, multi : true}//expose la fonction comme un service qui executer aux moment initialitaion de application (utilise provider de type APP_INITIALIZER)
  ],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
