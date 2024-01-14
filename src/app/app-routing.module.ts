import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProduitsComponent} from "./produits/produits.component";
import {AcheteursComponent} from "./acheteurs/acheteurs.component";
import {VentesComponent} from "./ventes/ventes.component";
import {NotificationComponent} from "./notification/notification.component";
import {NewproduitComponent} from "./newproduit/newproduit.component";
import {AppComponent} from "./app.component";
import {NewacheteurComponent} from "./newacheteur/newacheteur.component";
import {NewventeComponent} from "./newvente/newvente.component";

const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "home" , component : HomeComponent},
  {path : "produits" , component : ProduitsComponent},
  {path : "acheteurs" , component : AcheteursComponent},
  {path : "ventes" , component : VentesComponent},
  {path : "notifications" , component : NotificationComponent},
  {path : "newproduit" , component : NewproduitComponent},
  {path : "newacheteur" , component : NewacheteurComponent},
  {path : "newvente" , component : NewventeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
