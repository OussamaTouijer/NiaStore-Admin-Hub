import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProduitService} from "../services/produit.service";
import {Produit} from "../model/produit.model";

@Component({
  selector: 'app-newproduit',
  templateUrl: './newproduit.component.html',
  styleUrl: './newproduit.component.css'
})
export class NewproduitComponent implements OnInit{
  public productForm! : FormGroup

  constructor(private fb:FormBuilder ,private produitService:ProduitService) {//injecter le service formr builder
  }

  ngOnInit(): void {
    this.productForm=this.fb.group({//construire les champ de formulaire control pour stocker les valeur par dafaut et les valedateur pour valeder les donnee saissir par administrateur

      nom:this.fb.control(''),
      marque:this.fb.control(''),
      description:this.fb.control(''),
      prix:this.fb.control(''),
      quantite:this.fb.control('')
    })
  }

  saveProduct() {//recupere les donnee de formuler(tous les donnee de la Produit exist dans productForm)

    let produit : Produit=this.productForm.value;//stocke les valeur dans product

    this.produitService.saveProduct(produit).subscribe({
      next : data => {
        alert("Produit est enregistre");
      },
      error : err => {
        console.log(err);
      }
    }
    );



  }
}
