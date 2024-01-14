import {Produit} from "./produit.model";

export interface Acheteur{
  idAcheteur :number,
  nom:string,
  prenom:string,
  email:string,
  adresse:string,
  ville:string,
  idProduit:number,
  produit:Produit
}
