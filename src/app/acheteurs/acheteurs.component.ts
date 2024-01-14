import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {Acheteur} from "../model/acheteur.model";
import {AcheteurService} from "../services/acheteur.service";

@Component({
  selector: 'app-acheteurs',
  templateUrl: './acheteurs.component.html',
  styleUrls: ['./acheteurs.component.css']  // Corrected property name
})
export class AcheteursComponent implements OnInit{
  public acheteurs : Array<Acheteur>=[];
  public keyword : string="";
  constructor(private acheteurService:AcheteurService) {//injection des dependence

  }

  ngOnInit(): void {
    this.getAllAcheteurs();
  }


  private getAllAcheteurs() {
    this.acheteurService.getAllAcheteurs().subscribe({
      next : data => {
        this.acheteurs=data;
      },
      error : err => {
        console.log(err);
      }
    })
  }



  handleDeleteAcheteur(a: Acheteur) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Êtes-vous sûr de vouloir supprimer ce acheteur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DCF2F1',
      cancelButtonColor: '#7FC7D9',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.acheteurService.deleteAcheteur(a).subscribe({
          next: value => {
            this.acheteurs = this.acheteurs.filter(v => a.idAcheteur !== v.idAcheteur);
            Swal.fire('Supprimé!', 'Le acheteur a été supprimé.', 'success');
          },
          error: err => {
            console.log(err);
            Swal.fire('Erreur', 'Une erreur est survenue lors de la suppression du acheteur.', 'error');
          }
        });
      }
    });
  }

  handleUpdateAcheteur(a: Acheteur) {
    Swal.fire({
      title: 'Mise à jour du Acheteurs',
      html:
        `<label for="nom">Nom:</label>
      <input id="nom" class="swal2-input" value="${a.nom}" required><br>
      <label for="prenom">Prenom :</label>
      <input id="prenom" class="swal2-input" value="${a.prenom}" required><br>
      <label for="email">Email :</label>
      <input id="email" type="email" class="swal2-input" value="${a.email}" required><br>
      <label for="adresse">Adresse :</label>
      <input id="adresse"  class="swal2-input" value="${a.adresse}" required><br>
      <label for="ville">Ville :</label>
      <input id="ville" class="swal2-input" value="${a.ville}" required>
      <label for="idP">IdProduit:</label>
      <input id="idP" type="number" class="swal2-input" value="${a.idProduit}" required>`,
      focusConfirm: false,
      preConfirm: () => {
        // @ts-ignore
        const nom = Swal.getPopup().querySelector('#nom').value;
        // @ts-ignore
        const prenom = Swal.getPopup().querySelector('#prenom').value;
        // @ts-ignore
        const email = Swal.getPopup().querySelector('#email').value;
        // @ts-ignore
        const adresse = Swal.getPopup().querySelector('#adresse').value;
        // @ts-ignore
        const ville = Swal.getPopup().querySelector('#ville').value;
        // @ts-ignore
        const idProduit = Swal.getPopup().querySelector('#idP').value;

        const updatedAchteur: Acheteur = {
          idAcheteur: a.idAcheteur,
          nom,
          prenom,
          email,
          adresse,
          ville,
          idProduit,
          produit:a.produit
        };

        this.acheteurService.updateAcheteur(updatedAchteur).subscribe({
          next: value => {
            const index = this.acheteurs.findIndex(ache => ache.idAcheteur === a.idAcheteur);
            if (index !== -1) {
              this.acheteurs[index] = updatedAchteur;
              Swal.fire('Mis à jour!', 'Le acheteur a été mis à jour.', 'success');
            }
          },
          error: err => {
            console.log(err);
            Swal.fire('Erreur', 'Une erreur est survenue lors de la mise à jour du acheteur.', 'error');
          }
        });
      }
    });
  }


  cherchAcheteurs(keyword: string) {
    this.acheteurService.recherchAcheteurs(keyword).subscribe({
      next: data => {
        this.acheteurs = data;
        console.log(data);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
