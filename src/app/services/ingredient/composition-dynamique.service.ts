import { Injectable } from '@angular/core';
import { ingredientNutVal } from './nutriment-service.service';
import { CalculNutrimentIngredient } from './calcul-nutriment-ingredient.service';


@Injectable({
  providedIn: 'root'
})
export class CompositionDynamique{

   public quantites_ingredient:any={
    mais:0,
    tourteau_de_coton:0,
    tourteaux_de_soja:0,
    farine_d_os:0,
    tourteaux_d_arachide:0,
    concentre_chair:0,
    concentre:0,
    coque_de_cacao:0,
    soja_grille:0,
    son_de_ble:0,
    tourteaux_de_palmiste:0,
    huile_de_palme:0,
    farine_de_poisson:0,
    lysine:0,
    methionine:0,
    patate:0,
    graisse_animale:0,
    huile_vegetale:0,
    manioc:0,
    dreche:0,
    banane:0,
    coquille:0,
    son_de_riz:0,
    tourteaux_de_copra:0,
    millet:0,
    sorgho:0,
    remoulage:0,
    ble:0,
    farine_de_sang:0
  };

  compteur:number;

  constructor(public ing_nut_val: ingredientNutVal,
              public calcul_nut: CalculNutrimentIngredient
    ){

  }
/*
*composition dynamique d'un aliment
*@params quantité nutriment choisi pour la dynamisation (choice_nut_val): number
*@params nombre d'ingredient choisi (compteur): number
*@params ingredients choisient (choice_ing): objet
*@params nutriment choisi pour la dynamisation (choice_nut): string
*@return:objet
*
*/

	formulation_dynamique(choice_nut_val:number,compteur:number,choice_ing,choice_nut:any){
		// quantitée maximum qu'un nutriment peur contenir en fonction du nombre d'ingredient choisi
    // this.compteur= compteur;
    console.log(" nut val: ",choice_nut_val," \n compteur : ", compteur," \n choice ing ", choice_ing, " \n nutriment ", choice_nut);
    
    // valeur nutritionnelle maximum de chaque ingrédient
    let nut_val_max:number=choice_nut_val/compteur;


    /*
    *qte_ing (calcul de la quantité d'ingredient en fonction de la quantité du nutriment choisi)
    *@params quantité nutriment choisi (choice_nut_val): number
    *@params quantité de nutriment max pour chaque ingredient (qte_nut_max): number
    *@return:number
    *
    */

		function qte_ing(choice_nut_val:number):number{
		/*
		  calcul de la quantité d'ingrédient
		  ax%=b% <=> x=b%/a% 
		*/
			if(choice_nut_val==0){
			    let a:number=choice_nut_val/100;
          let b:number=nut_val_max;
          // $qte_max_ing--;
           // return Math.round(a);
          //  console.log('compteur '+this.compteur);
          return a;
			    
      }
			else{
			    let a:number=choice_nut_val/100;
			    let b:number=nut_val_max;
			    let x:number=b/a;
			    return x;
			}
		}

// début des vérrifications sur le nutriment choisis
     

	switch(choice_nut){
    case "matiere_proteine_brute":
      for(let ingredient of choice_ing){

        switch(ingredient){            

          case "mais":
            this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().matiere_proteine_brute);                
            break;  

		  case "tourteau_de_coton":
              this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().matiere_proteine_brute); 
          break;

          case "tourteaux_de_soja":
            this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_proteine_brute); 
          break;
		  
		  case "farine_d_os":
            this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().matiere_proteine_brute); 
          break;

