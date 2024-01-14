import {Produit} from "./produit.model";
import {Acheteur} from "./acheteur.model";

export interface Vente{
  idV :number,
  idA :number,
  idP :number,
  acheteur:Acheteur,
  produit:Produit
}
