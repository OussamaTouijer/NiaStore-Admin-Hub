import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProduitService} from "../services/produit.service";
import {Produit} from "../model/produit.model";
import {AcheteurService} from "../services/acheteur.service";
import {Acheteur} from "../model/acheteur.model";

@Component({
  selector: 'app-newacheteur',
  templateUrl: './newacheteur.component.html',
  styleUrl: './newacheteur.component.css'
})
export class NewacheteurComponent implements OnInit {
  public acheteurForm!: FormGroup

  constructor(private fb: FormBuilder, private acheteurService: AcheteurService) {//injecter le service formr builder
  }

  ngOnInit(): void {
    this.acheteurForm = this.fb.group({//construire les champ de formulaire control pour stocker les valeur par dafaut et les valedateur pour valeder les donnee saissir par administrateur

      nom: this.fb.control(''),
      prenom: this.fb.control(''),
      email: this.fb.control(''),
      adresse: this.fb.control(''),
      ville: this.fb.control(''),
      idProduit: this.fb.control('')
    })
  }

  saveAcheteur() {//recupere les donnee de formuler(tous les donnee de la Produit exist dans productForm)

    let acheteur: Acheteur = this.acheteurForm.value;//stocke les valeur dans product

    this.acheteurService.saveAcheteur(acheteur).subscribe({
        next: data => {
          alert("Acheteur est enregistre");
        },
        error: err => {
          console.log(err);
        }
      }
    );


  }
}

