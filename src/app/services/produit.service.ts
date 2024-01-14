import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../model/produit.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  public getAllProducts(){
    return this.http.get<Array<Produit>>("http://localhost:8888/PRODUIT-SERVICE/produits");
  }
  public deleteProduct(produit:Produit){
    return this.http.delete<any>(`http://localhost:8888/PRODUIT-SERVICE/produits/${produit.idProduit}`);
  }

  public updateProduit(produit: Produit) {
    return this.http.put<any>(
      `http://localhost:8888/PRODUIT-SERVICE/produits/${produit.idProduit}`,
      produit
    );
  }

  public postProduit(produit : Produit){
    return this.http.post("http://localhost:8888/PRODUIT-SERVICE/produits",
      produit
      );
  }

  public recherchProduits(keyword:string){
    return this.http.get<Array<Produit>>(`http://localhost:8888/PRODUIT-SERVICE/produits/nom_like?keyword=${keyword}`);
  }


  saveProduct(produit: Produit) {
    return this.http.post<Produit>(`http://localhost:8888/PRODUIT-SERVICE/produits`,
      produit
      );
  }
}
