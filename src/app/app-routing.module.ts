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
//import {AuthGuard} from "./guards/auth.guard";

/*const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "home" , component : HomeComponent, canActivate:[AuthGuard], data : { roles:['ADMIN'] }},
  {path : "produits" , component : ProduitsComponent, canActivate:[AuthGuard], data : { roles:['ADMIN'] }},
  {path : "acheteurs" , component : AcheteursComponent, canActivate:[AuthGuard], data : { roles:['ADMIN'] }},
  {path : "ventes" , component : VentesComponent, canActivate:[AuthGuard], data : { roles:['ADMIN'] }},
  //{path : "notifications" , component : NotificationComponent, canActivate:[AuthGuard], data : { roles:['ADMIN'] }},
  {path : "newproduit" , component : NewproduitComponent, canActivate:[AuthGuard], data : { roles:['ADMIN'] }},
  {path : "newacheteur" , component : NewacheteurComponent, canActivate:[AuthGuard], data : { roles:['ADMIN'] }},
  {path : "newvente" , component : NewventeComponent, canActivate:[AuthGuard], data : { roles:['ADMIN'] }}

];
*/
const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "home" , component : HomeComponent},
  {path : "produits" , component : ProduitsComponent},
  {path : "acheteurs" , component : AcheteursComponent},
  {path : "ventes" , component : VentesComponent},
  //{path : "notifications" , component : NotificationComponent, canActivate:[AuthGuard], data : { roles:['ADMIN'] }},
  {path : "newproduit" , component : NewproduitComponent},
  {path : "newacheteur" , component : NewacheteurComponent},
  {path : "newvente" , component : NewventeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
