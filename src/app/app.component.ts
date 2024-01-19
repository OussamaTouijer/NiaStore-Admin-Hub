import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {KeycloakProfile} from "keycloak-js";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-front-app';
  public profile? : KeycloakProfile;
  constructor(public keycloakService:KeycloakService) {
  }
  ngOnInit() {
    if(this.keycloakService.isLoggedIn()){
      this.keycloakService.loadUserProfile().then(profile=>{
        this.profile=profile;
      });
    }
  }

  async login() {
    await this.keycloakService.login({
      redirectUri: window.location.origin
    });
  }

  logout() {
    this.keycloakService.logout(window.location.origin)
  }



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
