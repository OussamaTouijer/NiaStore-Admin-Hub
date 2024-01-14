import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'testModule';


  actions : Array<any>=[
    {title : "Home" , route : "/home",icon : "house"},
    {title : "Produits" , route : "/produits",icon : ""},
    {title : "Acheteurs" , route : "/acheteurs",icon : "client"},
    {title : "Ventes" , route : "/ventes",icon : ""},
    {title : "Notification" , route : "/notifications",icon : ""},

  ];

  //pour garder l'action courant
  currentAction : any;
  SetCurrentAction(action: any) {
    this.currentAction=action;
  }

}
