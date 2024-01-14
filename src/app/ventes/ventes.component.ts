import {Component, OnInit} from '@angular/core';
import {Produit} from "../model/produit.model";
import {ProduitService} from "../services/produit.service";
import Swal from "sweetalert2";
import {Vente} from "../model/vente.model";
import {VenteService} from "../services/vente.service";

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrl: './ventes.component.css'
})
export class VentesComponent implements OnInit{
  public ventes : Array<Vente>=[];
  public id!: number;
  constructor(private venteService:VenteService) {//injection des dependence

  }

  ngOnInit(): void {
    this.getAllVentes();
  }


  private getAllVentes() {
    this.venteService.getAllVentes().subscribe({
      next : data => {
        this.ventes=data;
      },
      error : err => {
        console.log(err);
      }
    })
  }



  handleDelete(v: Vente) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Êtes-vous sûr de vouloir supprimer ce vente ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DCF2F1',
      cancelButtonColor: '#7FC7D9',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.venteService.deleteVente(v).subscribe({
          next: value => {
            this.ventes = this.ventes.filter(value => v.idV !== value.idV);
            Swal.fire('Supprimé!', 'Le vente a été supprimé.', 'success');
          },
          error: err => {
            console.log(err);
            Swal.fire('Erreur', 'Une erreur est survenue lors de la suppression du vente.', 'error');
          }
        });
      }
    });
  }

  handleUpdate(v: Vente) {
    Swal.fire({
      title: 'Mise à jour du vente',
      html:
        `<label for="idAcheteur">IdAcheteur :</label>
      <input id="idAcheteur" class="swal2-input" value="${v.idA}" required>
      <label for="idProduit">IdProduit :</label>
      <input id="idProduit" class="swal2-input" value="${v.idP}" required>`,
      focusConfirm: false,
      preConfirm: () => {
        // @ts-ignore
        const idP = Swal.getPopup().querySelector('#idProduit').value;
        // @ts-ignore
        const idA = Swal.getPopup().querySelector('#idAcheteur').value;

        const updatedVente: Vente = {
          idV: v.idV,
          idA,
          idP,
          acheteur: v.acheteur,
          produit: v.produit
        };

        this.venteService.updateVente(updatedVente).subscribe({
          next: value => {
            const index = this.ventes.findIndex(prod => prod.idV === v.idV);
            if (index !== -1) {
              this.ventes[index] = updatedVente;
              Swal.fire('Mis à jour!', 'Le vente a été mis à jour.', 'success');
            }
          },
          error: err => {
            console.log(err);
            Swal.fire('Erreur', 'Une erreur est survenue lors de la mise à jour du vente.', 'error');
          }
        });
      }
    });
  }


  cherchVentes(id: number) {
    this.venteService.recherchVente(id).subscribe({
      next : data => {
        this.ventes=data;
        console.log(data);
      },
      error : err => {
        console.log(err);
      }
    })
  }

}
