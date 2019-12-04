import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-choisirIngredient',
  templateUrl: './choisirIngredient.page.html',
  styleUrls: ['./choisirIngredient.page.scss'],
})
export class choisirIngredientPage implements OnInit {

// valeur des checkbox en booléen
mais:boolean;
tourteau_de_coton:boolean;
tourteaux_de_soja:boolean;
farine_d_os:boolean;
tourteaux_d_arachide:boolean;
concentre_chair:boolean;
concentre:boolean;
coque_de_cacao:boolean;
soja_grille:boolean;
son_de_ble:boolean;
tourteaux_de_palmiste:boolean;
huile_de_palme:boolean;
farine_de_poisson:boolean;
farine_de_sang:boolean;
lysine:boolean;
methionine:boolean;
patate:boolean;
graisse_animale:boolean;
huile_vegetale:boolean;
manioc:boolean;
dreche:boolean;
banane:boolean;
coquille:boolean;
son_de_riz:boolean;
tourteaux_de_copra:boolean;
millet:boolean;
sorgho:boolean;
remoulage:boolean;
ble:boolean;

public user;
public pharse;
public nbrpoulet;
public testRadioOpen:boolean;
public testRadioResult:any;

// liste des ingrédients
ingredients=[
  "Maïs",
  "Tourteaux de coton",
  "Tourteaux de soja",
  "Farine d'os",
  "Tourteaux d'arachide",
  "concentré chair",
  "concentré 10%",
  "Coque de cacao",
  "soja grillé",
  "son de blé",
  "Tourteaux de palmiste",
  "Huile de palme",
  "Farine de poisson",
  "Farine de sang",
  "Lysine",
  "Méthionine",
  "Patate",
  "Graisse animale",
  "Huile végétale",
  "Manioc",
  "Dreche",
  "Banane",
  "Coquille",
  "son_de_riz",
  "tourteaux_de_copra",
  "millet",
  "sorgho",
  "remoulage",
  "ble",
  "farine_de_sang"
];


  constructor(public alertCtrl: AlertController,
              public router: Router,
              public route: ActivatedRoute
    ) {
      this.pharse= this.route.snapshot.paramMap.get('pharseProjet');
      this.nbrpoulet= this.route.snapshot.paramMap.get('nbSujet');
     }

