import { Injectable } from '@angular/core';
import { ingredientNutVal } from './ingredient/nutriment-service.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  compteur=0;

  constructor(public NutVal: ingredientNutVal) {
   }


  verrifNutIng(){


  }


  countIngChoisis(ingChoisi:any, nutChoisi:string):number{
    let compteur=0;
    
    for(let ing of ingChoisi){

      switch (ing) {
        case "mais":
        (this.NutVal.nutriments_MAIS()[nutChoisi]>0)? compteur++: compteur;
        break;

        case "tourteau_de_coton":
          (this.NutVal.nutriments_TOURTEAUR_COTON()[nutChoisi]>0)? compteur++: compteur;
        break;
        
        case "tourteaux_de_soja": 
        (this.NutVal.nutriments_MAIS()[nutChoisi]>0)? compteur++: compteur;
        break;

        case "farine_d_os": 
        (this.NutVal.nutriments_FARINE_D_OS()[nutChoisi]>0)? compteur++: compteur;
        break;

        case  "tourteaux_d_arachide": 
        (this.NutVal.nutriments_TOURTEAUX_D_ARRACHIDE()[nutChoisi]>0)? compteur++: compteur;
        break;

        // case  "concentre_chair":
        //   (this.NutVal.nutrim()['nutChoisi']>0)? compteur++: compteur;
        //   break;

        // case  "concentre":
        //   (this.NutVal.nutriments_MAIS()['nutChoisi']>0)? compteur++: compteur;
        //   break;

        // case  "coque_de_cacao":
        //   (this.NutVal.nutriments_()['nutChoisi']>0)? compteur++: compteur;        break;

        case "soja_grille":
          (this.NutVal.nutriments_TOURTEAUX_DE_SOJA()[nutChoisi]>0)? compteur++: compteur;        
        break;
        case "son_de_ble":
          (this.NutVal.nutriments_SON_BLE()[nutChoisi]>0)? compteur++: compteur;        
        break;

        case "tourteaux_de_palmiste":
          (this.NutVal.nutriments_TOURTEAUX_DE_PALMISTE()[nutChoisi]>0)? compteur++: compteur;        break;
        
        case "huile_vegetale":
          (this.NutVal.nutriments_HUILE_VEGETALE()[nutChoisi]>0)? compteur++: compteur;        
        break;
        
          case "farine_de_poisson":
            (this.NutVal.nutriments_FARINE_DE_POISSON()[nutChoisi]>0)? compteur++: compteur;                    
          break;
        // case "lysine":
        //   (this.NutVal.nutriments_LYSINE()[nutChoisi]>0)? compteur++: compteur;        
        // break;

        // case "methionine":
        //   (this.NutVal.nutriments_ME()[nutChoisi]>0)? compteur++: compteur;                    

        // this.methionine=true;
        // break;

        case "patate":
            (this.NutVal.nutriments_PATATE()[nutChoisi]>0)? compteur++: compteur;                    
        break;

        case "graisse_animale":
            (this.NutVal.nutriments_GRAISSE_A()[nutChoisi]>0)? compteur++: compteur;                    

        break;

        case "huile_vegetale":
            (this.NutVal.nutriments_HUILE_VEGETALE()[nutChoisi]>0)? compteur++: compteur;                    
        break;

        case "manioc":
            (this.NutVal.nutriments_MANIOC()[nutChoisi]>0)? compteur++: compteur;                    
        break;

        case "dreche":
            (this.NutVal.nutriments_DRECHE()[nutChoisi]>0)? compteur++: compteur;                    
        break;

        case "banane":
            (this.NutVal.nutriments_BANANE()[nutChoisi]>0)? compteur++: compteur;                    
        break;

        case "coquille":
            (this.NutVal.nutriments_COQUILLE()[nutChoisi]>0)? compteur++: compteur;                    
        break;

        case "son_de_riz":
            (this.NutVal.nutriments_SON_RIZ()[nutChoisi]>0)? compteur++: compteur;                    
        break;

        case "tourteaux_de_copra":
            (this.NutVal.nutriments_TOURTEAUX_DE_COPRA()[nutChoisi]>0)? compteur++: compteur;                    
        break;

        case "millet":
            (this.NutVal.nutriments_MILLET()[nutChoisi]>0)? compteur++: compteur;                    
        break;

        case "sorgho":
            (this.NutVal.nutriments_SORGHO()[nutChoisi]>0)? compteur++: compteur;                    
        break;

        case "remoulage":
            (this.NutVal.nutriments_REMOULAGE()[nutChoisi]>0)? compteur++: compteur;                    
        break;

        case "ble":
            (this.NutVal.nutriments_BLE()[nutChoisi]>0)? compteur++: compteur;                    
        break;

        case "farine_de_sang":
            (this.NutVal.nutriments_FARINE_DE_SANG()[nutChoisi]>0)? compteur++: compteur;                    
        break;        
      }      
    }
    return compteur;
  }

}
