import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Control } from '../../services/control.form/sign-up-sing-in.service';
import { PostProviderService } from '../../services/post-provider.service';
import { AlertController } from '@ionic/angular';
import { ShareDataAccountService } from '../../services/shareData/share-data-account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  
  public categorie;
  private icon;
  // label du formulaire
  public val_inscription:any={
    tel:"",
    // nom_entreprise: "",
    nom:"",
    login:"",
    pwd:"",
    confimpwd:"",
    email:""
  }; 

  public msgErreur= [];
  public bool;

  constructor(private route: ActivatedRoute,
              private control: Control,
              public alertCtrl: AlertController,  
              private postData: PostProviderService,
              private geolocation: Geolocation,
              public appData: ShareDataAccountService,
              public router: Router
              ) {


   }

  ngOnInit() {
    this.categorie= this.route.snapshot.paramMap.get('categorie');
    this.icon= this.route.snapshot.paramMap.get('icon');

    if(this.categorie=='Entreprise'){
      this.val_inscription.poste_de_travail= "le Boss";
      if(this.categorie!='Client'){
        this.val_inscription.categorie= this.categorie;
      }
      
    }
  }

  async inscription(){

    let data={
      nom_entreprise: this.val_inscription.nom_entreprise,
      nom: this.val_inscription.nom,
      poste_de_travail: this.val_inscription.poste_de_travail,
      login: this.val_inscription.login,
      email: this.val_inscription.email,
      telephone: this.val_inscription.tel,
      password: this.val_inscription.pwd,
      confirmPassword: this.val_inscription.confimpwd,
      categorie: this.categorie
    };
    console.log(data);
    if(this.control.isEmpty(this.val_inscription).msg==false){
      
      const alert= await this.alertCtrl.create({
        message: 'Inscription en cour...'
      })
      .then((load)=>{
        this.postData.postData('Utilisateur/addUser/',data)
        .then(async (requestData)=>{
          if(!requestData['Erreur']){
            
            this.appData.changeData(data);
            load.dismiss();
            this.router.navigate(['compte']);
          
          } else{

            load.dismiss();
            const alert= await this.alertCtrl.create({
              header: 'Erreur d\'inscription.',
              message: ''+requestData['Erreur'],
              buttons: ['ok']
            });
            await alert.present();
          }
        })
        .catch(error=> console.log(error))
      })
      

    } else{
      console.log(this.val_inscription);
      const alert= await this.alertCtrl.create({
        header: "Erreur :",
        message: "Veuillez vérifier que tout les champs du formulaire ont étés bien remplient ensuite ressayer.",
        buttons: ['OK']
      });
      await alert.present();
    }
  }

}
