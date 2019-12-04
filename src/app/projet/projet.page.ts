import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Control } from '../services/control.form/sign-up-sing-in.service';
import { PostProviderService } from '../services/post-provider.service';
import { ShareDataAccountService } from '../services/shareData/share-data-account.service';
import { ToastController } from '@ionic/angular';
import { isBoolean } from 'util';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-projet',
  templateUrl: './projet.page.html',
  styleUrls: ['./projet.page.scss'],
})
export class ProjetPage implements OnInit {

  public projets:Array<{nomProjet: string, pharseProjet: string, nbSujet:number}>;
  public auth;
  public login;
  public pwd;
  public id_utilisateur:any;
  public projets1;
  constructor(public alertCtrl: AlertController,
              public actionSheetCtrl: ActionSheetController,
              public route: Router,
              public control: Control,
              public post: PostProviderService,
              public appData: ShareDataAccountService,
              private geolocation: Geolocation,
              public toastController: ToastController        
              ) {
                this.geolocation.getCurrentPosition().then((resp) => {
                  // resp.coords.latitude
                  // resp.coords.longitude
                  console.log(resp);
                 }).catch((error) => {
                   console.log('Error getting location', error);
                 });
               }

  ngOnInit() {
    this.appData.currentData.subscribe((data:any)=>{
      this.id_utilisateur=data.id_user;
      this.post.postData("Projet/readProjet",{id_utilisateur:data.id_user})
      .then((data:any)=>{
        // console.log('données ',data);
        // if(data.nomProjet!= undefined){
          this.projets= data;
          this.projets1= data;
        // } else{
        //   console.log('la base de donnée des projets est vides');
        // }

      })
      .catch((error)=>{
        console.log(error);
      })
    });
    
    this.addProjet();

    this.projets= [
      {
        nomProjet:"Shalom",
        pharseProjet:"Démarrage",
        nbSujet:7800
      },{
        nomProjet:"Succès",
        pharseProjet:"Démarrage",
        nbSujet:17800        
      },{
        nomProjet:"Bénédiction",
        pharseProjet:"Croissance",
        nbSujet:28000
      },{
        nomProjet:"Gloire",
        pharseProjet:"Finition",
        nbSujet:21000
      },{
        nomProjet:"Mérial",
        pharseProjet:"Finition",
        nbSujet:10000
      }
    ];

  }

  async addProjet(){
    const alert= await this.alertCtrl.create({
      header:'Ajout d\'un projet',
      inputs: [
        {
          name: 'nomProjet',
          placeholder: 'Nom du projet'
        },{
          name: 'nbSujet',
          type: 'number',
          placeholder: 'Nombre de sujet'
        }
      ],
      buttons: [
        {
          role: "cancel",
          text: "Annuler",
          cssClass: "secondary"
        }, {
          text: 'Suivant',
          handler:async data => {
            let isSame:boolean;
            if(this.projets[0]==undefined){
              isSame= false;
            } else{
              for (let projet of this.projets){
                if(projet.nomProjet==data.nomProjet){
                  isSame= true;
                  break;
                } else{
                  isSame= false;
                }
              }
            }
            
            if(isSame==false){
              if(this.control.isEmpty(data)){
                let nbSujet= data.nbSujet;
                let nomProjet= data.nomProjet;

                let alert= await this.alertCtrl.create({
                header:"Pharse du projet",
                inputs:[
                  {
                    type: 'radio',
                    label: 'Démarrage',
                    value: 'Démarrage',
                    checked: true
                  },{
                    type: 'radio',
                    label: 'Croissance',
                    value: 'Croissance',
                    checked: false
                  },{
                    type: 'radio',
                    label: 'Finition',
                    value: 'Finition',
                    checked: false
                  }
                ],
                buttons:[
                  {
                    role: 'cancel',
                    text: 'Annuler',
                    cssClass: 'secondary'
                  },{
                    text: 'Enregistrer',
                    cssClass: 'secondary',
                    handler: async (data)=>{

                      let body= {
                        nomProjet: nomProjet,
                        pharseProjet: data,
                        // du reProjet: 35,
                        nbSujet: nbSujet
                        // id_utilisateur: this.id_utilisateur
                      }

                      // Enregistrement du projet dans la db à éffectuer plus tard
                      let dataRequest={
                        nom_projet: nomProjet,
                        pharse_projet: data,
                        dure_projet: 35,
                        nombre_sujet: nbSujet,
                        id_utilisateur: this.id_utilisateur
                      };

                      const alert= await this.alertCtrl.create({
                        message: "Enregistrement des informations en cour..."
                      })
                      .then((load)=>{

                        this.post.postData("Projet/createProjet",dataRequest)
                        .then(async (data:any)=>{
                          const toast = await this.toastController.create({
                            message: data.Succes,
                            duration: 2000
                          });

                          load.dismiss();
                          toast.present();
                          // this.route.navigate(['localiser-projet']);
                        })
                        .catch(async ()=>{

                          load.dismiss();
                          const alert= await this.alertCtrl.create({
                            header: "Erreur inattendue",
                            message: "Erreur d'enregistrement des données, veuillez ressayer plus tard.",
                            buttons:['OK']
                          });
                          await alert.present();      
                        });
  
                        this.projets.push(body);

                      })
                      

                    }
                  }
                ]
              });
              await alert.present();
              } else{
                const alert = await this.alertCtrl.create({
                  header: 'Erreur',
                  // subHeader: 'Subtitle',
                  message: 'Veuillez remplir tout les champs du formulaire.',
                  buttons: ['OK']
                  });
                  await alert.present();
              }
            } else{
              const alert= await this.alertCtrl.create({
                header: "Erreur",
                message: "Veuillez entrer un nom de projet différent car celui-ci a déjà été enregistré.",
                buttons:['OK']
              });
              await alert.present();
            }
          }
        }
      ]    
    });
    await alert.present();
  }
  initializeItems() {
    this.projets;  
  }

