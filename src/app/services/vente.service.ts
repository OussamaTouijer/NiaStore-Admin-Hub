import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vente} from "../model/vente.model";

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  constructor(private http:HttpClient) { }

  public getAllVentes(){
    return this.http.get<Array<Vente>>("http://localhost:8888/VENTE-SERVICE/ventes");
  }
  public deleteVente(vente:Vente){
    return this.http.delete<any>(`http://localhost:8888/VENTE-SERVICE/ventes/${vente.idV}`);
  }

  public updateVente(vente: Vente) {
    return this.http.put<any>(
      `http://localhost:8888/VENTE-SERVICE/ventes/${vente.idV}`,
      vente
    );
  }

  public postVente(vente : Vente){
    return this.http.post("http://localhost:8888/VENTE-SERVICE/ventes",
      vente
    );
  }

  public recherchVente(id:number){
    return this.http.get<Array<Vente>>(`http://localhost:8888/VENTE-SERVICE/ventes/id_like?id=${id}`);
  }


  saveVente(vente: Vente) {
    return this.http.post<Vente>(`http://localhost:8888/VENTE-SERVICE/ventes`,
      vente
    );
  }
}
