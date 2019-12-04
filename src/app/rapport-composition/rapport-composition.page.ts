import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from '../services/helper.service';
import { ShareDataAccountService } from '../services/shareData/share-data-account.service';
import { CompositionDynamique } from '../services/ingredient/composition-dynamique.service';
import { AlertController } from '@ionic/angular';
import { DureeAlimentService } from '../services/duree-aliment.service';

@Component({
  selector: 'app-rapport-composition',
  templateUrl: './rapport-composition.page.html',
  styleUrls: ['./rapport-composition.page.scss'],
})
export class RapportCompositionPage implements OnInit {

	pet: string ="ingredient";
	data_ingredient:any;
	data_nutriment:any;
  qte_total:number;
  nut_proteine:number;

  public isAndroid;
  public pharseProjet;
  public nbre_sujet;
  public posologi:boolean=false;

  public ingredient;
  public i:number=0;
  public ingQte={};
  public ingredients_selectionnes;
  public qteTotalAliment= 0;
  public dureComposition;
  public qteConsommerParPharse;
    
  constructor(public router: Router,
              public route: ActivatedRoute,
              public appData: ShareDataAccountService,
              private alimentation: CompositionDynamique,
              private countNut: HelperService,
              public alertCtrl: AlertController,
              public dureAliment: DureeAlimentService
              ) {

    this.pharseProjet = this.route.snapshot.paramMap.get('pharse');
    this.appData.currentData.subscribe((data:any)=>{
      this.data_nutriment= data.dataNutriment;
      this.data_ingredient= data.dataIngredients;
      this.nbre_sujet= data.nbrPoulet;   
      // calcul de la qté total d'aliment
      this.qteTotalAliment= this.getQteTotalAliment();
      // calculate duration of composition
      this.dureComposition = this.dureAliment.nbrJour(this.nbre_sujet,this.qteTotalAliment, this.pharseProjet);
      
      if(this.pharseProjet=="Démarrage"){
        this.qteConsommerParPharse = 980/21;
      } else if(this.pharseProjet=="Croissance"){
        this.qteConsommerParPharse = 840/7;
      } else{
        this.qteConsommerParPharse = 1050/17;
      }
    });
    this.ingredients_selectionnes = this.route.snapshot.paramMap.get('ingredients_selectionnes').split(',');
    // this.qteTotalAliment= this.getQteTotalAliment();
    // console.log(" Infos ingrédients sélectionné ",this.data_ingredient);



  }
  getQteTotalAliment(){
    // calculation of amount total of ingredient
    let qteTotal=0;
    for(let ingredients of this.data_ingredient){
      qteTotal+=ingredients['qte_ing'];
    }
    return qteTotal;
 
  }

