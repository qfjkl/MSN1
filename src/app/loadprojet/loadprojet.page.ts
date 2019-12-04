import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-loadprojet',
  templateUrl: './loadprojet.page.html',
  styleUrls: ['./loadprojet.page.scss'],
})

export class LoadprojetPage implements OnInit {

  public projet;
  public pharseProjet;
  public nbSujet;
  public pet="Rapport";
  public name="settings";
  public color="primary";
  public infosProjet:any={
      pharse: null,
      sujet: null,
      nombre: null
  };

  constructor(public alertCtrl: AlertController,
              public router: Router,
              public route: ActivatedRoute,
      ) {
    this.projet=this.route.snapshot.paramMap.get('projet');
    this.pharseProjet=this.route.snapshot.paramMap.get('pharseProjet');
    this.nbSujet=this.route.snapshot.paramMap.get('nbSujet');

    
  }
 
 ngOnInit() {
 }
 diagnostiquer(){
  this.router.navigate(['diagnostique-intelligent',{projet: this.projet}]);
 }
 formulerAliment(){
   this.router.navigate(['choisirIngredient',{
      nomProjet: this.projet,
      pharseProjet: this.pharseProjet,
      nbSujet: this.nbSujet 
   }]);
 }

}