  // search bar

  getItems(ev:any){

    this.projets1;

    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.projets = this.projets.filter(item => {

        return (item.nomProjet.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });

    }        
  }


  // laod projet page
  
  async loadProject(projet){
    
    console.log(projet);
    
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Qu\'elle action souhaitez vous éffectuer?',
      buttons: [
        {
          text: 'Ouvrir le projet',
          handler: () => {
            this.route.navigate(['loadprojet',{projet:projet.nomProjet,
                                pharseProjet:projet.pharseProjet,
                                nbSujet: projet.nombreSujet
                              }]);
            // console.log(project);
          }
        },{
          text: 'Affecter un personnel au projet',
          handler: () => {
            this.authentification('Affecter personnel');
          }
        },{
          text: 'Renomer le projet',
          handler: () => {
            this.authentification('Renomer projet');
          }
        },{
          text: 'Supprimer le projet',
          handler: () => {
            this.authentification('Supprimer projet');

          }
        }
      ]
    });
    await actionSheet.present();
  } 

 async authentification(action?:string,nom?:any,pwd?:any){

    const prompt = await this.alertCtrl.create({
      header: 'Authentifiez vous pour continuer',
      inputs: [
        {
          name: 'nom',
          value: nom,
          placeholder: 'Nom'
        },{
          name: 'pwd',
          value: pwd,
          type: 'password',
          placeholder: 'Mot de passe'
        }
      ],
      buttons: [
        {
          text: 'Annuler'
        },{
          text: 'S\'authentifier',
          handler: data =>{
            if(data.nom=="" || data.pwd==""){

              // this.authentification(action,data.nom, data.pwd);
              // let alertTitle="Erreur Présent dans le formulaire";
              // let alertMsg="Veuillez vérrifier que tout les champs du formulaire sont bien remplient ensuite ressayer."
              // this.alert(alertTitle,alertMsg);
                      
            }
            else{
            
              if(data.nom==this.login && data.pwd==this.pwd){

                if(action=='Affecter personnel'){
                  console.log('Ajout du personnel');
                }
                else if(action=='Renomer projet'){
                  console.log('Renomer un projet');
                }
                else{
                  console.log('supprimer un projet');
                }                
              }
              else{
                this.auth= false;    
                this.authentification(action,data.nom, data.pwd);
                // let alertTitle="Echec d'authentification";
                // let alertMsg="Veuillez vérrifier que vos informations d'authentification sont correctes ensuite ressayer."
                // this.alert(alertTitle,alertMsg);
              
              }
            }
          }
        }
      ]
    });
    await prompt.present();
  }
}
