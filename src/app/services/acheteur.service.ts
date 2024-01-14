import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../model/produit.model";
import {Acheteur} from "../model/acheteur.model";

@Injectable({
  providedIn: 'root'
})
export class AcheteurService {

  constructor(private http:HttpClient) { }

  public getAllAcheteurs() {
    return this.http.get<Array<Acheteur>>("http://localhost:8888/ACHETEUR-SERVICE/acheteurs");
  }

  public deleteAcheteur(acheteur:Acheteur){
    return this.http.delete<any>(`http://localhost:8888/ACHETEUR-SERVICE/acheteurs/${acheteur.idAcheteur}`);
  }

  public updateAcheteur(acheteur: Acheteur) {
    return this.http.put<any>(
      `http://localhost:8888/ACHETEUR-SERVICE/acheteurs/${acheteur.idAcheteur}`,
      acheteur
    );
  }

  public postAcheteur(acheteur: Acheteur) {
    return this.http.post("http://localhost:8888/ACHETEUR-SERVICE/acheteurs", acheteur);
  }

  public recherchAcheteurs(keyword:string){
    return this.http.get<Array<Acheteur>>(`http://localhost:8888/ACHETEUR-SERVICE/acheteurs/nom_like?keyword=${keyword}`);
  }


  public saveAcheteur(acheteur: Acheteur) {
    return this.http.post<Acheteur>(`http://localhost:8888/ACHETEUR-SERVICE/acheteurs`, acheteur);
  }
}
