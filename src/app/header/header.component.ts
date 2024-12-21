import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navLinks = [
    { path: '/home', display: 'Home' },
    { path: '/produits', display: 'Produits' },
    { path: '/acheteurs', display: 'Acheteurs' },
    { path: '/ventes', display: 'Ventes' },
  ];

  socialLinks = [
    { icon: 'ri-facebook-circle-fill', link: '#' },
    { icon: 'ri-instagram-line', link: '#' },
    { icon: 'ri-linkedin-box-fill', link: '#' },
    { icon: 'ri-youtube-fill', link: '#' },
  ];
}