  ngOnInit() {
    // console.log(this.data_ingredient);
  }
 
async addIngredient() {
  const alert = await this.alertCtrl.create({
    header: 'Ajout d\'ingrédients',
    inputs: [
      {
        name: 'mais',
        type: 'checkbox',
        label: 'Maïs',
        value: 'mais',
      },
      {
        name: 'tourteau_de_coton',
        type: 'checkbox',
        label: 'Tourteau de coton',
        value: 'tourteau_de_coton',
      },
      {
        name: 'tourteaux_de_soja',
        type: 'checkbox',
        label: 'Tourteaux de soja',
        value: 'Tourteaux_de_soja'
      },
      {
        name: 'tourteaux_d_arachide',
        type: 'checkbox',
        label: 'Tourteaux d\'arrachide',
        value: 'tourteaux_d_arachide'
      },
      {
        name: 'son_de_ble',
        type: 'checkbox',
        label: 'Son de ble',
        value: 'son_de_ble'
      },
      {
        name: 'tourteaux_de_palmiste',
        type: 'checkbox',
        label: 'Tourteaux de palmiste',
        value: 'tourteaux_de_palmiste'
      },
      {
        name: 'farine_de_sang',
        type: 'checkbox',
        label: 'Farine de sang',
        value: 'farine_de_sang'
      },
      {
        name: 'lysine',
        type: 'checkbox',
        label: 'Lysine',
        value: 'lysine'
      },
      {
        name: 'methionine',
        type: 'checkbox',
        label: 'Méthionine',
        value: 'methionine'
      },
      {
        name: 'patate',
        type: 'checkbox',
        label: 'Patate',
        value: 'patate'
      },
      {
        name: 'graisse_animale',
        type: 'checkbox',
        label: 'Graisse_animale',
        value: 'graisse_animale'
      },
      {
        name: 'huile_vegetale',
        type: 'checkbox',
        label: 'Huile végétale',
        value: 'huile_vegetale'
      },
      {
        name: 'manioc',
        type: 'checkbox',
        label: 'manioc',
        value: 'manioc'
      },
      {
        name: 'dreche',
        type: 'checkbox',
        label: 'Drèche',
        value: 'dreche'
      },
      {
        name: 'banane',
        type: 'checkbox',
        label: 'Banane',
        value: 'banane'
      },
      {
        name: 'coquille',
        type: 'checkbox',
        label: 'Coquille',
        value: 'coquille'
      },
      {
        name: 'son_de_riz',
        type: 'checkbox',
        label: 'Son de riz',
        value: 'son_de_riz'
      },
      {
        name: 'tourteaux_de_copra',
        type: 'checkbox',
        label: 'Tourteaux de copra',
        value: 'tourteaux_de_copra'
      },
      {
        name: 'millet',
        type: 'checkbox',
        label: 'Millet',
        value: 'millet'
      },
      {
        name: 'sorgho',
        type: 'checkbox',
        label: 'Sorgho',
        value: 'sorgho'
      },
      {
        name: 'remoulage',
        type: 'checkbox',
        label: 'Remoulage',
        value: 'remoulage'
      },
    ],
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'secondary',

      }, {
        text: 'Ajouter',
        handler: async (ingredientsSelect) => {
          let reponse:boolean;
          // vérrification des ingrédients sélectionnés avec ceux ayant déjà un champ dans le formulaire
          for (let ings of ingredientsSelect){
            for(let currenIng of this.ingredients_selectionnes){
              if(ings==currenIng){
                reponse= true;
                break;
              } else{
                reponse= false;
              }
            }
            if (reponse==false){
              this.ingredients_selectionnes.push(ings)
            } else{
              const alert= await this.alertCtrl.create({
                header: "Erreur",
                message: "L'ingrédient '"+ings+"' possède déjà un champ dans le formulaire.",
                buttons: ['ok']
              });
              alert.present();              
            }
          }
          console.log("Ingrédients actuel ",this.ingredients_selectionnes); 
        }
      }
    ]
  });

  await alert.present();
}



  data(){
    let qteTotal=[]
    for( let ingredients of this.data_ingredient){
      this.ingQte[ingredients['ing']]= ingredients['qte_ing'];
    }

    return this.ingQte;
  }

  calculNut(qte_ing){
    
    this.data_nutriment=[
      {nutriment:"Matière Sèche",nutAlgo:"matiere_seche", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).matiere_seche)},
      {nutriment:"Energie Brute",nutAlgo:"energie_brute", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).energie_brute)},
      {nutriment:"Energie Métabolisable",nutAlgo:"energie_metabolisable", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).energie_metabolisable)},
      {nutriment:"Extratif Non Azote",nutAlgo:"extratif_non_azote", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).extratif_non_azote)},
      {nutriment:"Amidon",nutAlgo:"amidon", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).amidon)},
      {nutriment:"Sucre",nutAlgo:"sucre", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).sucre)},
      {nutriment:"Matière Grasse",nutAlgo:"matiere_grasse", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).matiere_grasse)},
      {nutriment:"Cellulose Brute",nutAlgo:"cellulose_brute", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).cellulose_brute)},
      {nutriment:"Matiere Protéine Brute",nutAlgo:"matiere_proteine_brute", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).matiere_proteine_brute)},
      {nutriment:"Lysine",nutAlgo:"lysine", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).lysine)},
      {nutriment:"Méthionine",nutAlgo:"methionine", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).methionine)},
      {nutriment:"Tryptine",nutAlgo:"tryp", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).tryp)},
      {nutriment:"Trheo",nutAlgo:"threo", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).trheo)},
      {nutriment:"Calcium",nutAlgo:"calcium", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).calcium)},
      {nutriment:"Phosphore Assimiliable",nutAlgo:"phosphore_assimiliable", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).phosphore_assimiliable)},
      {nutriment:"Taux D'incorporation",nutAlgo:"taux_d_incoporation", qte_nutriment:Number(this.alimentation.calcul_nut.somme_nutriments(qte_ing).taux_d_incorporation)}
    ];

    return this.data_nutriment;
  }

  changeQteIng(index, ing, qte_ing){

    this.data_ingredient[index]["qte_ing"] = qte_ing;
    // console.log(this.data());
    this.data_nutriment = this.calculNut(this.data())
    // this.qteTotalAliment = this.getQteTotalAliment()
   this.qteTotalAliment= this.getQteTotalAliment();
   this.dureComposition = this.dureAliment.nbrJour(this.nbre_sujet,this.qteTotalAliment, this.pharseProjet);

  }

  changeQteNut(nutChoisi,qteNut){

    let countIngchoisi= this.countNut.countIngChoisis(this.ingredients_selectionnes,nutChoisi);
    
    let alimentation = this.alimentation.formulation_dynamique(qteNut, countIngchoisi, this.ingredients_selectionnes, nutChoisi);
    this.data_ingredient = alimentation.data_ing_qte
    this.data_nutriment = alimentation.data_nutriments;

    this.qteTotalAliment= this.getQteTotalAliment();
    this.dureComposition = this.dureAliment.nbrJour(this.nbre_sujet,this.qteTotalAliment, this.pharseProjet);

  }

}
