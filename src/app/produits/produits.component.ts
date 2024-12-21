import {Component, OnInit, signal} from '@angular/core';
import {ProduitService} from "../services/produit.service";
import {Produit} from "../model/produit.model";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit{
  public produits : Array<Produit>=[];
  public keyword : string="";
  currentPage = 1;
  constructor(private produitService:ProduitService) {//injection des dependence

  }

  ngOnInit(): void {
    this.getAllProduits();
  }


  private getAllProduits() {
    this.produitService.getAllProducts().subscribe({
      next : data => {
        this.produits=data;
      },
      error : err => {
        console.log(err);
      }
    })
  }



  handleDelete(p: Produit) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Êtes-vous sûr de vouloir supprimer ce produit ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DCF2F1',
      cancelButtonColor: '#7FC7D9',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.produitService.deleteProduct(p).subscribe({
          next: value => {
            this.produits = this.produits.filter(v => p.idProduit !== v.idProduit);
            Swal.fire('Supprimé!', 'Le produit a été supprimé.', 'success');
          },
          error: err => {
            console.log(err);
            Swal.fire('Erreur', 'Une erreur est survenue lors de la suppression du produit.', 'error');
          }
        });
      }
    });
  }

  handleUpdate(p: Produit) {
    Swal.fire({
      title: 'Mise à jour du produit',
      html:
        `<label for="nom">Nom :</label>
      <input id="nom" class="swal2-input" value="${p.nom}" required>
      <label for="marque">Marque :</label>
      <input id="marque" class="swal2-input" value="${p.marque}" required>
      <label for="desc">Description :</label>
      <textarea id="desc" class="swal2-input" required>${p.description}</textarea><br>
      <label for="prix">Prix:</label>
      <input id="prix" type="number" class="swal2-input" value="${p.prix}" required>
      <label for="quantite">Quantité:</label>
      <input id="quantite" type="number" class="swal2-input" value="${p.quantite}" required>`,
      focusConfirm: false,
      preConfirm: () => {
        // @ts-ignore
        const nom = Swal.getPopup().querySelector('#nom').value;
        // @ts-ignore
        const marque = Swal.getPopup().querySelector('#marque').value;
        // @ts-ignore
        const description = Swal.getPopup().querySelector('#desc').value;
        // @ts-ignore
        const prix = Swal.getPopup().querySelector('#prix').value;
        // @ts-ignore
        const quantite = Swal.getPopup().querySelector('#quantite').value;

        const updatedProduit: Produit = {
          idProduit: p.idProduit,
          nom,
          marque,
          description,
          prix: parseFloat(prix),
          quantite: parseInt(quantite)
        };

        this.produitService.updateProduit(updatedProduit).subscribe({
          next: value => {
            const index = this.produits.findIndex(prod => prod.idProduit === p.idProduit);
            if (index !== -1) {
              this.produits[index] = updatedProduit;
              Swal.fire('Mis à jour!', 'Le produit a été mis à jour.', 'success');
            }
          },
          error: err => {
            console.log(err);
            Swal.fire('Erreur', 'Une erreur est survenue lors de la mise à jour du produit.', 'error');
          }
        });
      }
    });
  }


  cherchProduits(keyword: string) {
      this.produitService.recherchProduits(keyword).subscribe({
        next : data => {
          this.produits=data;
          console.log(data);
        },
        error : err => {
          console.log(err);
        }
      })
    }
}