  ngOnInit() {
  }

// début des méthodes à intégrer dans un service plus tard
val_mais(){
  if(this.mais==true){
    return "mais";
  }
  else{
      return "";
  }
}
val_tourteaux_de_coton(){
  if(this.tourteau_de_coton==true){
    return "tourteau_de_coton";
  }
  else{
    return "";	
  }
}
val_tourteaux_de_soja(){
  if(this.tourteaux_de_soja==true){
    return "tourteaux_de_soja";
  }
  else{
    return "";	
  }
}
val_farine_d_os(){
  if(this.farine_d_os==true){
    return "farine_d_os";
  }
  else{
    return "";	
  }
}
val_tourteaux_d_arrachide(){
  if(this.tourteaux_d_arachide==true){
    return "tourteaux_d_arrachide";
  }
  else{
    return "";	
  }
}
val_concentre_chair(){
  if(this.concentre_chair==true){
    return "concentre_chair";
  }
  else{
    return "";	
  }
}
// concentre 10%
val_concentre(){
  if(this.concentre==true){
    return "concentre";
  }
  else{
    return "";	
  }
}
val_coque_cacao(){
  if(this.coque_de_cacao==true){
    return "coque_de_cacao";
  }
  else{
    return "";	
  }
}
val_soja_grille(){
  if(this.soja_grille==true){
    return "soja_grille";
  }
  else{
    return "";	
  }
}
val_son_ble(){
  // console.log(this.resul());
  if(this.son_de_ble==true){
    return "son_de_ble";
  }
  else{
    return "";
  }
}
val_tourteaux_de_palmiste(){
  if(this.tourteaux_de_palmiste==true){
    return "tourteaux_de_palmiste";
  }
  else{
    return "";
  }
}
val_huile_de_palme(){
  if(this.huile_de_palme==true){
    return "huile_de_palme";
  }
  else{
    return "";	
  }
}
val_farine_de_poison(){
  if(this.farine_de_poisson==true){
    return "farine_de_poisson";
  }
  else{
    return "";	
  }
}
val_lysine(){
  if(this.lysine==true){
    return "lysine";
  }
  else{
    return "";	
  }
}
val_methionine(){
  if(this.methionine==true){
    return "methionine";
  }
  else{
    return "";
  }
}
val_patate(){
  if(this.patate==true){
    return "patate";
  }
  else{
    return "";
  } 
}
val_graisse_animale(){
  if(this.graisse_animale==true){
    return "graisse_animale";
  }
  else{
    return "";
  } 
}
val_huile_vegetale(){
  if(this.huile_vegetale==true){
    return "huile_vegetale";
  }
  else{
    return "";
  } 
}
val_manioc(){
  if(this.manioc==true){
    return "manioc";
  }
  else{
    return "";
  } 
}
val_dreche(){
  if(this.dreche==true){
    return "dreche";
  }
  else{
    return "";
  } 
}
val_banane(){
  if(this.banane==true){
    return "banane";
  }
  else{
    return "";
  } 
}
val_coquille(){
  if(this.coquille==true){
    return "coquille";
  }
  else{
    return "";
  } 
}
val_son_de_riz(){
  if(this.son_de_riz==true){
    return "son_de_riz";
  }
  else{
    return "";
  } 
}
val_tourteaux_de_copra(){
  if(this.tourteaux_de_copra==true){
    return "tourteaux_de_copra";
  }
  else{
    return "";
  } 
}
val_millet(){
  if(this.millet==true){
    return "millet";
  }
  else{
    return "";
  } 
}
val_sorgho(){
  if(this.sorgho==true){
    return "sorgho";
  }
  else{
    return "";
  } 
}
val_remoulage(){
  if(this.remoulage==true){
    return "remoulage";
  }
  else{
    return "";
  } 
}
val_ble(){
  if(this.ble==true){
    return "ble";
  }
  else{
    return "";
  } 
}
val_farine_de_sang(){
  if(this.farine_de_sang==true){
    return "farine_de_sang";
  }
  else{
    return "";
  }
}

  async choixComposition(){

    let ingredients_selectionnes:any=[];
    let liste_option:any= [this.val_mais(),this.val_tourteaux_de_coton(),this.val_tourteaux_de_soja(),this.val_farine_d_os(),
      this.val_tourteaux_d_arrachide(),this.val_concentre_chair(),this.val_concentre(),this.val_coque_cacao(),
      this.val_soja_grille(),this.val_son_ble(),this.val_tourteaux_de_palmiste(),this.val_huile_de_palme(),
      this.val_farine_de_poison(),this.val_lysine(),this.val_methionine(),this.val_patate(),this.val_graisse_animale(),this.val_farine_de_sang(),this.val_huile_vegetale(),this.val_manioc(),this.val_dreche(),this.val_banane(),this.val_coquille(),this.val_son_de_riz(),this.val_tourteaux_de_copra(),this.val_millet(),this.val_sorgho(),this.val_remoulage(),this.val_ble()].filter(function(element){
     (element!='')?ingredients_selectionnes.push(element):'';
    });
    // vérrification du nombre d'ingrédient choisi
    if(ingredients_selectionnes.length>1){
      const alert= await this.alertCtrl.create({
        header: 'Mode de composition',
        inputs:[{
          type:'radio',
          label: 'Mode dynamique',
          value:'dynamique',
          checked:true
        },{
          type:'radio',
          label: 'Mode manuel',
          value:'manuel',
          checked:false
        }],
        buttons:[
          {
            text: "cancel",
            role: "cancel",
            cssClass: "secondary"
          },{
            text: "Ok",
            handler: modeComposition=>{
              this.router.navigate(['quantite-projet',{
                modeComposition: modeComposition,
                pharseProjet: this.pharse,
                nbrpoulet: this.nbrpoulet,
                ingredientsSelectionnes: ingredients_selectionnes
              }]);
            }
          }
        ]
      });

      await alert.present();
    } else{
      const alert= await this.alertCtrl.create({
        header: "Erreur",
        message:"Veuillez choisir au moin 02 ingrédients pour éffectuer une composition",
        buttons:['OK']
      });
      await alert.present();
    }

  }
}
