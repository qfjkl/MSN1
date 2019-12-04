import { Injectable } from '@angular/core';
import { ingredientNutVal } from './nutriment-service.service';
import { CalculNutrimentIngredient } from './calcul-nutriment-ingredient.service';

@Injectable({
  providedIn: 'root'
})
export class CompositionManuelle {
  public quantites_ingredient={
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

  constructor(public ing_nut_val: ingredientNutVal,
              public calcul_nut: CalculNutrimentIngredient
    ){

  }
/*
*composition dynamique d'un aliment
*@params quantité nutriment choisi pour la dynamisation (choice_nut_val): number
*@params nombre d'ingredient choisi (compteur): number
*@params ingredient choisi (choice_ing): objet
*@params nutriment choisi pour la dynamisation (choice_nut): string
*@return:objet
*
*/

	formulation_dynamique(choice_nut_val:number,compteur:number,choice_ing,choice_nut:any){
		// quantitée maximum qu'un nutriment peur contenir en fonction du nombre d'ingredient choisi
		let $qte_max_ing:number=choice_nut_val/compteur;
    console.log(choice_nut);
    /*
    *qte_ing (calcul de la quantité d'ingredient en fonction de la quantité du nutriment choisi)
    *@params quantité nutriment choisi (choice_nut_val): number
    *@params quantité de nutriment max pour chaque ingredient (qte_nut_max): number
    *@return:number
    *
    */

		function qte_ing(choice_nut_val:number,qte_nut_max=$qte_max_ing):number{
		/*
		  calcul de la quantité d'ingrédient
		  ax%=b% <=> x=b%/a% 
		*/
			if(choice_nut_val==0){
			    let a:number=choice_nut_val/100;
			    let b:number=qte_nut_max;
			   	// return Math.round(a);
          return a;
			    
      }
			else{
			    let a:number=choice_nut_val/100;
			    let b:number=qte_nut_max;
			    let x:number=b/a;
			    return x;
			}
		}

// début des vérrifications sur le nutriment choisis
      switch(choice_nut){
        case "matiere_proteine_brute":
          for(let ingredient of choice_ing){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().matiere_proteine_brute);                 // console.log(this.quantites_ingredient.mais);
              console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().matiere_proteine_brute); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_proteine_brute); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().matiere_proteine_brute); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().matiere_proteine_brute); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().matiere_proteine_brute); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().matiere_proteine_brute); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().matiere_proteine_brute); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().matiere_proteine_brute); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().matiere_proteine_brute);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().matiere_proteine_brute); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().matiere_proteine_brute);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().matiere_proteine_brute); 
            }
            if(ingredient=="lysine"){
              // this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().matiere_proteine_brute); 
            }
            if (ingredient=="methionine"){
              // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().matiere_proteine_brute); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().matiere_proteine_brute); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().matiere_proteine_brute);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().matiere_proteine_brute);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().matiere_proteine_brute);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().matiere_proteine_brute);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().matiere_proteine_brute);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().matiere_proteine_brute);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().matiere_proteine_brute);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().matiere_proteine_brute);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().matiere_proteine_brute);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().matiere_proteine_brute);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().matiere_proteine_brute);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().matiere_proteine_brute);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().matiere_proteine_brute);
            }
          }
        break;
        case "matiere_seche":
          for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().matiere_seche); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().matiere_seche); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_seche); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().matiere_seche); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().matiere_seche); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().matiere_seche); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().matiere_seche); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().matiere_seche); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().matiere_seche); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().matiere_seche);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().matiere_seche); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().matiere_seche);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().matiere_seche); 
            }
            if(ingredient=="lysine"){
              // this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().matiere_seche); 
            }
            if (ingredient=="methionine"){
              // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().matiere_seche); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().matiere_seche); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().matiere_seche);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().matiere_seche);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().matiere_seche);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().matiere_seche);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().matiere_seche);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().matiere_seche);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().matiere_seche);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().matiere_seche);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().matiere_seche);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().matiere_seche);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().matiere_seche);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().matiere_seche);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().matiere_seche);
            }
          }          
        break;
        case "energie_brute":
          for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().energie_brute); 
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().energie_brute); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().energie_brute); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().energie_brute); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().energie_brute); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().energie_brute); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().energie_brute); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().energie_brute); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().energie_brute); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().energie_brute);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().energie_brute); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().energie_brute);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().energie_brute); 
            }
            if(ingredient=="lysine"){
              // this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().energie_brute); 
            }
            if (ingredient=="methionine"){
              // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().energie_brute); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().energie_brute); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().energie_brute);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().energie_brute);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().energie_brute);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().energie_brute);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().energie_brute);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().energie_brute);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().energie_brute);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().energie_brute);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().energie_brute);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().energie_brute);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().energie_brute);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().energie_brute);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().energie_brute);
            }
          }
        break;
        case "energie_metabolisable":
          for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().energie_metabolisable); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().energie_metabolisable); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().energie_metabolisable); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().energie_metabolisable); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().energie_metabolisable); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().energie_metabolisable); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().energie_metabolisable); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().energie_metabolisable); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().energie_metabolisable); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().energie_metabolisable);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().energie_metabolisable); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().energie_metabolisable);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().energie_metabolisable); 
            }
            if(ingredient=="lysine"){
              // this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().energie_metabolisable); 
            }
            if (ingredient=="methionine"){
              // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().energie_metabolisable); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().energie_metabolisable); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().energie_metabolisable);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().energie_metabolisable);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().energie_metabolisable);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().energie_metabolisable);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().energie_metabolisable);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().energie_metabolisable);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().energie_metabolisable);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().energie_metabolisable);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().energie_metabolisable);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().energie_metabolisable);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().energie_metabolisable);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().energie_metabolisable);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().energie_metabolisable);
            }
          }
        break;
        case "extratif_non_azote":
           for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().extratif_non_azote); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().extratif_non_azote); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().extratif_non_azote); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().extratif_non_azote); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().extratif_non_azote); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().extratif_non_azote); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().extratif_non_azote); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().extratif_non_azote); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().extratif_non_azote); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().extratif_non_azote);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().extratif_non_azote); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().extratif_non_azote);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().extratif_non_azote); 
            }
            if(ingredient=="lysine"){
              // this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().extratif_non_azote); 
            }
            if (ingredient=="methionine"){
              // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().extratif_non_azote); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().extratif_non_azote); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().extratif_non_azote);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().extratif_non_azote);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().extratif_non_azote);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().extratif_non_azote);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().extratif_non_azote);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().extratif_non_azote);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().extratif_non_azote);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().extratif_non_azote);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().extratif_non_azote);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().extratif_non_azote);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().extratif_non_azote);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().extratif_non_azote);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().extratif_non_azote);
            }
          }
        break;
        case "amidon":
          for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().amidon); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().amidon); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().amidon); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().amidon); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().amidon); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().amidon); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().amidon); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().amidon); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().amidon); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().amidon);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().amidon); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().amidon);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().amidon); 
            }
            if(ingredient=="lysine"){
              // this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().amidon); 
            }
            if (ingredient=="methionine"){
              // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().amidon); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().amidon); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().amidon);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().amidon);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().amidon);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().amidon);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().amidon);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().amidon);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().amidon);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().amidon);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().amidon);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().amidon);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().amidon);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().amidon);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().amidon);
            }
          }
        break;
        case "sucre":
          for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().sucre); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().sucre); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().sucre); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().sucre); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().sucre); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().sucre); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().sucre); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().sucre); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().sucre); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().sucre);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().sucre); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().sucre);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().sucre); 
            }
            if(ingredient=="lysine"){
              // this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().sucre); 
            }
            if (ingredient=="methionine"){
              // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().sucre); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().sucre); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().sucre);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().sucre);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().sucre);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().sucre);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().sucre);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().sucre);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().sucre);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().sucre);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().sucre);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().sucre);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().sucre);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().sucre);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().sucre);
            }
          }
        break;
        case "matiere_grasse":
           for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().matiere_grasse); 
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().matiere_grasse); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_grasse); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().matiere_grasse); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().matiere_grasse); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().matiere_grasse); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().matiere_grasse); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().matiere_grasse); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().matiere_grasse); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().matiere_grasse);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().matiere_grasse); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().matiere_grasse);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().matiere_grasse); 
            }
            if(ingredient=="lysine"){
              // this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().matiere_grasse); 
            }
            if (ingredient=="methionine"){
              // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().matiere_grasse); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().matiere_grasse); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().matiere_grasse);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().matiere_grasse);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().matiere_grasse);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().matiere_grasse);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().matiere_grasse);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().matiere_grasse);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().matiere_grasse);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().matiere_grasse);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().matiere_grasse);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().matiere_grasse);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().matiere_grasse);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().matiere_grasse);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().matiere_grasse);
            }
          }
        break;
        case "cellulose_brute":
          for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().cellulose_brute); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().cellulose_brute); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().cellulose_brute); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().cellulose_brute); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().cellulose_brute); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().cellulose_brute); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().cellulose_brute); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().cellulose_brute); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().cellulose_brute); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().cellulose_brute);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().cellulose_brute); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().cellulose_brute);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().cellulose_brute); 
            }
            if(ingredient=="lysine"){
              // this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().cellulose_brute); 
            }
            if (ingredient=="methionine"){
              // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().cellulose_brute); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().cellulose_brute); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().cellulose_brute);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().cellulose_brute);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().cellulose_brute);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().cellulose_brute);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().cellulose_brute);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().cellulose_brute);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().cellulose_brute);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().cellulose_brute);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().cellulose_brute);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().cellulose_brute);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().cellulose_brute);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().cellulose_brute);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().cellulose_brute);
            }
          }
        break;
        case "lysine":
          for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().lysine); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().lysine); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().lysine); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().lysine); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().lysine); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().lysine); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().lysine); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().lysine); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().lysine); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().lysine);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().lysine); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().lysine);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().lysine); 
            }
            if(ingredient=="lysine"){
              // this.quantites_ingredient.lysine=qte_ing(this.ing_nut_val.nutriments_().lysine); 
            }
            if (ingredient=="methionine"){
              // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().lysine); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().lysine); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().lysine);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().lysine);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().lysine);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().lysine);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().lysine);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().lysine);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().lysine);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().lysine);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().lysine);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().lysine);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().lysine);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().lysine);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().lysine);
            }
          }
        break;
        case "methionine":
          for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().methionine); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().methionine); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().methionine); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().methionine); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().methionine); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().methionine); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().methionine); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().methionine); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().methionine); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().methionine);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().methionine); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().methionine);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().methionine); 
            }
            if(ingredient=="methionine"){
              // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().methionine); 
            }
            if (ingredient=="methionine"){
              // this.quantites_ingredient.methionine=qte_ing(this.ing_nut_val.nutriments_().methionine); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().methionine); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().methionine);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().methionine);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().methionine);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().methionine);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().methionine);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().methionine);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().methionine);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().methionine);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().methionine);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().methionine);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().methionine);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().methionine);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().methionine);
            }
          }
        break;
        case "tryp":
          for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().tryp); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().tryp); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().tryp); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().tryp); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().tryp); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().tryp); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().tryp); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().tryp); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().tryp); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().tryp);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().tryp); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().tryp);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().tryp); 
            }
            if(ingredient=="tryp"){
              // this.quantites_ingredient.tryp=qte_ing(this.ing_nut_val.nutriments_().tryp); 
            }
            if (ingredient=="tryp"){
              // this.quantites_ingredient.tryp=qte_ing(this.ing_nut_val.nutriments_().tryp); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().tryp); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().tryp);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().tryp);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().tryp);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().tryp);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().tryp);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().tryp);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().tryp);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().tryp);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().tryp);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().tryp);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().tryp);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().tryp);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().tryp);
            }
          }
        break;
        case "trheo":
           for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().trheo); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().trheo); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().trheo); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().trheo); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().trheo); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().trheo); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().trheo); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().trheo); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().trheo); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().trheo);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().trheo); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().trheo);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().trheo); 
            }
            if(ingredient=="trheo"){
              // this.quantites_ingredient.trheo=qte_ing(this.ing_nut_val.nutriments_().trheo); 
            }
            if (ingredient=="trheo"){
              // this.quantites_ingredient.trheo=qte_ing(this.ing_nut_val.nutriments_().trheo); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().trheo); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().trheo);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().trheo);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().trheo);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().trheo);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().trheo);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().trheo);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().trheo);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().trheo);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().trheo);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().trheo);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().trheo);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().trheo);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().trheo);
            }
          }
        break;
        case "calcium":
           for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().calcium); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().calcium); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().calcium); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().calcium); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().calcium); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().calcium); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().calcium); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().calcium); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().calcium); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().calcium);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().calcium); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().calcium);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().calcium); 
            }
            if(ingredient=="calcium"){
              // this.quantites_ingredient.calcium=qte_ing(this.ing_nut_val.nutriments_().calcium); 
            }
            if (ingredient=="calcium"){
              // this.quantites_ingredient.calcium=qte_ing(this.ing_nut_val.nutriments_().calcium); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().calcium); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().calcium);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().calcium);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().calcium);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().calcium);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().calcium);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().calcium);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().calcium);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().calcium);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().calcium);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().calcium);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().calcium);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().calcium);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().calcium);
            }
          }
        break;
        case "phosphore_assimiliable":
          for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().phosphore_assimiliable); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().phosphore_assimiliable); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().phosphore_assimiliable); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().phosphore_assimiliable); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().phosphore_assimiliable); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().phosphore_assimiliable); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().phosphore_assimiliable); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().phosphore_assimiliable); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().phosphore_assimiliable); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().phosphore_assimiliable);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().phosphore_assimiliable); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().phosphore_assimiliable);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().phosphore_assimiliable); 
            }
            if(ingredient=="phosphore_assimiliable"){
              // this.quantites_ingredient.phosphore_assimiliable=qte_ing(this.ing_nut_val.nutriments_().phosphore_assimiliable); 
            }
            if (ingredient=="phosphore_assimiliable"){
              // this.quantites_ingredient.phosphore_assimiliable=qte_ing(this.ing_nut_val.nutriments_().phosphore_assimiliable); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().phosphore_assimiliable); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().phosphore_assimiliable);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().phosphore_assimiliable);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().phosphore_assimiliable);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().phosphore_assimiliable);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().phosphore_assimiliable);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().phosphore_assimiliable);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().phosphore_assimiliable);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().phosphore_assimiliable);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().phosphore_assimiliable);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().phosphore_assimiliable);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().phosphore_assimiliable);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().phosphore_assimiliable);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().phosphore_assimiliable);
            }
          }
        break;
        case "taux_d_incorporation":
           for(let ingredient of choice_nut){
            if(ingredient=="mais"){
              this.quantites_ingredient.mais=qte_ing(this.ing_nut_val.nutriments_MAIS().taux_d_incorporation); 
                console.log(this.quantites_ingredient.mais);
            }
            if(ingredient=="tourteau_de_coton"){
                this.quantites_ingredient.tourteau_de_coton=qte_ing(this.ing_nut_val.nutriments_TOURTEAUR_COTON().taux_d_incorporation); 
            }
            if(ingredient=="tourteaux_de_soja"){
              this.quantites_ingredient.tourteaux_de_soja=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().taux_d_incorporation); 
            }
            if(ingredient=="farine_d_os"){
              this.quantites_ingredient.farine_d_os=qte_ing(this.ing_nut_val.nutriments_FARINE_D_OS().taux_d_incorporation); 
            }
            if(ingredient=="tourteaux_d_arachide"){
              this.quantites_ingredient.tourteaux_d_arachide=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().taux_d_incorporation); 
            }
            if(ingredient=="concentre_chair"){
              // this.quantites_ingredient.concentre_chair=qte_ing(this.ing_nut_val.nutriments().taux_d_incorporation); 
            }
            if(ingredient=="concentre"){
              // this.quantites_ingredient.concentre=qte_ing(this.ing_nut_val.nutriments_().taux_d_incorporation); 
            }
            if(ingredient=="coque_de_cacao"){
              // this.quantites_ingredient.coque_de_cacao=qte_ing(this.ing_nut_val.nutriments_().taux_d_incorporation); 
            }
            if(ingredient=="soja_grille"){
              // this.quantites_ingredient.soja_grille=qte_ing(this.ing_nut_val.nutriments_soj().taux_d_incorporation); 
            }
            if(ingredient=="son_de_ble"){
              this.quantites_ingredient.son_de_ble=qte_ing(this.ing_nut_val.nutriments_SON_BLE().taux_d_incorporation);
            } 
            if(ingredient=="tourteaux_de_palmiste"){
              this.quantites_ingredient.tourteaux_de_palmiste=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().taux_d_incorporation); 
            }
            if(ingredient=="huile_de_palme"){
              // this.quantites_ingredient.huile_de_palme=qte_ing(this.ing_nut_val.nutriments_().taux_d_incorporation);          
            }
            if(ingredient=="farine_de_poisson"){
              this.quantites_ingredient.farine_de_poisson=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_POISSON().taux_d_incorporation); 
            }
            if(ingredient=="taux_d_incorporation"){
              // this.quantites_ingredient.taux_d_incorporation=qte_ing(this.ing_nut_val.nutriments_().taux_d_incorporation); 
            }
            if (ingredient=="taux_d_incorporation"){
              // this.quantites_ingredient.taux_d_incorporation=qte_ing(this.ing_nut_val.nutriments_().taux_d_incorporation); 
            }
            if(ingredient=="patate"){
              this.quantites_ingredient.patate=qte_ing(this.ing_nut_val.nutriments_PATATE().taux_d_incorporation); 
            }
            if(ingredient=="graisse_animale"){
              this.quantites_ingredient.graisse_animale=qte_ing(this.ing_nut_val.nutriments_GRAISSE_A().taux_d_incorporation);
            }
            if (ingredient=="huile_vegetale"){
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_HUILE_VEGETALE().taux_d_incorporation);
            }
            if (ingredient=="manioc") {
              this.quantites_ingredient.huile_vegetale=qte_ing(this.ing_nut_val.nutriments_MANIOC().taux_d_incorporation);      
            }
            if(ingredient=="dreche"){
              this.quantites_ingredient.dreche=qte_ing(this.ing_nut_val.nutriments_DRECHE().taux_d_incorporation);
            }
            if(ingredient=="banane"){
              this.quantites_ingredient.banane=qte_ing(this.ing_nut_val.nutriments_BANANE().taux_d_incorporation);
            }
            if(ingredient=="coquille"){
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_COQUILLE().taux_d_incorporation);
            }
            if(ingredient=="son_de_riz") {
              this.quantites_ingredient.coquille=qte_ing(this.ing_nut_val.nutriments_SON_RIZ().taux_d_incorporation);
            }
            if(ingredient=="tourteaux_de_copra"){
              this.quantites_ingredient.tourteaux_de_copra=qte_ing(this.ing_nut_val.nutriments_TOURTEAUX_DE_COPRA().taux_d_incorporation);
            }
            if(ingredient=="millet"){
              this.quantites_ingredient.millet=qte_ing(this.ing_nut_val.nutriments_MILLET().taux_d_incorporation);
            }
            if(ingredient=="sorgho"){
              this.quantites_ingredient.sorgho=qte_ing(this.ing_nut_val.nutriments_SORGHO().taux_d_incorporation);
            }
            if(ingredient=="remoulage"){
              this.quantites_ingredient.remoulage=qte_ing(this.ing_nut_val.nutriments_REMOULAGE().taux_d_incorporation);
            }
            if(ingredient=="ble"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_BLE().taux_d_incorporation);
            }
            if(ingredient=="farine_de_sang"){
              this.quantites_ingredient.ble=qte_ing(this.ing_nut_val.nutriments_FARINE_DE_SANG().taux_d_incorporation);
            }
          }        
        default:
            
        }
        // préparation des variables à envoyer dans la page de rapport
        let data_ing_qte:any=[
          {ingredient:"Maïs",qte_ing:this.quantites_ingredient.mais},
          {ingredient:"Tourteaux de coton",qte_ing:this.quantites_ingredient.tourteau_de_coton},
          {ingredient:"Tourteaux de soja",qte_ing:this.quantites_ingredient.tourteaux_de_soja},
          {ingredient:"Farine d'os",qte_ing:this.quantites_ingredient.farine_d_os},
          {ingredient:"Tourteaux d'arachide",qte_ing:this.quantites_ingredient.tourteaux_d_arachide},
          {ingredient:"concentré chair",qte_ing:this.quantites_ingredient.concentre_chair},
          {ingredient:"concentré 10%",qte_ing:this.quantites_ingredient.concentre},
          {ingredient:"Coque de cacao",qte_ing:this.quantites_ingredient.coque_de_cacao},
          {ingredient:"soja grillé",qte_ing:this.quantites_ingredient.soja_grille},
          {ingredient:"son de blé",qte_ing:this.quantites_ingredient.son_de_ble},
          {ingredient:"Tourteaux de palmiste",qte_ing:this.quantites_ingredient.tourteaux_de_palmiste},
          {ingredient:"Huile de palme",qte_ing:this.quantites_ingredient.huile_de_palme},
          {ingredient:"Farine de poisson",qte_ing:this.quantites_ingredient.farine_de_poisson},
          {ingredient:"Farine de sang",qte_ing:this.quantites_ingredient.farine_de_sang},
          {ingredient:"Lysine",qte_ing:this.quantites_ingredient.lysine},
          {ingredient:"Méthionine",qte_ing:this.quantites_ingredient.methionine},
          {ingredient:"Patate",qte_ing:this.quantites_ingredient.patate},
          {ingredient:"Graisse animale",qte_ing:this.quantites_ingredient.graisse_animale},
          {ingredient:"Huile végétale",qte_ing:this.quantites_ingredient.huile_vegetale},
          {ingredient:"Manioc",qte_ing:this.quantites_ingredient.manioc},
          {ingredient:"Dreche",qte_ing:this.quantites_ingredient.dreche},
          {ingredient:"Banane",qte_ing:this.quantites_ingredient.banane},
          {ingredient:"Coquille",qte_ing:this.quantites_ingredient.coquille},
          {ingredient:"Son de Riz",qte_ing:this.quantites_ingredient.son_de_riz},
          {ingredient:"Tourteaux de copra",qte_ing:this.quantites_ingredient.tourteaux_de_copra},
          {ingredient:"Millet",qte_ing:this.quantites_ingredient.millet},
          {ingredient:"Sorgho",qte_ing:this.quantites_ingredient.sorgho},
          {ingredient:"Remoulage",qte_ing:this.quantites_ingredient.remoulage},
          {ingredient:"Ble",qte_ing:this.quantites_ingredient.ble}
        ];

        // résultant des calcul des nutriments finals
        let data_nutriments:any=[
          {nutriment:"Matière Sèche", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).matiere_seche},
          {nutriment:"Energie Brute", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).energie_brute},
          {nutriment:"Energie Métabolisable", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).energie_metabolisable},
          {nutriment:"Extratif Non Azote", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).extratif_non_azote},
          {nutriment:"Amidon", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).amidon},
          {nutriment:"Sucre", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).sucre},
          {nutriment:"Matière Grasse", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).matiere_grasse},
          {nutriment:"Cellulose Brute", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).cellulose_brute},
          {nutriment:"Matiere Protéine Brute", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).matiere_proteine_brute},
          {nutriment:"Lysine", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).lysine},
          {nutriment:"Méthionine", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).methionine},
          {nutriment:"Tryptine", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).tryp},
          {nutriment:"Trheo", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).trheo},
          {nutriment:"Calcium", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).calcium},
          {nutriment:"Phosphore Assimiliable", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).phosphore_assimiliable},
          {nutriment:"Taux D'incorporation", qte_nutriment:this.calcul_nut.somme_nutriments(this.quantites_ingredient).taux_d_incorporation}
        ];
        // let resultat:any=[data_nutriments,data_ing_qte];
        // return resultat;
         return {data_nutriments,data_ing_qte}; 
      

  }
}
