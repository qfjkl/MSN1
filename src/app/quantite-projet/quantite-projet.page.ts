import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CompositionDynamique } from '../services/ingredient/composition-dynamique.service';
import { ShareDataAccountService } from '../services/shareData/share-data-account.service';
import { HelperService } from '../services/helper.service';



@Component({
  selector: 'app-quantite-projet',
  templateUrl: './quantite-projet.page.html',
  styleUrls: ['./quantite-projet.page.scss'],
})
export class QuantiteProjetPage implements OnInit {

  // gestion de l'affichage du formulaire
  data: Array<{ingredient:string, ing: string, qte_ing:number}>;
  data_nutriments: Array<{nutriment:string,nutAlgo:string, qte_nutriment:number}>;

  public mais:boolean=false;
  public tourteau_de_coton:boolean=false;
  public tourteaux_de_soja:boolean=false;
  public farine_d_os:boolean=false;
  public tourteaux_d_arachide:boolean=false;
  public concentre_chair:boolean=false;
  public concentre:boolean=false;
  public coque_de_cacao:boolean=false;
  public soja_grille:boolean=false;
  public son_de_ble:boolean=false;
  public tourteaux_de_palmiste:boolean=false;
  public huile_de_palme:boolean=false;
  public farine_de_poisson:boolean=false;
  public methionine:boolean=false;
  public patate:boolean=false;
  public graisse_animale:boolean=false;
  public huile_vegetale:boolean=false;
  public manioc:boolean=false;
  public dreche:boolean=false;
  public banane:boolean=false;
  public coquille:boolean=false;
  public son_de_riz:boolean=false;
  public tourteaux_de_copra:boolean=false;
  public millet:boolean=false;
  public sorgho:boolean=false;
  public remoulage:boolean=false;
  public ble:boolean=false;
  public farine_de_sang:boolean=false;

// gestion des valeurs du formulaire
  public qte_mais_val:number;
  public qte_tourteau_de_coton_val:number;
  public qte_tourteaux_de_soja_val:number;
  public qte_farine_d_os_val:number;
  public qte_tourteaux_d_arachide_val:number;
  public qte_concentre_chair_val:number;
  public qte_concentre_val:number;
  public qte_coque_de_cacao_val:number;
  public qte_soja_grille_val:number;
  public qte_son_de_ble_val:number;
  public qte_tourteaux_de_palmiste_val:number;
  public qte_huile_de_palme_val:number;
  public qte_farine_de_poisson_val:number;
  public patate_val:number;
  public ge_animale_val:number;
  public huile_vegetale_val:number;
  public manioc_val:number;
  public dreche_val:number;
  public banane_val:number;
  public coquille_val:number;
  public son_de_riz_val:number;
  public tourteaux_de_copra_val:number;
  public millet_val:number;
  public sorgho_val:number;
  public remoulage_val:number;
  public ble_val:number;
  public farine_de_sang_val:number;

 public ingredients_selectionnes:string[];
 public user:string;
 public nbrPoulet:number;
 public pharseProjet:string;
 public nomProjet;
// valeur des champs number qui contiennent les quantités
 // public arrachide={
 //   tourteaux_d_arachide:0
 // };
 public quantites_ingredient={
   mais:null,
   tourteau_de_coton:null,
   tourteaux_de_soja:null,
   farine_d_os:null,
   tourteaux_d_arachide:null,
   concentre_chair:null,
   concentre:null,
   coque_de_cacao:null,
   soja_grille:null,
   son_de_ble:null,
   tourteaux_de_palmiste:null,
   huile_de_palme:null,
   farine_de_poisson:null,
   patate:null,
   graisse_animale:null,
   huile_vegetale:null,
   manioc:null,
   dreche:null,
   banane:null,
   coquille:null,
   son_de_riz:null,
   tourteaux_de_copra:null,
   millet:null,
   sorgho:null,
   remoulage:null,
   ble:null,
   farine_de_sang:null
 };