          case "tourteaux_d_arachide":
            this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().matiere_proteine_brute); 
          break;

          case "concentre_chair":
            // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().matiere_proteine_brute); 
          break;
          case "concentre":
            // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().matiere_proteine_brute); 
          break;
          case "coque_de_cacao":
            // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().matiere_proteine_brute); 
          break;

          case "soja_grille":
            // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().matiere_proteine_brute); 
          break;
          
          case "son_de_ble":
            this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().matiere_proteine_brute);
          break;

          case "tourteaux_de_palmiste":
            this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().matiere_proteine_brute); 
          break;

          case "huile_de_palme":
            // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().matiere_proteine_brute);          
          break;

          case "farine_de_poisson":
            this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().matiere_proteine_brute); 
          break;
          
          case "lysine":
            // this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().matiere_proteine_brute); 
          break;

          case "methionine":
            // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().matiere_proteine_brute); 
          break;

          case "patate":
            this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().matiere_proteine_brute); 
          break;

          case "graisse_animale":
            this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().matiere_proteine_brute);
          break;

          case "huile_vegetale":
            this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().matiere_proteine_brute);
          break;

          case "manioc":
            this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().matiere_proteine_brute);      
          break;

          case "dreche":
            this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().matiere_proteine_brute);
          break;

          case "banane":
            this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().matiere_proteine_brute);
          break;

          case "coquille":
            this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().matiere_proteine_brute);
          break;
          
          case "son_de_riz":
            this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().matiere_proteine_brute);
          break;

          case "tourteaux_de_copra":
            this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().matiere_proteine_brute);
          break;

          case "millet":
            this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().matiere_proteine_brute);
          break;

          case "sorgho":
            this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().matiere_proteine_brute);
          break;

          case "remoulage":
            this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().matiere_proteine_brute);
          break;

          case "ble":
            this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().matiere_proteine_brute);
          break
          
          case "farine_de_sang":
            this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().matiere_proteine_brute);
          break;
        }
      }
    break;

	//fin de l'exemple

			//première boucle
	case "matiere_seche":
      for(let ingredient of choice_ing){
      	switch(ingredient){
      		case "mais":
      			this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().matiere_seche); 
            break;

            case "torteau_de coton":
            	this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().matiere_seche); 
            break;

            case "tourteaux_de sodja":
            	 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_seche); 
            break;

            case "farine_d_os ":
            	 this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().matiere_seche); 
             break;

            case "tourteaux_d_arachide":
            	  this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().matiere_seche); 
            break;
            	
            // case "concentre_chair ":
            // 		 this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().matiere_seche); 
            // break;
            	
            // case "coque_de_cacao":
            // 		this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_COQUE_DE_CACAO().matiere_seche); 
            // break;

            case "soja_grille":
            		this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_seche); 
            break;

            case "son_de_ble":
            		 this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().matiere_seche);
            break;
            		
            case "tourteaux_de_palmiste":
            		  this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().matiere_seche); 
            break; 	
           
           case "huile_de_palme ":
           			this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().matiere_seche); 
           	break;
           		
           	case "farine_de_poisson":
           			this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().matiere_seche); 
           	break;

           	case "patate":
           			this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().matiere_seche); 
           	break;
           		
           	case "graisse_animale":
           			this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().matiere_seche);
           	break;							

           	case "huile_vegetale":
           			this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().matiere_seche);
           	break;	

 			case "manioc":
 				this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().matiere_seche);
 			break;              						         

            case "dreche":
            	this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().matiere_seche);
            break;	

            case "coquille":
            		this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().matiere_seche);
            break;	
            		
            case "son_de_riz":
            		this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().matiere_seche);
            break;
            	
           case "tourteaux_de_copra":
           			this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().matiere_seche);
           	break;
           			
           	case "millet":
           			this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().matiere_seche);
           	break;
           						
           	case "sorgho":
           			this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().matiere_seche);
           	break;

           	case "remoulage":
           			this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().matiere_seche);
           	break;	

           case "ble":
           			// this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().matiere_seche);
           	break;

           	case "farine_de_sang":
           			 this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().matiere_seche);
           	break;
      		 }
      		}
      		break;
      		 
      		case "energie_brute":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().energie_brute); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().energie_brute);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().energie_brute);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().energie_brute);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().energie_brute);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().energie_brute);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().energie_brute);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().energie_brute);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().energie_brute);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().energie_brute);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().energie_brute);
      					break;
      					
      					case "huile_de_palme":
      						// this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().energie_brute);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().energie_brute);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().energie_brute);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().energie_brute); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().energie_brute);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().energie_brute);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().energie_brute);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().energie_brute);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().energie_brute);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().energie_brute);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().energie_brute);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().energie_brute);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().energie_brute);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().energie_brute);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().energie_brute);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().energie_brute);
      					break;
      					
      					case "ble":
      						// this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().energie_brute);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().energie_brute);
      					break;
      				}
      			}
      			break;


      			//troisième boucle
      			case "energie_metabolisable":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().energie_metabolisable); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().energie_metabolisable);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().energie_metabolisable);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().energie_metabolisable);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().energie_metabolisable);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().energie_metabolisable);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().energie_metabolisable);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().energie_metabolisable);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().energie_metabolisable);
      					break;

      					case "son_de_ble":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().energie_metabolisable);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().energie_metabolisable);
      					break;
      					
      					case "huile_de_palme":
      						// this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().energie_metabolisable);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().energie_metabolisable);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().energie_metabolisable);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().energie_metabolisable); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().energie_metabolisable);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().energie_metabolisable);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().energie_metabolisable);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().energie_metabolisable);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().energie_metabolisable);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().energie_metabolisable);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().energie_metabolisable);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().energie_metabolisable);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().energie_metabolisable);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().energie_metabolisable);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().energie_metabolisable);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().energie_metabolisable);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().energie_metabolisable);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().energie_metabolisable);
      					break;
      				}
      			}
      			break;


      						//4eme boucle
      		case "extratif_non_azote":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().extratif_non_azote); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().extratif_non_azote);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().extratif_non_azote);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().extratif_non_azote);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().extratif_non_azote);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().extratif_non_azote);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().extratif_non_azote);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().extratif_non_azote);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().extratif_non_azote);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_SON_BLE().extratif_non_azote);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().extratif_non_azote);
      					break;
      					
      					case "huile_de_palme":
      						// this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().extratif_non_azote);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().extratif_non_azote);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().extratif_non_azote);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().extratif_non_azote); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().extratif_non_azote);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().extratif_non_azote);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().extratif_non_azote);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().extratif_non_azote);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().extratif_non_azote);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().extratif_non_azote);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().extratif_non_azote);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().extratif_non_azote);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().extratif_non_azote);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().extratif_non_azote);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().extratif_non_azote);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().extratif_non_azote);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().extratif_non_azote);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().extratif_non_azote);
      					break;
      				}
      			}
      			break;	


      			//5eme boucle
      				case "amidon":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().amidon); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().amidon);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().amidon);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().amidon);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().amidon);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().amidon);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().amidon);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().amidon);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().amidon);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_SON_BLE().amidon);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().amidon);
      					break;
      					
      					case "huile_de_palme":
      						this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().amidon);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().amidon);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().amidon);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().amidon); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().amidon);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().amidon);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().amidon);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().amidon);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().amidon);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().amidon);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().amidon);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().amidon);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().amidon);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().amidon);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().amidon);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().amidon);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().amidon);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().amidon);
      					break;
      				}
      			}
      			break;	


      						// 6eme boucle

      		case "sucre":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().sucre); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().sucre);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().sucre);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().sucre);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().sucre);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().sucre);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().sucre);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().sucre);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().sucre);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_SON_BLE().sucre);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().sucre);
      					break;
      					
      					case "huile_de_palme":
      						this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().sucre);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().sucre);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().sucre);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().sucre); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().sucre);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().sucre);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().sucre);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().sucre);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().sucre);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().sucre);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().sucre);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().sucre);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().sucre);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().sucre);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().sucre);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().sucre);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().sucre);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().sucre);
      					break;
      				}
      			}
      			break;	

      							// 7eme boucle

      			case "matiere_grasse":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().matiere_grasse); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().matiere_grasse);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_grasse);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().matiere_grasse);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().matiere_grasse);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().matiere_grasse);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().matiere_grasse);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().matiere_grasse);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().matiere_grasse);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_SON_BLE().matiere_grasse);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().matiere_grasse);
      					break;
      					
      					case "huile_de_palme":
      						this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().matiere_grasse);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().matiere_grasse);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().matiere_grasse);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().matiere_grasse); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().matiere_grasse);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().matiere_grasse);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().matiere_grasse);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().matiere_grasse);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().matiere_grasse);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().matiere_grasse);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().matiere_grasse);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().matiere_grasse);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().matiere_grasse);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().matiere_grasse);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().matiere_grasse);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().matiere_grasse);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().matiere_grasse);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().matiere_grasse);
      					break;
      				}
      			}
      			break;	

      						// 8eme boucle

      		case "cellulose_brute":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().cellulose_brute); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().cellulose_brute);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().cellulose_brute);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().cellulose_brute);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().cellulose_brute);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().cellulose_brute);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().cellulose_brute);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().cellulose_brute);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().cellulose_brute);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_SON_BLE().cellulose_brute);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().cellulose_brute);
      					break;
      					
      					case "huile_de_palme":
      						this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().cellulose_brute);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().cellulose_brute);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().cellulose_brute);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().cellulose_brute); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().cellulose_brute);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().cellulose_brute);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().cellulose_brute);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().cellulose_brute);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().cellulose_brute);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().cellulose_brute);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().cellulose_brute);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().cellulose_brute);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().cellulose_brute);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().cellulose_brute);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().cellulose_brute);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().cellulose_brute);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().cellulose_brute);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().cellulose_brute);
      					break;
      				}
      			}
      			break;	

      					// 9eme boucle

      		case "lysine":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().lysine); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().lysine);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().lysine);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().lysine);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().lysine);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().lysine);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().lysine);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().lysine);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().lysine);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_SON_BLE().lysine);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().lysine);
      					break;
      					
      					case "huile_de_palme":
      						this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().lysine);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().lysine);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().lysine);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().lysine); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().lysine);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().lysine);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().lysine);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().lysine);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().lysine);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().lysine);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().lysine);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().lysine);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().lysine);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().lysine);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().lysine);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().lysine);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().lysine);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().lysine);
      					break;
      				}
      			}
      			break;	

      					// 10eme boucle

      		case "methionine":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().methionine); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().methionine);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().methionine);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().methionine);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().methionine);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().methionine);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().methionine);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().methionine);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().methionine);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_SON_BLE().methionine);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().methionine);
      					break;
      					
      					case "huile_de_palme":
      						this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().methionine);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().methionine);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().methionine);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().methionine); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().methionine);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().methionine);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().methionine);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().methionine);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().methionine);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().methionine);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().methionine);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().methionine);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().methionine);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().methionine);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().methionine);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().methionine);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().methionine);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().methionine);
      					break;
      				}
      			}
      			break;	

      		case "tryp":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().tryp); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().tryp);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().tryp);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().tryp);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().tryp);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().tryp);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().tryp);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().tryp);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().tryp);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_SON_BLE().tryp);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().tryp);
      					break;
      					
      					case "huile_de_palme":
      						this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().tryp);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().tryp);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().tryp);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().tryp); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().tryp);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().tryp);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().tryp);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().tryp);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().tryp);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().tryp);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().tryp);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().tryp);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().tryp);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().tryp);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().tryp);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().tryp);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().tryp);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().tryp);
      					break;
      				}
      			}
      			break;	

      		case "trheo":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().trheo); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().trheo);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().trheo);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().trheo);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().trheo);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().trheo);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().trheo);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().trheo);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().trheo);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_SON_BLE().trheo);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().trheo);
      					break;
      					
      					case "huile_de_palme":
      						this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().trheo);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().trheo);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().trheo);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().trheo); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().trheo);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().trheo);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().trheo);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().trheo);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().trheo);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().trheo);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().trheo);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().trheo);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().trheo);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().trheo);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().trheo);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().trheo);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().trheo);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().trheo);
      					break;
      				}
      			}
      			break;	

      		case "calcium":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().calcium); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().calcium);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().calcium);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().calcium);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().calcium);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().calcium);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().calcium);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().calcium);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().calcium);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_SON_BLE().calcium);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().calcium);
      					break;
      					
      					case "huile_de_palme":
      						this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().calcium);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().calcium);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().calcium);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().calcium); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().calcium);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().calcium);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().calcium);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().calcium);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().calcium);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().calcium);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().calcium);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().calcium);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().calcium);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().calcium);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().calcium);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().calcium);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().calcium);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().calcium);
      					break;
      				}
      			}
      			break;	

      		case "phosphore_assimiliable":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().phosphore_assimiliable); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().phosphore_assimiliable);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().phosphore_assimiliable);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().phosphore_assimiliable);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().phosphore_assimiliable);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().phosphore_assimiliable);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().phosphore_assimiliable);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().phosphore_assimiliable);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().phosphore_assimiliable);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_SON_BLE().phosphore_assimiliable);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().phosphore_assimiliable);
      					break;
      					
      					case "huile_de_palme":
      						this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().phosphore_assimiliable);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().phosphore_assimiliable);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().phosphore_assimiliable);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().phosphore_assimiliable); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().phosphore_assimiliable);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().phosphore_assimiliable);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().phosphore_assimiliable);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().phosphore_assimiliable);
      					break;

      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().phosphore_assimiliable);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().phosphore_assimiliable);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().phosphore_assimiliable);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().phosphore_assimiliable);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().phosphore_assimiliable);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().phosphore_assimiliable);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().phosphore_assimiliable);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().phosphore_assimiliable);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().phosphore_assimiliable);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().phosphore_assimiliable);
      					break;
      				}
      			}
      			break;	

      		case "taux_d_incorporation":
      			for(let ingredient of choice_ing){
      				switch(ingredient){
      					case "mais":
      						this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().taux_d_incorporation); 
      					break;
      					
      					case "tourteau_de_coton":
      						this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().taux_d_incorporation);
      					break;
      					
      					case "tourteaux_de_soja":
      						 this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().taux_d_incorporation);
      					break;

      					case "farine_d_os":
      						this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().taux_d_incorporation);
      					break;
      					
      					case "tourteaux_d_arachide":
      						 this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().taux_d_incorporation);
      					break;
      					
      					case "concentre_chair":
      						//this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().taux_d_incorporation);
      					break;
      					
      					case "concentre":
      						//this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().taux_d_incorporation);
      					break;
      					
      					case "coque_de_cacao":
      						//this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().taux_d_incorporation);
      					break;
      					
      					case "soja_grille":
      						// this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().taux_d_incorporation);
      					break;

      					case "son_de_ble":
      						this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_SON_BLE().taux_d_incorporation);
      					break;

      					case "tourteaux_de_palmiste":
      						this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().taux_d_incorporation);
      					break;
      					
      					case "huile_de_palme":
      						this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().taux_d_incorporation);
      					break;
      					
      					case "farine_de_poisson":
      						this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().taux_d_incorporation);
      					break;
      					
      					case "lysine":
      						// this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().taux_d_incorporation);
      					break;
      					
      					case "methionine":
      						// this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().taux_d_incorporation); 
      					break;
      					
      					case "patate":
      						this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().taux_d_incorporation);
      					break;
      					
      					case "graisse_animale":
      						this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().taux_d_incorporation);
      					break;

      					case "huile_vegetale":
      						this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().taux_d_incorporation);
      					break;

      					case "manioc":
      						this.quantites_ingredient.manioc=qte_ing(this.ing_nut_val.nutriments_MANIOC().taux_d_incorporation);
      					break;
      					case "dreche":
      						this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().taux_d_incorporation);
      					break;
      					
      					case "banane":
      						this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().taux_d_incorporation);
      					break;

      					case "coquille":
      						this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().taux_d_incorporation);
      					break;

      					case "son_de_riz":
      						 this.quantites_ingredient.son_de_riz=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().taux_d_incorporation);
      					break;
      					
      					case "tourteaux_de_copra":
      						this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().taux_d_incorporation);
      					break;
      					
      					case "millet":
      						this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().taux_d_incorporation);
      					break;
      					
      					case "sorgho":
      						 this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().taux_d_incorporation);
      					break;
      					
      					case "remoulage":
      						this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().taux_d_incorporation);
      					break;
      					
      					case "ble":
      						this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().taux_d_incorporation);
      					break;
      					
      					case "farine_de_sang":
      						this.quantites_ingredient.farine_de_sang=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().taux_d_incorporation);
      					break;
      				}
      			}
      		}

        // préparation des variables à envoyer dans la page de rapport
        let data_ing_qte:any=[
          {ingredient:"Maïs",ing:"mais",qte_ing:this.quantites_ingredient.mais},
          {ingredient:"Tourteaux de coton",ing:"tourteau_de_coton",qte_ing:this.quantites_ingredient.tourteau_de_coton},
          {ingredient:"Tourteaux de soja",ing:"tourteaux_de_soja",qte_ing:this.quantites_ingredient.tourteaux_de_soja},
          {ingredient:"Farine d'os",ing:"farine_d_os",qte_ing:this.quantites_ingredient.farine_d_os},
          {ingredient:"Tourteaux d'arachide",ing:"tourteaux_d_arachide",qte_ing:this.quantites_ingredient.tourteaux_d_arachide},
          {ingredient:"concentré chair",ing:"concentre_chair",qte_ing:this.quantites_ingredient.concentre_chair},
          {ingredient:"concentré 10%",ing:"concentre",qte_ing:this.quantites_ingredient.concentre},
          {ingredient:"Coque de cacao",ing:"coque_de_cacao",qte_ing:this.quantites_ingredient.coque_de_cacao},
          {ingredient:"soja grillé",ing:"soja_gille",qte_ing:this.quantites_ingredient.soja_grille},
          {ingredient:"son de blé",ing:"son_de_ble",qte_ing:this.quantites_ingredient.son_de_ble},
          {ingredient:"Tourteaux de palmiste",ing:"tourteaux_de_palmiste",qte_ing:this.quantites_ingredient.tourteaux_de_palmiste},
          {ingredient:"Huile de palme",ing:"huile_de_palme",qte_ing:this.quantites_ingredient.huile_de_palme},
          {ingredient:"Farine de poisson",ing:"farine_de_poisson",qte_ing:this.quantites_ingredient.farine_de_poisson},
          {ingredient:"Farine de sang",ing:"farine_de_sang",qte_ing:this.quantites_ingredient.farine_de_sang},
          {ingredient:"Lysine",ing:"lysine",qte_ing:this.quantites_ingredient.lysine},
          {ingredient:"Méthionine",ing:"methionine",qte_ing:this.quantites_ingredient.methionine},
          {ingredient:"Patate",ing:"patate",qte_ing:this.quantites_ingredient.patate},
          {ingredient:"Graisse animale",ing:"graisse_animale",qte_ing:this.quantites_ingredient.graisse_animale},
          {ingredient:"Huile végétale",ing:"huile_vegetale",qte_ing:this.quantites_ingredient.huile_vegetale},
          {ingredient:"Manioc",ing:"manioc",qte_ing:this.quantites_ingredient.manioc},
          {ingredient:"Dreche",ing:"dreche",qte_ing:this.quantites_ingredient.dreche},
          {ingredient:"Banane",ing:"banane",qte_ing:this.quantites_ingredient.banane},
          {ingredient:"Coquille",ing:"coquille",qte_ing:this.quantites_ingredient.coquille},
          {ingredient:"Son de Riz",ing:"son_de_riz",qte_ing:this.quantites_ingredient.son_de_riz},
          {ingredient:"Tourteaux de copra",ing:"tourteaux_de_copra",qte_ing:this.quantites_ingredient.tourteaux_de_copra},
          {ingredient:"Millet",ing:"millet",qte_ing:this.quantites_ingredient.millet},
          {ingredient:"Sorgho",ing:"sorgho",qte_ing:this.quantites_ingredient.sorgho},
          {ingredient:"Remoulage",ing:"remoulage",qte_ing:this.quantites_ingredient.remoulage},
          {ingredient:"Ble",ing:"ble",qte_ing:this.quantites_ingredient.ble}
        ];

        // résultant des calcul des nutriments finals
        let data_nutriments:any=[
          {nutriment:"Matière Sèche",nutAlgo:"matiere_seche", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).matiere_seche},
          {nutriment:"Energie Brute", nutAlgo:"energie_brute", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).energie_brute},
          {nutriment:"Energie Métabolisable",nutAlgo:"energie_metabolisable", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).energie_metabolisable},
          {nutriment:"Extratif Non Azote",nutAlgo:"extratif_non_azote", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).extratif_non_azote},
          {nutriment:"Amidon",nutAlgo:"amidon", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).amidon},
          {nutriment:"Sucre", nutAlgo: "sucre", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).sucre},
          {nutriment:"Matière Grasse", nutAlgo:"matiere_grasse", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).matiere_grasse},
          {nutriment:"Cellulose Brute",nutAlgo:"cellulose_brute", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).cellulose_brute},
          {nutriment:"Matiere Protéine Brute",nutAlgo:"matiere_proteine_brute", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).matiere_proteine_brute},
          {nutriment:"Lysine", nutAlgo:"lysine", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).lysine},
          {nutriment:"Méthionine", nutAlgo:"methionine", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).methionine},
          {nutriment:"Tryptine",nutAlgo:"tryp", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).tryp},
          {nutriment:"Trheo",nutAlgo:"trheo", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).trheo},
          {nutriment:"Calcium",nutAlgo:"calcium", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).calcium},
          {nutriment:"Phosphore Assimiliable",nutAlgo:"phosphore_assimiliable", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).phosphore_assimiliable},
          {nutriment:"Taux D'incorporation", nutAlgo:"taux_d_incorporation", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).taux_d_incorporation}
        ];
        // let resultat:any=[data_nutriments,data_ing_qte];
		// return resultat;
		console.log("Ingrédient val : ",this.quantites_ingredient);
		console.log(" Nutriments:  ",data_nutriments);

		return {data_nutriments,data_ing_qte}; 
      
  }
}
