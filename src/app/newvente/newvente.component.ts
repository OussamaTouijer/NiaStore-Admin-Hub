import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {VenteService} from "../services/vente.service";
import {Vente} from "../model/vente.model";
import {ProduitService} from "../services/produit.service";
import {Produit} from "../model/produit.model";
import {Observable} from "rxjs";
import {ProduitsComponent} from "../produits/produits.component";
import {AcheteurService} from "../services/acheteur.service";
import {Acheteur} from "../model/acheteur.model";

@Component({
  selector: 'app-newvente',
  templateUrl: './newvente.component.html',
  styleUrl: './newvente.component.css'
})
export class NewventeComponent implements OnInit{
  public venteForm!: FormGroup;
  public produitsid!: Array<Produit>;
  public acheteursid!: Array<Acheteur>;


  constructor(private fb: FormBuilder, private venteService: VenteService, private produitService: ProduitService,private acheteurService:AcheteurService) { }

  ngOnInit(): void {
    this.getAllProduits();
    this.getAllAcheteurs();
    this.venteForm = this.fb.group({
      idA: this.fb.control(''),
      idP: this.fb.control('')
    });
  }

  private getAllProduits() {
    this.produitService.getAllProducts().subscribe({
      next: data => {
        this.produitsid = data;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  private getAllAcheteurs() {
    this.acheteurService.getAllAcheteurs().subscribe({
      next : data => {
        this.acheteursid=data;
      },
      error : err => {
        console.log(err);
      }
    })
  }

  savevente() {//recupere les donnee de formuler(tous les donnee de la Produit exist dans productForm)

    let vente : Vente=this.venteForm.value;//stocke les valeur dans product

    this.venteService.saveVente(vente).subscribe({
        next : data => {
          alert("Vente est enregistre");
        },
        error : err => {
          console.log(err);
        }
      }
    );



  }
}

