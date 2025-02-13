import { Component } from '@angular/core';
import {HomeComponent} from "../home/home.component";
import {ProduitsComponent} from "../produits/produits.component";
import {AcheteursComponent} from "../acheteurs/acheteurs.component";
import {VentesComponent} from "../ventes/ventes.component";
import {NewproduitComponent} from "../newproduit/newproduit.component";
import {NewacheteurComponent} from "../newacheteur/newacheteur.component";
import {NewventeComponent} from "../newvente/newvente.component";

interface NavLinkItem {
  path: string;
  display: any;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year: number = new Date().getFullYear();

  quickLinks: NavLinkItem[] = [
    {path : "/home" , display : 'Home'},
    {path : "/produits" , display : 'Produits'},
    {path : "/acheteurs" , display : 'Acheteurs'},
    {path : "/ventes" , display : 'Ventes'},
    //{path : "notifications" , component : NotificationComponent, canActivate:[AuthGuard], data : { roles:['ADMIN'] }},
  ];

  socialLinks = [
    { icon: 'ri-facebook-circle-fill', link: '#' },
    { icon: 'ri-instagram-line', link: 'https://www.instagram.com/oussama_touijer/' },
    { icon: 'ri-linkedin-box-fill', link: 'https://www.linkedin.com/in/oussama-touijer-861360292/' },
    { icon: 'ri-youtube-fill', link: '#' }
  ];

  contactInfo = [
    {
      icon: 'ri-map-pin-line',
      label: 'Address:',
      value: 'Rabat, Morocco'
    },
    {
      icon: 'ri-mail-line',
      label: 'Email:',
      value: 'oussama5touijer@gmail.com'
    },
    {
      icon: 'ri-phone-line',
      label: 'Phone:',
      value: '+212 657-740692'
    }
  ];
}
