import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ShareDataAccountService } from '../services/shareData/share-data-account.service';


@Component({
  selector: 'app-inscript-connex',
  templateUrl: './inscript-connex.page.html',
  styleUrls: ['./inscript-connex.page.scss'],
})
export class InscriptConnexPage implements OnInit {

  public data:any;
  categorie;
  constructor(public router: Router,
              public alertCtrl: AlertController,
              public appData: ShareDataAccountService
    ) { 
      this.appData.currentData.subscribe((data:any)=>{
        console.log(data);
      });
    }

  ngOnInit() {

  }

  public async signUp(){
    const alert= await this.alertCtrl.create({
      header: 'Quel type de compte souhaitez vous creer ?',
      inputs: [
        {
          name: 'entreprise',
          type: 'radio',
          label: 'Entreprise',
          value: 'Entreprise',
          checked: true
        },{
          name: 'eleveurAutonome',
          type: 'radio',
          label: 'Eléveur Autonome',
          value: 'Eleveur Autonome'
        },{
          name: 'client',
          type: 'radio',
          label: 'Client',
          value: 'Client'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'primary'
        },{
          text: 'Continuer',
          cssClass: 'primary',
          handler: categorie=>{
            this.categorie= categorie;
            this.router.navigate(['sign-up',{
              categorie: categorie,
              icon:(categorie=='Entreprise')?'home':'person'
            }]);
          }
        }
      ]
    });

    await alert.present();

  }
  public async signIn(){
    const alert= await this.alertCtrl.create({
      header: 'A quel type de compte souhaitez vous vous connectez ?',
      inputs: [
        {
          name: 'entreprise',
          type: 'radio',
          label: 'Entreprise',
          value: 'Entreprise',
          checked: true
        },{
          name: 'eleveurAutonome',
          type: 'radio',
          label: 'Eléveur Autonome',
          value: 'Eléveur Autonome'
        },{
          name: 'client',
          type: 'radio',
          label: 'Client',
          value: 'Client'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'primary'
        },{
          text: 'Continuer',
          cssClass: 'primary',
          handler: categorie=>{
            this.categorie= categorie;
            this.router.navigate(['sign-in',{
              categorie:categorie,
              icon:(categorie=='Entreprise')?'home':'person'
            }]);
          }
        }
      ]
    });

    await alert.present();  }
  public about(){
    this.router.navigate(['about']);

  }

}
