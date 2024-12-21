import { Component } from '@angular/core';
import {Router} from "@angular/router";

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

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]).then(() => {
      window.location.reload();
    });
  }
  navigateToHome(): void {
    this.router.navigate(['../home']);  // Utilisez le chemin relatif ici
  }
}
