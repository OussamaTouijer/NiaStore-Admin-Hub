import {Injectable} from "@angular/core";
import {KeycloakProfile} from "keycloak-js";
import {KeycloakEventType, KeycloakService} from "keycloak-angular";

//@Injectable({providedIn : "root"})
export class SecurityService {
  public profile? : KeycloakProfile;//tout les information stocker dans profile
  constructor (public kcService: KeycloakService) {
    this.init();
  }
  init(){//pour recupere le profile de utilsateure authentifier
    console.log("Init ....")
    this.kcService.keycloakEvents$.subscribe({
      next: (e) => {
        console.log(e);
        if (e.type == KeycloakEventType.OnAuthSuccess) {
          console.log("OnAuthSuccess")
          this.kcService.loadUserProfile().then(profile=>{
            this.profile=profile;
          });
        }
      },
      error : err => {
        console.log(err);
      }
    });
  }
  public hasRoleIn(roles:string[]):boolean{
    let userRoles = this.kcService.getUserRoles();
    for(let role of roles){
      if (userRoles.includes(role)) return true;
    } return false;
  }
}
