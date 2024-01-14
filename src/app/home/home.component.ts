import {Component, OnInit} from '@angular/core';
import {HomeService} from "../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public nbrProduits : number =0;
  public nbrAcheteurs : number =0;
  public nbrVentes : number =0;



  constructor(private homeService:HomeService) {
  }
  ngOnInit(): void {
    this.countProduit();
    this.countAcheteur();
    this.countVente();
  }


  private countProduit() {
    this.homeService.getNumberProduits().subscribe({
      next: data => {
        this.nbrProduits = data;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  private countAcheteur() {
    this.homeService.getNumberAcheteurs().subscribe({
      next: data => {
        this.nbrAcheteurs = data;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  private countVente() {
    this.homeService.getNumberVentes().subscribe({
      next: data => {
        this.nbrVentes = data;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  }