 public ingredients=[
   "Maïs",
   "Tourteaux de coton",
   "Tourteaux de soja",
   "Tourteaux d'arrachide",
   "concentré chair",
   "concentré 10%",
   "Coque de cacao",
   "soja grillé",
   "son de blé",
   "Tourteaux de palmiste",
   "Huile de palme",
   "Farine de poisson",
   "Farine de sang",
   "Patate",
   "Graisse animale",
   "Huile végétale",
   "Manioc",
   "Dreche",
   "Banane",
   "Coquille",
   "Son de Riz",
   "Tourteaux de copra",
   "Millet",
   "Sorgho",
   "Remoulage",
   "Ble"
 ];
 
  public modeComposition:string;
  public ingredientSelectionne:any;
  public choice_bool:boolean;
  public choice_nut:string;
  public choice_nut_val:number;
  public compteur:number;
  public calcul_nut:any;

  constructor(public router: Router,
              public helper: HelperService,
              public route: ActivatedRoute,
              public alertCtrl: AlertController,
              public appData: ShareDataAccountService,         
              public alimentation: CompositionDynamique
    ) {
      this.nomProjet= this.route.snapshot.paramMap.get('nomProjet');
      this.nbrPoulet= Number(this.route.snapshot.paramMap.get('nbrpoulet'));
      this.pharseProjet= this.route.snapshot.paramMap.get('pharseProjet');
      this.modeComposition= this.route.snapshot.paramMap.get('modeComposition');
      this.ingredientSelectionne= this.route.snapshot.paramMap.get('ingredientsSelectionnes').split(',');
      console.log("nbsujet : ",this.nbrPoulet);
      let i:number=0;
      for(let ingredient of this.ingredientSelectionne){
        switch (ingredient) {            
            case "mais":
             this.mais=true
            break;
    
            case "tourteau_de_coton":
            this.tourteau_de_coton=true;
            break;
            
            case "tourteaux_de_soja": 
            this.tourteaux_de_soja=true;
            break;
    
            case "farine_d_os": 
            this.farine_d_os=true;
            break;
    
            case  "tourteaux_d_arachide": 
            this.tourteaux_d_arachide=true;
            break;
    
            case  "concentre_chair":
            this.concentre_chair=true;
            break;
    
            case  "concentre":
            this.concentre=true;
            break;
    
            case  "coque_de_cacao":
            this.coque_de_cacao=true;
            break;
    
            case "soja_grille":
            this.soja_grille=true;
            break;
    
            case "son_de_ble":
            this.son_de_ble=true;
            break;
    
            case "tourteaux_de_palmiste":
            this.tourteaux_de_palmiste=true;
            break;
            
            case "huile_de_palme":
            this.huile_de_palme=true;
            break;
    
            case "farine_de_poisson":
            this.farine_de_poisson=true;
            break;
  
            case "methionine":
            this.methionine=true;
            break;
    
            case "patate":
            this.patate=true;
            break;
    
            case "graisse_animale":
            this.graisse_animale=true;
            break;
    
            case "huile_vegetale":
            this.huile_vegetale=true;
            break;
    
            case "manioc":
            this.manioc=true;
            break;
    
            case "dreche":
            this.dreche=true;
            break;
    
            case "banane":
            this.banane=true;
            break;
    
            case "coquille":
            this.coquille=true;
            break;
    
            case "son_de_riz":
            this.son_de_riz=true;
            break;
    
            case "tourteaux_de_copra":
            this.tourteaux_de_copra=true;
            break;
    
            case "millet":
            this.millet=true;
            break;
    
            case "sorgho":
            this.sorgho=true;
            break;
    
            case "remoulage":
            this.remoulage=true;
            break;
    
            case "ble":
            this.ble=true;
            break;
    
            case "farine_de_sang":
            this.farine_de_sang=true;
            break;        
        }
        i++;
    }
    this.compteur= i;      
  }    

  ngOnInit() {
  }
  // store, set and get the data for all component

  storeData(){

    let storageData= {
      categorie:'',
      user: '',
      pwd: '',
      nomProjet: this.nomProjet,
      pharseProjet:this.pharseProjet,
      nbrPoulet:this.nbrPoulet,
      dataNutriment: this.data_nutriments,
      dataIngredients: this.data
    };
    this.appData.currentData.subscribe((data:any)=>{
      storageData.categorie=data.categorie;
      storageData.user=data.user;
      storageData.pwd=data.pwd;
    });
    this.appData.changeData(storageData);

  }

