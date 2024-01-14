import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    NewventeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
