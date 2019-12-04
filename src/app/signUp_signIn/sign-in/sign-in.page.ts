import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Control } from '../../services/control.form/sign-up-sing-in.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { ShareDataAccountService } from '../../services/shareData/share-data-account.service';
import { PostProviderService } from '../../services/post-provider.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
	public icon;  
	public categorie;
	public formData:any={
		nom:null,
		password:null
	};
	public data:any={};
	public loading;
	public isValidNameEntreprise=false;
	public nomEntreprise;
  constructor(private route: ActivatedRoute,
			  private control: Control,
			  public alertCtrl: AlertController,
			  public rout: Router,
			  public appData: ShareDataAccountService,
			  private postProvide: PostProviderService,
			  public loadingCtrl: LoadingController
			) { }

  async ngOnInit() {
	this.categorie= this.route.snapshot.paramMap.get('categorie');
	this.icon= this.route.snapshot.paramMap.get('icon');
	
	if(this.categorie=='Entreprise'){
		const prompt= await this.alertCtrl.create({
			header: "Veuillez entrer le nom de l'entreprise à laquelle vous appartenez.",
			inputs:[
				{
					name: 'nomEntreprise',
					type: 'text',
					placeholder: 'Nom de l\'entreprise'
				}
			],
			buttons:[
				{
					text:"Annuler",
					role:"cancel",
					handler: ()=>{
						this.rout.navigate(['inscript-connex']);
					} 
				},{
				  text: "Continuer",
				  handler:async (data) =>{
					  if(data.nomEntreprise!=""){
						
						this.loading=await this.loadingCtrl.create({
							message: "vérrification en cour..."
						})
						.then((load:any)=>{

							// start loading
							load.present();
							this.postProvide.postData('Utilisateur/connexion',data)
							.then( async (reponse)=>{
								// gestion de l'affichage du formulaire (afficher si le nom d'entreprise est valide)
								if(reponse=="true"){
									this.isValidNameEntreprise= true;
									this.appData.changeData({nom_entreprise: data.nomEntreprise});
									
									// dismiss loading 
									load.dismiss();
								} else{
									// le nom de l'entreprise n'est pas valide
									this.isValidNameEntreprise= false;
									
									// dismiss loading
									load.dismiss();
									const alert= await this.alertCtrl.create({
										header: "Erreur",
										message: "Aucune entreprise ne possède le nom '"+data.nomEntreprise+"', Veuillez entrez un nom valide.",
										buttons:[
											{
												text: "OK",
												role: "cancel",
												handler: ()=>{
													this.ngOnInit();
												}
											}
										]
									});
								alert.present();
							}
						  })
						  .catch( async (error)=> {
							
							load.dismiss(); 
							const alert= await this.alertCtrl.create({
								header:"Erreur réseau",
								message: "Impossible de contacter le serveur, Veuillez vérrifier votre connexion internet. ",
								buttons:["OK"]
							});
							await alert.present();
						  })
						})					
					} else{
						const alert= await this.alertCtrl.create({
							header: "Erreur",
							message: "Veuillez renseigner le nom de l'entreprise à laquelle vous appartenez",
							buttons:[
								{
									text: "OK",
									role: "cancel",
									handler: ()=>{
										this.ngOnInit();
									}
								}
							]
						});
						await alert.present();
					}
				}
				}
			  ]
		});
		await prompt.present();
	}

  }

  async signIn(){

	if(this.control.isEmpty(this.formData).msg){
		const alert = await this.alertCtrl.create({
			header: 'Erreur',
			message: 'Veuillez remplir tout les champs du formulaire.',
			buttons: ['OK']
		  });	  
		  await alert.present();
	} else{
		// set the name of entreprise for the request
		this.appData.currentData.subscribe((data:any)=>{
			if(data.nom_entreprise!=undefined){
				this.formData.nomEntreprise=data.nom_entreprise;
			} else{
				// au cas ou il ne s'agit pas d'une entreprise
				this.formData.nomEntreprise=" ";
			}
		})
		// set loading with request
		this.loading = await this.loadingCtrl.create({
			message: 'Vérrification des informations en cour...'
		})
		.then((load:any)=>{	
			load.present();
			
			this.postProvide.postData('Utilisateur/connexion/',this.formData)
			.then(async (reponse:any)=>{
	
			if(!reponse['Erreur']){
	
				console.log(reponse);
				// pusblish variables for account page 
				this.data.login= reponse.login;
				this.data.pwd= reponse.mot_de_passe;
				this.data.categorie= reponse.categorie;
				this.data.id_user= reponse.id_user;
				this.data.nomEntreprise= (reponse.categorie=='Entreprise')?reponse.nom_entreprise:undefined; 			
				this.appData.changeData(this.data);
				
				// lodading desabled
				load.dismiss();
				this.rout.navigate(['compte']);	  		
	
			} else{
				load.dismiss();
				const alert= await this.alertCtrl.create({
					header:"Echec d'authentification!",
					message:reponse['Erreur'],
					buttons:['OK']
				});
				await alert.present();
			}
			})
			.catch( async (error)=>{
				const alert= await this.alertCtrl.create({
					header:'Erreur inattendu',
					message: error,
					buttons:['OK']
				});
				await alert.present();			
			});
		})
	}
  }	

  ionViewDidLeave(){
	  
  }
}