  async compositionDynamique(){
    // au cas ou le formulaire n'est pas valide
    if(this.choice_nut_val<=0 || this.choice_nut==""){

      const alert= await this.alertCtrl.create({
        header:"Erreur présent dans le formulaire",
        message:"Vérrifiez que la quantité de nutriment ne soit vide, nul ou inférieur à zéro",
        buttons:["OK"]
      });
      await alert.present();

    }
    else{
      let nIngredient=this.helper.countIngChoisis(this.ingredientSelectionne,this.choice_nut);
      this.data_nutriments=this.alimentation.formulation_dynamique(this.choice_nut_val,nIngredient,this.ingredientSelectionne,this.choice_nut).data_nutriments; 
      this.data=this.alimentation.formulation_dynamique(this.choice_nut_val,nIngredient,this.ingredientSelectionne,this.choice_nut).data_ing_qte; 
      
      // publication des données aux différentes page de l'application
      this.storeData();    
      
      this.router.navigate(['rapport-composition',{
        pharse: this.pharseProjet,
        nbrPoulet: this.nbrPoulet,
        ingredients_selectionnes: this.ingredientSelectionne
      }]);

    }    
  }

  async compositionManuelle(){
    /*
    * vérrification des valeurs des ingredients
    *@params val_ingredients: number
    *@params bool_ingredient : boolean
    *@return : boolean
    */
      function verrif_form(val_ingredient:number,bool_ingredient:boolean):any{
        if (bool_ingredient){
          if(val_ingredient<=0){
            return {bool_ingredient:false, val:val_ingredient}; 
          }
          else{
            return {bool_ingredient:true, val_ingredient};
          }
        }
        else{
            return {bool_ingredient:true};
        }    
      }
    /*
    * recuperation des valeurs des ingredients
    *@params val_ingredients: number
    *@params bool_ingredient : boolean
    *@return : boolean
    */
      function recup_val_ing(val_ingredient:number,bool_ingredient:boolean):any{
        if (bool_ingredient){
            return val_ingredient;
        }      
      }
    
    // valeur des formulaire en booléen 
    
      let verrif_mais:any=verrif_form(this.quantites_ingredient.mais,this.mais);
      let verrif_tourteau_de_coton:any=verrif_form(this.quantites_ingredient.tourteau_de_coton,this.tourteau_de_coton);
      let verrif_tourteaux_de_soja:any=verrif_form(this.quantites_ingredient.tourteaux_de_soja,this.tourteaux_de_soja);
      let verrif_farine_d_os:any=verrif_form(this.quantites_ingredient.farine_d_os,this.farine_d_os);
      let verrif_tourteaux_d_arachide:any=verrif_form(this.quantites_ingredient.tourteaux_d_arachide,this.tourteaux_d_arachide);
      let verrif_concentre_chair:any=verrif_form(this.quantites_ingredient.concentre_chair,this.concentre_chair);
      let verrif_concentre:any=verrif_form(this.quantites_ingredient.concentre,this.concentre);
      let verrif_coque_de_cacao:any=verrif_form(this.quantites_ingredient.coque_de_cacao,this.coque_de_cacao);
      let verrif_soja_grille:any=verrif_form(this.quantites_ingredient.soja_grille,this.soja_grille);
      let verrif_son_de_ble:any=verrif_form(this.quantites_ingredient.son_de_ble,this.son_de_ble);
      let verrif_tourteaux_de_palmiste:any=verrif_form(this.quantites_ingredient.tourteaux_de_palmiste,this.tourteaux_de_palmiste);
      let verrif_huile_de_palme:any=verrif_form(this.quantites_ingredient.huile_de_palme,this.huile_de_palme);
      let verrif_farine_de_poisson:any=verrif_form(this.quantites_ingredient.farine_de_poisson,this.farine_de_poisson);
      let verrif_lysine:any=verrif_form(this.quantites_ingredient.lysine,this.lysine);
      let verrif_methionine:any=verrif_form(this.quantites_ingredient.methionine,this.methionine);
      // début des nouveaux champs
      let verrif_patate:any=verrif_form(this.quantites_ingredient.patate,this.patate);
      let verrif_graisse_animale:any=verrif_form(this.quantites_ingredient.graisse_animale,this.graisse_animale);
      let verrif_farine_de_sang:any=verrif_form(this.quantites_ingredient.farine_de_sang,this.farine_de_sang);
      let verrif_manioc:any=verrif_form(this.quantites_ingredient.manioc,this.manioc);
      let verrif_dreche:any=verrif_form(this.quantites_ingredient.dreche,this.dreche);
      let verrif_banane:any=verrif_form(this.quantites_ingredient.banane,this.banane);
      let verrif_coquille:any=verrif_form(this.quantites_ingredient.coquille,this.coquille);
      let verrif_son_de_riz:any=verrif_form(this.quantites_ingredient.son_de_riz,this.son_de_riz);
      let verrif_tourteaux_de_copra:any=verrif_form(this.quantites_ingredient.tourteaux_de_copra,this.tourteaux_de_copra);
      let verrif_millet:any=verrif_form(this.quantites_ingredient.millet,this.millet);
      let verrif_sorgho:any=verrif_form(this.quantites_ingredient.sorgho,this.sorgho);
      let verrif_remoulage:any=verrif_form(this.quantites_ingredient.remoulage,this.remoulage);
      let verrif_ble:any=verrif_form(this.quantites_ingredient.ble,this.ble);
      
        if (verrif_mais.bool_ingredient && verrif_tourteau_de_coton.bool_ingredient && verrif_tourteaux_de_soja.bool_ingredient && verrif_farine_d_os.bool_ingredient && verrif_tourteaux_d_arachide.bool_ingredient && verrif_concentre_chair.bool_ingredient && verrif_concentre.bool_ingredient && verrif_coque_de_cacao.bool_ingredient && verrif_soja_grille.bool_ingredient && verrif_son_de_ble.bool_ingredient && verrif_tourteaux_de_palmiste.bool_ingredient && verrif_huile_de_palme.bool_ingredient && verrif_farine_de_poisson.bool_ingredient && verrif_lysine.bool_ingredient && verrif_methionine.bool_ingredient && verrif_patate.bool_ingredient && verrif_graisse_animale.bool_ingredient && verrif_farine_de_sang.bool_ingredient && verrif_manioc.bool_ingredient && verrif_dreche.bool_ingredient && verrif_banane.bool_ingredient && verrif_coquille.bool_ingredient && verrif_son_de_riz.bool_ingredient && verrif_tourteaux_de_copra.bool_ingredient && verrif_millet.bool_ingredient && verrif_sorgho.bool_ingredient && verrif_remoulage.bool_ingredient && verrif_ble.bool_ingredient){      
            this.data=[
              {ingredient:"Mais", ing:"mais" ,qte_ing:this.quantites_ingredient.mais},
              {ingredient:"Tourteaux de coton" , ing:"tourteau_de_coton", qte_ing:this.quantites_ingredient.tourteau_de_coton},
              {ingredient:"Tourteaux de soja", ing : "tourteaux_de_soja",qte_ing:this.quantites_ingredient.tourteaux_de_soja},
              {ingredient:"Farine d'os", ing: "farine_d_os" ,qte_ing:this.quantites_ingredient.farine_d_os},
              {ingredient:"Tourteaux d'arachide", ing: "tourteaux_d_arachide",qte_ing:this.quantites_ingredient.tourteaux_d_arachide},
              // {ingredient:"concentré chair", ing : "",qte_ing:this.quantites_ingredient.concentre_chair},
              // {ingredient:"concentré 10%",qte_ing:this.quantites_ingredient.concentre},
              // {ingredient:"Coque de cacao",qte_ing:this.quantites_ingredient.coque_de_cacao},
              {ingredient:"soja grillé", ing: "soja_grille",qte_ing:this.quantites_ingredient.soja_grille},
              {ingredient:"son de blé", ing: "son_de_ble",qte_ing:this.quantites_ingredient.son_de_ble},
              {ingredient:"Tourteaux de palmiste", ing: "tourteaux_de_palmiste",qte_ing:this.quantites_ingredient.tourteaux_de_palmiste},
              {ingredient:"Huile de palme", ing: "huile_de_palme",qte_ing:this.quantites_ingredient.huile_de_palme},
              {ingredient:"Farine de poisson", ing: "farine_de_poisson",qte_ing:this.quantites_ingredient.farine_de_poisson},
              {ingredient:"Farine de sang", ing: "farine_de_sang",qte_ing:this.quantites_ingredient.farine_de_sang},
              {ingredient:"Lysine", ing: "lysine",qte_ing:this.quantites_ingredient.lysine},
              {ingredient:"Méthionine",ing: "methionine",qte_ing:this.quantites_ingredient.methionine},
              {ingredient:"Patate", ing: "patate",qte_ing:this.quantites_ingredient.patate},
              {ingredient:"Graisse animale",ing:"graisse_animale" ,qte_ing:this.quantites_ingredient.graisse_animale},
              {ingredient:"Huile végétale", ing: "huile_vegetale",qte_ing:this.quantites_ingredient.huile_vegetale},
              {ingredient:"Manioc", ing:"manioc" ,qte_ing:this.quantites_ingredient.manioc},
              {ingredient:"Dreche", ing: "dreche",qte_ing:this.quantites_ingredient.dreche},
              {ingredient:"Banane", ing: "banane" ,qte_ing:this.quantites_ingredient.banane},
              {ingredient:"Coquille", ing: "coquille" ,qte_ing:this.quantites_ingredient.coquille},
              {ingredient:"Son de Riz", ing: "son_de_riz",qte_ing:this.quantites_ingredient.son_de_riz},
              {ingredient:"Tourteaux de copra", ing: "tourteaux_de_copra",qte_ing:this.quantites_ingredient.tourteaux_de_copra},
              {ingredient:"Millet", ing: "millet" ,qte_ing:this.quantites_ingredient.millet},
              {ingredient:"Sorgho", ing: "sorgho",qte_ing:this.quantites_ingredient.sorgho},
              {ingredient:"Remoulage", ing: "remoulage",qte_ing:this.quantites_ingredient.remoulage},
              {ingredient:"Ble", ing:"ble" ,qte_ing:this.quantites_ingredient.ble}
            ];
    // somme des nutriments complète


            // ajout de la propriété nut 
            this.data_nutriments=[
              {nutriment:"Matière Sèche", nutAlgo: "matiere_seche", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).matiere_seche)},
              {nutriment:"Energie Brute", nutAlgo: "energie_brute", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).energie_brute)},
              {nutriment:"Energie Métabolisable", nutAlgo:"energie_metabolisable", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).energie_metabolisable)},
              {nutriment:"Extratif Non Azote", nutAlgo:"extratif_non_azote", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).extratif_non_azote)},
              {nutriment:"Amidon", nutAlgo:"amidon", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).amidon)},
              {nutriment:"Sucre", nutAlgo:"sucre", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).sucre)},
              {nutriment:"Matière Grasse", nutAlgo:"matiere_grasse", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).matiere_grasse)},
              {nutriment:"Cellulose Brute", nutAlgo:"cellulose_brute", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).cellulose_brute)},
              {nutriment:"Matiere Protéine Brute", nutAlgo:"matiere_proteine_brute", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).matiere_proteine_brute)},
              {nutriment:"Lysine", nutAlgo:"lysine", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).lysine)},
              {nutriment:"Méthionine", nutAlgo:"methionine", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).methionine)},
              {nutriment:"Tryptine", nutAlgo:"tryp", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).tryp)},
              {nutriment:"Trheo", nutAlgo:"trheo", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).trheo)},
              {nutriment:"Calcium", nutAlgo:"calcium", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).calcium)},
              {nutriment:"Phosphore Assimiliable", nutAlgo:"phosphore_assimiliable", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).phosphore_assimiliable)},
              {nutriment:"Taux D'incorporation", nutAlgo:"taux_d_incorporation", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(this.quantites_ingredient).taux_d_incorporation)}
            ];

            this.storeData();
            this.router.navigate(['rapport-composition',{
              pharse: this.pharseProjet,
              nbrPoulet: this.nbrPoulet,
              ingredients_selectionnes: this.ingredientSelectionne
            }]);
        }
        else{

          const alert= await this.alertCtrl.create({
              header:'Erreur dans le formulaire :',
              message:'Veuillez vérrifier qu\'aucun champ présent dans le formulaire ne soit vide, inférieur ou égal à zéro',
              buttons:['OK']
          });
          await alert.present();
        }
      }  
}
