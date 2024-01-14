import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../model/produit.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  public getNumberProduits(){
    return this.http.get<number>("http://localhost:8888/PRODUIT-SERVICE/nombreProduits");
  }
  public getNumberAcheteurs(){
    return this.http.get<number>("http://localhost:8888/ACHETEUR-SERVICE/nombreAcheteurs");
  }

  public getNumberVentes(){
    return this.http.get<number>("http://localhost:8888/VENTE-SERVICE/nombreVentes");
  }
}
