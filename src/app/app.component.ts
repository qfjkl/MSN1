import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Router} from '@angular/router';
import { Events } from "@ionic/angular";
import { ShareDataAccountService } from './services/shareData/share-data-account.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public pages: Array<{ title: string,icon: string, url: string }>;
  public user;
  public categorieUser;
  public id_utilisateur;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public appData: ShareDataAccountService
    ) {
      this.appData.currentData.subscribe((data:any)=>{
        
        this.categorieUser= data.categorie;
        this.user= data.login;
        
        if(data.categorie=="Entreprise"){
          this.pages= [
            {title: 'Projet', icon:'briefcase' ,url: 'compte/projet'},
            {title: 'Archive', icon:'filing' ,url: ''},
            {title: 'Gestion du personnel', icon:'people' ,url: ''},
            {title: 'Rapport du personnel', icon:'log-out' ,url: ''},
            {title: 'Effectuer un Diagnostique', icon:'medkit' ,url: ''},
            {title: 'Alimentation', icon:'egg' ,url: 'ribbon'},
            {title: 'Effectuer une suggestion', icon:'medkit' ,url: ''},
            {title: 'Paramètre', icon:'settings' ,url: ''},
            {title: 'Mode premium', icon:'unlock' ,url: ''},
            {title: 'A propos', icon:'information-circle' ,url: ''},
            {title: 'Aide', icon:'help-circle' ,url: ''},
            {title: 'Effectuer un achat', icon:'cart' ,url: ''},
            {title: 'Profil', icon:'md-contact' ,url: ''},
            {title: 'Déconnexion', icon:'log-out' ,url: ''}
          ];
    
        }
        else if(data.categorie=="Eleveur autonome"){
          this.pages= [
            {title: 'Profil', icon:'' ,url:'' },
            {title: 'Projet', icon:'' ,url:'' },
            {title: 'Archive', icon:'' ,url:''},
            {title: 'Alimentation', icon:'' ,url:'' },
            {title: 'Effectuer un Diagnostique', icon:'' ,url:'' },
            {title: 'Effectuer un achat', icon:'' ,url: ''},
            {title: 'Effectuer une suggestion', icon:'' ,url: ''},
            {title: 'Paramètre', icon:'' ,url: ''},
            {title: 'Mode premium', icon:'' ,url: ''},
            {title: 'A propos', icon:'' ,url: ''},
            {title: 'Aide', icon:'' ,url: ''},
            {title: 'Déconnexion', icon:'' ,url: ''}
          ];
    
        }
        else{
          this.pages= [
            {title: 'Profil', icon:'' , url: ''},
            {title: 'Effectuer une suggestion', icon:'' , url: ''},
            {title: 'Effectuer un achat', icon:'' , url: ''},
            {title: 'Paramètre', icon:'' , url: ''},
            {title: 'Mode premium', icon:'' , url: ''},
            {title: 'A propos', icon:'' , url: ''},
            {title: 'Demander de l\'aide', icon:'' , url: ''},
            {title: 'Déconnexion', icon:'' , url: ''}
          ];
        }

      });

    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit(){

    
  }
}
