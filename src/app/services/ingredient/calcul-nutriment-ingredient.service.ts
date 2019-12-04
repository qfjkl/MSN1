import { Injectable } from '@angular/core';
import {ingredientNutVal } from './nutriment-service.service';

@Injectable({
  providedIn: 'root'
})
export class CalculNutrimentIngredient {

/*
**méthode permettant de calculer les valeurs nutritionnelles de chaque ingredient
**@params:qte_ingredient
**@return: any
*/
// ing_nut_val:any;
constructor(public ing_nut_val: ingredientNutVal){
  //  this.ing_nut_val= new ing_nut_val();
}
calcul_nutriment_Mais(quantites_ingredient:any):any{

let matiere_seche:number=this.ing_nut_val.nutriments_MAIS().matiere_seche*quantites_ingredient.mais/100;
let energie_brute:number=this.ing_nut_val.nutriments_MAIS().energie_brute*quantites_ingredient.mais/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_MAIS().energie_metabolisable*quantites_ingredient.mais/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_MAIS().extratif_non_azote*quantites_ingredient.mais/100;
let amidon:number=this.ing_nut_val.nutriments_MAIS().amidon*quantites_ingredient.mais/100;
let sucre:number=this.ing_nut_val.nutriments_MAIS().sucre*quantites_ingredient.mais/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_MAIS().matiere_grasse*quantites_ingredient.mais/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_MAIS().cellulose_brute*quantites_ingredient.mais/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_MAIS().matiere_proteine_brute*quantites_ingredient.mais/100;
let lysine:number=this.ing_nut_val.nutriments_MAIS().lysine*quantites_ingredient.mais/100;
let methionine:number=this.ing_nut_val.nutriments_MAIS().methionine*quantites_ingredient.mais/100;
let tryp:number=this.ing_nut_val.nutriments_MAIS().tryp*quantites_ingredient.mais/100;
let trheo:number=this.ing_nut_val.nutriments_MAIS().trheo*quantites_ingredient.mais/100;
let calcium:number=this.ing_nut_val.nutriments_MAIS().calcium*quantites_ingredient.mais/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_MAIS().phosphore_assimiliable*quantites_ingredient.mais/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_MAIS().taux_d_incorporation*quantites_ingredient.mais/100;

  return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

}
calcul_nutriment_BLE(quantites_ingredient:any):any{
  
let matiere_seche:number=this.ing_nut_val.nutriments_BLE().matiere_seche*quantites_ingredient.ble/100;
let energie_brute:number=this.ing_nut_val.nutriments_BLE().energie_brute*quantites_ingredient.ble/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_BLE().energie_metabolisable*quantites_ingredient.ble/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_BLE().extratif_non_azote*quantites_ingredient.ble/100;
let amidon:number=this.ing_nut_val.nutriments_BLE().amidon*quantites_ingredient.ble/100;
let sucre:number=this.ing_nut_val.nutriments_BLE().sucre*quantites_ingredient.ble/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_BLE().matiere_grasse*quantites_ingredient.ble/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_BLE().cellulose_brute*quantites_ingredient.ble/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_BLE().matiere_proteine_brute*quantites_ingredient.ble/100;
let lysine:number=this.ing_nut_val.nutriments_BLE().lysine*quantites_ingredient.ble/100;
let methionine:number=this.ing_nut_val.nutriments_BLE().methionine*quantites_ingredient.ble/100;
let tryp:number=this.ing_nut_val.nutriments_BLE().tryp*quantites_ingredient.ble/100;
let trheo:number=this.ing_nut_val.nutriments_BLE().trheo*quantites_ingredient.ble/100;
let calcium:number=this.ing_nut_val.nutriments_BLE().calcium*quantites_ingredient.ble/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_BLE().phosphore_assimiliable*quantites_ingredient.ble/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_BLE().taux_d_incorporation*quantites_ingredient.ble/100;

return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

} 
calcul_nutriment_SON_BLE(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_SON_BLE().matiere_seche*quantites_ingredient.son_de_ble/100;
let energie_brute:number=this.ing_nut_val.nutriments_SON_BLE().energie_brute*quantites_ingredient.son_de_ble/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_SON_BLE().energie_metabolisable*quantites_ingredient.son_de_ble/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_SON_BLE().extratif_non_azote*quantites_ingredient.son_de_ble/100;
let amidon:number=this.ing_nut_val.nutriments_SON_BLE().amidon*quantites_ingredient.son_de_ble/100;
let sucre:number=this.ing_nut_val.nutriments_SON_BLE().sucre*quantites_ingredient.son_de_ble/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_SON_BLE().matiere_grasse*quantites_ingredient.son_de_ble/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_SON_BLE().cellulose_brute*quantites_ingredient.son_de_ble/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_SON_BLE().matiere_proteine_brute*quantites_ingredient.son_de_ble/100;
let lysine:number=this.ing_nut_val.nutriments_SON_BLE().lysine*quantites_ingredient.son_de_ble/100;
let methionine:number=this.ing_nut_val.nutriments_SON_BLE().methionine*quantites_ingredient.son_de_ble/100;
let tryp:number=this.ing_nut_val.nutriments_SON_BLE().tryp*quantites_ingredient.son_de_ble/100;
let trheo:number=this.ing_nut_val.nutriments_SON_BLE().trheo*quantites_ingredient.son_de_ble/100;
let calcium:number=this.ing_nut_val.nutriments_SON_BLE().calcium*quantites_ingredient.son_de_ble/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_SON_BLE().phosphore_assimiliable*quantites_ingredient.son_de_ble/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_SON_BLE().taux_d_incorporation*quantites_ingredient.son_de_ble/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
calcul_nutriment_REMOULAGE(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_REMOULAGE().matiere_seche*quantites_ingredient.remoulage/100;
let energie_brute:number=this.ing_nut_val.nutriments_REMOULAGE().energie_brute*quantites_ingredient.remoulage/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_REMOULAGE().energie_metabolisable*quantites_ingredient.remoulage/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_REMOULAGE().extratif_non_azote*quantites_ingredient.remoulage/100;
let amidon:number=this.ing_nut_val.nutriments_REMOULAGE().amidon*quantites_ingredient.remoulage/100;
let sucre:number=this.ing_nut_val.nutriments_REMOULAGE().sucre*quantites_ingredient.remoulage/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_REMOULAGE().matiere_grasse*quantites_ingredient.remoulage/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_REMOULAGE().cellulose_brute*quantites_ingredient.remoulage/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_REMOULAGE().matiere_proteine_brute*quantites_ingredient.remoulage/100;
let lysine:number=this.ing_nut_val.nutriments_REMOULAGE().lysine*quantites_ingredient.remoulage/100;
let methionine:number=this.ing_nut_val.nutriments_REMOULAGE().methionine*quantites_ingredient.remoulage/100;
let tryp:number=this.ing_nut_val.nutriments_REMOULAGE().tryp*quantites_ingredient.remoulage/100;
let trheo:number=this.ing_nut_val.nutriments_REMOULAGE().trheo*quantites_ingredient.remoulage/100;
let calcium:number=this.ing_nut_val.nutriments_REMOULAGE().calcium*quantites_ingredient.remoulage/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_REMOULAGE().phosphore_assimiliable*quantites_ingredient.remoulage/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_REMOULAGE().taux_d_incorporation*quantites_ingredient.remoulage/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
calcul_nutriment_SORGHO(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_SORGHO().matiere_seche*quantites_ingredient.sorgho/100;
let energie_brute:number=this.ing_nut_val.nutriments_SORGHO().energie_brute*quantites_ingredient.sorgho/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_SORGHO().energie_metabolisable*quantites_ingredient.sorgho/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_SORGHO().extratif_non_azote*quantites_ingredient.sorgho/100;
let amidon:number=this.ing_nut_val.nutriments_SORGHO().amidon*quantites_ingredient.sorgho/100;
let sucre:number=this.ing_nut_val.nutriments_SORGHO().sucre*quantites_ingredient.sorgho/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_SORGHO().matiere_grasse*quantites_ingredient.sorgho/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_SORGHO().cellulose_brute*quantites_ingredient.sorgho/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_SORGHO().matiere_proteine_brute*quantites_ingredient.sorgho/100;
let lysine:number=this.ing_nut_val.nutriments_SORGHO().lysine*quantites_ingredient.sorgho/100;
let methionine:number=this.ing_nut_val.nutriments_SORGHO().methionine*quantites_ingredient.sorgho/100;
let tryp:number=this.ing_nut_val.nutriments_SORGHO().tryp*quantites_ingredient.sorgho/100;
let trheo:number=this.ing_nut_val.nutriments_SORGHO().trheo*quantites_ingredient.sorgho/100;
let calcium:number=this.ing_nut_val.nutriments_SORGHO().calcium*quantites_ingredient.sorgho/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_SORGHO().phosphore_assimiliable*quantites_ingredient.sorgho/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_SORGHO().taux_d_incorporation*quantites_ingredient.sorgho/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
 calcul_nutriment_MILLET(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_MILLET().matiere_seche*quantites_ingredient.millet/100;
let energie_brute:number=this.ing_nut_val.nutriments_MILLET().energie_brute*quantites_ingredient.millet/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_MILLET().energie_metabolisable*quantites_ingredient.millet/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_MILLET().extratif_non_azote*quantites_ingredient.millet/100;
let amidon:number=this.ing_nut_val.nutriments_MILLET().amidon*quantites_ingredient.millet/100;
let sucre:number=this.ing_nut_val.nutriments_MILLET().sucre*quantites_ingredient.millet/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_MILLET().matiere_grasse*quantites_ingredient.millet/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_MILLET().cellulose_brute*quantites_ingredient.millet/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_MILLET().matiere_proteine_brute*quantites_ingredient.millet/100;
let lysine:number=this.ing_nut_val.nutriments_MILLET().lysine*quantites_ingredient.millet/100;
let methionine:number=this.ing_nut_val.nutriments_MILLET().methionine*quantites_ingredient.millet/100;
let tryp:number=this.ing_nut_val.nutriments_MILLET().tryp*quantites_ingredient.millet/100;
let trheo:number=this.ing_nut_val.nutriments_MILLET().trheo*quantites_ingredient.millet/100;
let calcium:number=this.ing_nut_val.nutriments_MILLET().calcium*quantites_ingredient.millet/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_MILLET().phosphore_assimiliable*quantites_ingredient.millet/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_MILLET().taux_d_incorporation*quantites_ingredient.millet/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
  calcul_nutriment_TOURTEAUX_DE_SOJA(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_seche*quantites_ingredient.tourteaux_de_soja/100;
let energie_brute:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().energie_brute*quantites_ingredient.tourteaux_de_soja/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().energie_metabolisable*quantites_ingredient.tourteaux_de_soja/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().extratif_non_azote*quantites_ingredient.tourteaux_de_soja/100;
let amidon:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().amidon*quantites_ingredient.tourteaux_de_soja/100;
let sucre:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().sucre*quantites_ingredient.tourteaux_de_soja/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_grasse*quantites_ingredient.tourteaux_de_soja/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().cellulose_brute*quantites_ingredient.tourteaux_de_soja/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_proteine_brute*quantites_ingredient.tourteaux_de_soja/100;
let lysine:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().lysine*quantites_ingredient.tourteaux_de_soja/100;
let methionine:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().methionine*quantites_ingredient.tourteaux_de_soja/100;
let tryp:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().tryp*quantites_ingredient.tourteaux_de_soja/100;
let trheo:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().trheo*quantites_ingredient.tourteaux_de_soja/100;
let calcium:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().calcium*quantites_ingredient.tourteaux_de_soja/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().phosphore_assimiliable*quantites_ingredient.tourteaux_de_soja/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().taux_d_incorporation*quantites_ingredient.tourteaux_de_soja/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
  calcul_nutriment_TOURTEAUX_DE_COPRA(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_seche*quantites_ingredient.tourteaux_de_copra/100;
let energie_brute:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().energie_brute*quantites_ingredient.tourteaux_de_copra/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().energie_metabolisable*quantites_ingredient.tourteaux_de_copra/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().extratif_non_azote*quantites_ingredient.tourteaux_de_copra/100;
let amidon:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().amidon*quantites_ingredient.tourteaux_de_copra/100;
let sucre:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().sucre*quantites_ingredient.tourteaux_de_copra/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_grasse*quantites_ingredient.tourteaux_de_copra/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().cellulose_brute*quantites_ingredient.tourteaux_de_copra/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().matiere_proteine_brute*quantites_ingredient.tourteaux_de_copra/100;
let lysine:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().lysine*quantites_ingredient.tourteaux_de_copra/100;
let methionine:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().methionine*quantites_ingredient.tourteaux_de_copra/100;
let tryp:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().tryp*quantites_ingredient.tourteaux_de_copra/100;
let trheo:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().trheo*quantites_ingredient.tourteaux_de_copra/100;
let calcium:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().calcium*quantites_ingredient.tourteaux_de_copra/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().phosphore_assimiliable*quantites_ingredient.tourteaux_de_copra/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_SOJA().taux_d_incorporation*quantites_ingredient.tourteaux_de_copra/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
  calcul_nutriment_TOURTEAUX_DE_PALMISTE(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().matiere_seche*quantites_ingredient.tourteaux_de_palmiste/100;
let energie_brute:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().energie_brute*quantites_ingredient.tourteaux_de_palmiste/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().energie_metabolisable*quantites_ingredient.tourteaux_de_palmiste/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().extratif_non_azote*quantites_ingredient.tourteaux_de_palmiste/100;
let amidon:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().amidon*quantites_ingredient.tourteaux_de_palmiste/100;
let sucre:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().sucre*quantites_ingredient.tourteaux_de_palmiste/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().matiere_grasse*quantites_ingredient.tourteaux_de_palmiste/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().cellulose_brute*quantites_ingredient.tourteaux_de_palmiste/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().matiere_proteine_brute*quantites_ingredient.tourteaux_de_palmiste/100;
let lysine:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().lysine*quantites_ingredient.tourteaux_de_palmiste/100;
let methionine:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().methionine*quantites_ingredient.tourteaux_de_palmiste/100;
let tryp:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().tryp*quantites_ingredient.tourteaux_de_palmiste/100;
let trheo:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().trheo*quantites_ingredient.tourteaux_de_palmiste/100;
let calcium:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().calcium*quantites_ingredient.tourteaux_de_palmiste/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().phosphore_assimiliable*quantites_ingredient.tourteaux_de_palmiste/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_TOURTEAUX_DE_PALMISTE().taux_d_incorporation*quantites_ingredient.tourteaux_de_palmiste/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
  calcul_nutriment_TOURTEAUX_D_ARRACHIDE(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().matiere_seche*quantites_ingredient.tourteaux_d_arachide/100;
let energie_brute:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().energie_brute*quantites_ingredient.tourteaux_d_arachide/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().energie_metabolisable*quantites_ingredient.tourteaux_d_arachide/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().extratif_non_azote*quantites_ingredient.tourteaux_d_arachide/100;
let amidon:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().amidon*quantites_ingredient.tourteaux_d_arachide/100;
let sucre:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().sucre*quantites_ingredient.tourteaux_d_arachide/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().matiere_grasse*quantites_ingredient.tourteaux_d_arachide/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().cellulose_brute*quantites_ingredient.tourteaux_d_arachide/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().matiere_proteine_brute*quantites_ingredient.tourteaux_d_arachide/100;
let lysine:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().lysine*quantites_ingredient.tourteaux_d_arachide/100;
let methionine:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().methionine*quantites_ingredient.tourteaux_d_arachide/100;
let tryp:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().tryp*quantites_ingredient.tourteaux_d_arachide/100;
let trheo:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().trheo*quantites_ingredient.tourteaux_d_arachide/100;
let calcium:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().calcium*quantites_ingredient.tourteaux_d_arachide/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().phosphore_assimiliable*quantites_ingredient.tourteaux_d_arachide/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_TOURTEAUX_D_ARRACHIDE().taux_d_incorporation*quantites_ingredient.tourteaux_d_arachide/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
calcul_nutriment_SON_RIZ(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_SON_RIZ().matiere_seche*quantites_ingredient.son_de_riz/100;
let energie_brute:number=this.ing_nut_val.nutriments_SON_RIZ().energie_brute*quantites_ingredient.son_de_riz/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_SON_RIZ().energie_metabolisable*quantites_ingredient.son_de_riz/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_SON_RIZ().extratif_non_azote*quantites_ingredient.son_de_riz/100;
let amidon:number=this.ing_nut_val.nutriments_SON_RIZ().amidon*quantites_ingredient.son_de_riz/100;
let sucre:number=this.ing_nut_val.nutriments_SON_RIZ().sucre*quantites_ingredient.son_de_riz/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_SON_RIZ().matiere_grasse*quantites_ingredient.son_de_riz/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_SON_RIZ().cellulose_brute*quantites_ingredient.son_de_riz/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_SON_RIZ().matiere_proteine_brute*quantites_ingredient.son_de_riz/100;
let lysine:number=this.ing_nut_val.nutriments_SON_RIZ().lysine*quantites_ingredient.son_de_riz/100;
let methionine:number=this.ing_nut_val.nutriments_SON_RIZ().methionine*quantites_ingredient.son_de_riz/100;
let tryp:number=this.ing_nut_val.nutriments_SON_RIZ().tryp*quantites_ingredient.son_de_riz/100;
let trheo:number=this.ing_nut_val.nutriments_SON_RIZ().trheo*quantites_ingredient.son_de_riz/100;
let calcium:number=this.ing_nut_val.nutriments_SON_RIZ().calcium*quantites_ingredient.son_de_riz/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_SON_RIZ().phosphore_assimiliable*quantites_ingredient.son_de_riz/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_SON_RIZ().taux_d_incorporation*quantites_ingredient.son_de_riz/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
calcul_nutriment_FARINE_DE_POISSON(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().matiere_seche*quantites_ingredient.farine_de_poisson/100;
let energie_brute:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().energie_brute*quantites_ingredient.farine_de_poisson/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().energie_metabolisable*quantites_ingredient.farine_de_poisson/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().extratif_non_azote*quantites_ingredient.farine_de_poisson/100;
let amidon:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().amidon*quantites_ingredient.farine_de_poisson/100;
let sucre:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().sucre*quantites_ingredient.farine_de_poisson/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().matiere_grasse*quantites_ingredient.farine_de_poisson/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().cellulose_brute*quantites_ingredient.farine_de_poisson/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().matiere_proteine_brute*quantites_ingredient.farine_de_poisson/100;
let lysine:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().lysine*quantites_ingredient.farine_de_poisson/100;
let methionine:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().methionine*quantites_ingredient.farine_de_poisson/100;
let tryp:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().tryp*quantites_ingredient.farine_de_poisson/100;
let trheo:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().trheo*quantites_ingredient.farine_de_poisson/100;
let calcium:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().calcium*quantites_ingredient.farine_de_poisson/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().phosphore_assimiliable*quantites_ingredient.farine_de_poisson/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_FARINE_DE_POISSON().taux_d_incorporation*quantites_ingredient.farine_de_poisson/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
  calcul_nutriment_FARINE_DE_SANG(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().matiere_seche*quantites_ingredient.farine_de_sang/100;
let energie_brute:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().energie_brute*quantites_ingredient.farine_de_sang/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().energie_metabolisable*quantites_ingredient.farine_de_sang/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().extratif_non_azote*quantites_ingredient.farine_de_sang/100;
let amidon:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().amidon*quantites_ingredient.farine_de_sang/100;
let sucre:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().sucre*quantites_ingredient.farine_de_sang/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().matiere_grasse*quantites_ingredient.farine_de_sang/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().cellulose_brute*quantites_ingredient.farine_de_sang/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().matiere_proteine_brute*quantites_ingredient.farine_de_sang/100;
let lysine:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().lysine*quantites_ingredient.farine_de_sang/100;
let methionine:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().methionine*quantites_ingredient.farine_de_sang/100;
let tryp:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().tryp*quantites_ingredient.farine_de_sang/100;
let trheo:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().trheo*quantites_ingredient.farine_de_sang/100;
let calcium:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().calcium*quantites_ingredient.farine_de_sang/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().phosphore_assimiliable*quantites_ingredient.farine_de_sang/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_FARINE_DE_SANG().taux_d_incorporation*quantites_ingredient.farine_de_sang/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
  calcul_nutriment_FARINE_D_OS(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_FARINE_D_OS().matiere_seche*quantites_ingredient.farine_d_os/100;
let energie_brute:number=this.ing_nut_val.nutriments_FARINE_D_OS().energie_brute*quantites_ingredient.farine_d_os/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_FARINE_D_OS().energie_metabolisable*quantites_ingredient.farine_d_os/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_FARINE_D_OS().extratif_non_azote*quantites_ingredient.farine_d_os/100;
let amidon:number=this.ing_nut_val.nutriments_FARINE_D_OS().amidon*quantites_ingredient.farine_d_os/100;
let sucre:number=this.ing_nut_val.nutriments_FARINE_D_OS().sucre*quantites_ingredient.farine_d_os/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_FARINE_D_OS().matiere_grasse*quantites_ingredient.farine_d_os/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_FARINE_D_OS().cellulose_brute*quantites_ingredient.farine_d_os/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_FARINE_D_OS().matiere_proteine_brute*quantites_ingredient.farine_d_os/100;
let lysine:number=this.ing_nut_val.nutriments_FARINE_D_OS().lysine*quantites_ingredient.farine_d_os/100;
let methionine:number=this.ing_nut_val.nutriments_FARINE_D_OS().methionine*quantites_ingredient.farine_d_os/100;
let tryp:number=this.ing_nut_val.nutriments_FARINE_D_OS().tryp*quantites_ingredient.farine_d_os/100;
let trheo:number=this.ing_nut_val.nutriments_FARINE_D_OS().trheo*quantites_ingredient.farine_d_os/100;
let calcium:number=this.ing_nut_val.nutriments_FARINE_D_OS().calcium*quantites_ingredient.farine_d_os/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_FARINE_D_OS().phosphore_assimiliable*quantites_ingredient.farine_d_os/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_FARINE_D_OS().taux_d_incorporation*quantites_ingredient.farine_d_os/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
  calcul_nutriment_COQUILLE(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_COQUILLE().matiere_seche*quantites_ingredient.coquille/100;
let energie_brute:number=this.ing_nut_val.nutriments_COQUILLE().energie_brute*quantites_ingredient.coquille/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_COQUILLE().energie_metabolisable*quantites_ingredient.coquille/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_COQUILLE().extratif_non_azote*quantites_ingredient.coquille/100;
let amidon:number=this.ing_nut_val.nutriments_COQUILLE().amidon*quantites_ingredient.coquille/100;
let sucre:number=this.ing_nut_val.nutriments_COQUILLE().sucre*quantites_ingredient.coquille/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_COQUILLE().matiere_grasse*quantites_ingredient.coquille/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_COQUILLE().cellulose_brute*quantites_ingredient.coquille/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_COQUILLE().matiere_proteine_brute*quantites_ingredient.coquille/100;
let lysine:number=this.ing_nut_val.nutriments_COQUILLE().lysine*quantites_ingredient.coquille/100;
let methionine:number=this.ing_nut_val.nutriments_COQUILLE().methionine*quantites_ingredient.coquille/100;
let tryp:number=this.ing_nut_val.nutriments_COQUILLE().tryp*quantites_ingredient.coquille/100;
let trheo:number=this.ing_nut_val.nutriments_COQUILLE().trheo*quantites_ingredient.coquille/100;
let calcium:number=this.ing_nut_val.nutriments_COQUILLE().calcium*quantites_ingredient.coquille/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_COQUILLE().phosphore_assimiliable*quantites_ingredient.coquille/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_COQUILLE().taux_d_incorporation*quantites_ingredient.coquille/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
  calcul_nutriment_BANANE(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_BANANE().matiere_seche*quantites_ingredient.banane/100;
let energie_brute:number=this.ing_nut_val.nutriments_BANANE().energie_brute*quantites_ingredient.banane/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_BANANE().energie_metabolisable*quantites_ingredient.banane/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_BANANE().extratif_non_azote*quantites_ingredient.banane/100;
let amidon:number=this.ing_nut_val.nutriments_BANANE().amidon*quantites_ingredient.banane/100;
let sucre:number=this.ing_nut_val.nutriments_BANANE().sucre*quantites_ingredient.banane/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_BANANE().matiere_grasse*quantites_ingredient.banane/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_BANANE().cellulose_brute*quantites_ingredient.banane/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_BANANE().matiere_proteine_brute*quantites_ingredient.banane/100;
let lysine:number=this.ing_nut_val.nutriments_BANANE().lysine*quantites_ingredient.banane/100;
let methionine:number=this.ing_nut_val.nutriments_BANANE().methionine*quantites_ingredient.banane/100;
let tryp:number=this.ing_nut_val.nutriments_BANANE().tryp*quantites_ingredient.banane/100;
let trheo:number=this.ing_nut_val.nutriments_BANANE().trheo*quantites_ingredient.banane/100;
let calcium:number=this.ing_nut_val.nutriments_BANANE().calcium*quantites_ingredient.banane/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_BANANE().phosphore_assimiliable*quantites_ingredient.banane/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_BANANE().taux_d_incorporation*quantites_ingredient.banane/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
  calcul_nutriment_DRECHE(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_DRECHE().matiere_seche*quantites_ingredient.dreche/100;
let energie_brute:number=this.ing_nut_val.nutriments_DRECHE().energie_brute*quantites_ingredient.dreche/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_DRECHE().energie_metabolisable*quantites_ingredient.dreche/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_DRECHE().extratif_non_azote*quantites_ingredient.dreche/100;
let amidon:number=this.ing_nut_val.nutriments_DRECHE().amidon*quantites_ingredient.dreche/100;
let sucre:number=this.ing_nut_val.nutriments_DRECHE().sucre*quantites_ingredient.dreche/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_DRECHE().matiere_grasse*quantites_ingredient.dreche/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_DRECHE().cellulose_brute*quantites_ingredient.dreche/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_DRECHE().matiere_proteine_brute*quantites_ingredient.dreche/100;
let lysine:number=this.ing_nut_val.nutriments_DRECHE().lysine*quantites_ingredient.dreche/100;
let methionine:number=this.ing_nut_val.nutriments_DRECHE().methionine*quantites_ingredient.dreche/100;
let tryp:number=this.ing_nut_val.nutriments_DRECHE().tryp*quantites_ingredient.dreche/100;
let trheo:number=this.ing_nut_val.nutriments_DRECHE().trheo*quantites_ingredient.dreche/100;
let calcium:number=this.ing_nut_val.nutriments_DRECHE().calcium*quantites_ingredient.dreche/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_DRECHE().phosphore_assimiliable*quantites_ingredient.dreche/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_DRECHE().taux_d_incorporation*quantites_ingredient.dreche/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
  calcul_nutriment_MANIOC(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_MANIOC().matiere_seche*quantites_ingredient.manioc/100;
let energie_brute:number=this.ing_nut_val.nutriments_MANIOC().energie_brute*quantites_ingredient.manioc/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_MANIOC().energie_metabolisable*quantites_ingredient.manioc/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_MANIOC().extratif_non_azote*quantites_ingredient.manioc/100;
let amidon:number=this.ing_nut_val.nutriments_MANIOC().amidon*quantites_ingredient.manioc/100;
let sucre:number=this.ing_nut_val.nutriments_MANIOC().sucre*quantites_ingredient.manioc/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_MANIOC().matiere_grasse*quantites_ingredient.manioc/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_MANIOC().cellulose_brute*quantites_ingredient.manioc/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_MANIOC().matiere_proteine_brute*quantites_ingredient.manioc/100;
let lysine:number=this.ing_nut_val.nutriments_MANIOC().lysine*quantites_ingredient.manioc/100;
let methionine:number=this.ing_nut_val.nutriments_MANIOC().methionine*quantites_ingredient.manioc/100;
let tryp:number=this.ing_nut_val.nutriments_MANIOC().tryp*quantites_ingredient.manioc/100;
let trheo:number=this.ing_nut_val.nutriments_MANIOC().trheo*quantites_ingredient.manioc/100;
let calcium:number=this.ing_nut_val.nutriments_MANIOC().calcium*quantites_ingredient.manioc/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_MANIOC().phosphore_assimiliable*quantites_ingredient.manioc/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_MANIOC().taux_d_incorporation*quantites_ingredient.manioc/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
  calcul_nutriment_PATATE(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_PATATE().matiere_seche*quantites_ingredient.patate/100;
let energie_brute:number=this.ing_nut_val.nutriments_PATATE().energie_brute*quantites_ingredient.patate/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_PATATE().energie_metabolisable*quantites_ingredient.patate/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_PATATE().extratif_non_azote*quantites_ingredient.patate/100;
let amidon:number=this.ing_nut_val.nutriments_PATATE().amidon*quantites_ingredient.patate/100;
let sucre:number=this.ing_nut_val.nutriments_PATATE().sucre*quantites_ingredient.patate/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_PATATE().matiere_grasse*quantites_ingredient.patate/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_PATATE().cellulose_brute*quantites_ingredient.patate/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_PATATE().matiere_proteine_brute*quantites_ingredient.patate/100;
let lysine:number=this.ing_nut_val.nutriments_PATATE().lysine*quantites_ingredient.patate/100;
let methionine:number=this.ing_nut_val.nutriments_PATATE().methionine*quantites_ingredient.patate/100;
let tryp:number=this.ing_nut_val.nutriments_PATATE().tryp*quantites_ingredient.patate/100;
let trheo:number=this.ing_nut_val.nutriments_PATATE().trheo*quantites_ingredient.patate/100;
let calcium:number=this.ing_nut_val.nutriments_PATATE().calcium*quantites_ingredient.patate/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_PATATE().phosphore_assimiliable*quantites_ingredient.patate/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_PATATE().taux_d_incorporation*quantites_ingredient.patate/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
  calcul_nutriment_GRAISSE_A(quantites_ingredient:any):any{
 
let matiere_seche:number=this.ing_nut_val.nutriments_GRAISSE_A().matiere_seche*quantites_ingredient.graisse_animale/100;
let energie_brute:number=this.ing_nut_val.nutriments_GRAISSE_A().energie_brute*quantites_ingredient.graisse_animale/100;
let energie_metabolisable:number=this.ing_nut_val.nutriments_GRAISSE_A().energie_metabolisable*quantites_ingredient.graisse_animale/100;
let extratif_non_azote:number=this.ing_nut_val.nutriments_GRAISSE_A().extratif_non_azote*quantites_ingredient.graisse_animale/100;
let amidon:number=this.ing_nut_val.nutriments_GRAISSE_A().amidon*quantites_ingredient.graisse_animale/100;
let sucre:number=this.ing_nut_val.nutriments_GRAISSE_A().sucre*quantites_ingredient.graisse_animale/100;
let matiere_grasse:number=this.ing_nut_val.nutriments_GRAISSE_A().matiere_grasse*quantites_ingredient.graisse_animale/100;
let cellulose_brute:number=this.ing_nut_val.nutriments_GRAISSE_A().cellulose_brute*quantites_ingredient.graisse_animale/100;
let matiere_proteine_brute:number=this.ing_nut_val.nutriments_GRAISSE_A().matiere_proteine_brute*quantites_ingredient.graisse_animale/100;
let lysine:number=this.ing_nut_val.nutriments_GRAISSE_A().lysine*quantites_ingredient.graisse_animale/100;
let methionine:number=this.ing_nut_val.nutriments_GRAISSE_A().methionine*quantites_ingredient.graisse_animale/100;
let tryp:number=this.ing_nut_val.nutriments_GRAISSE_A().tryp*quantites_ingredient.graisse_animale/100;
let trheo:number=this.ing_nut_val.nutriments_GRAISSE_A().trheo*quantites_ingredient.graisse_animale/100;
let calcium:number=this.ing_nut_val.nutriments_GRAISSE_A().calcium*quantites_ingredient.graisse_animale/100;
let phosphore_assimiliable:number=this.ing_nut_val.nutriments_GRAISSE_A().phosphore_assimiliable*quantites_ingredient.graisse_animale/100;
let taux_d_incorporation:number=this.ing_nut_val.nutriments_GRAISSE_A().taux_d_incorporation*quantites_ingredient.graisse_animale/100;

 return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }
calcul_nutriment_HUILE_VEGETALE(quantites_ingredient:any):any{
 
  let matiere_seche:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().matiere_seche*quantites_ingredient.huile_vegetale/100;
  let energie_brute:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().energie_brute*quantites_ingredient.huile_vegetale/100;
  let energie_metabolisable:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().energie_metabolisable*quantites_ingredient.huile_vegetale/100;
  let extratif_non_azote:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().extratif_non_azote*quantites_ingredient.huile_vegetale/100;
  let amidon:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().amidon*quantites_ingredient.huile_vegetale/100;
  let sucre:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().sucre*quantites_ingredient.huile_vegetale/100;
  let matiere_grasse:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().matiere_grasse*quantites_ingredient.huile_vegetale/100;
  let cellulose_brute:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().cellulose_brute*quantites_ingredient.huile_vegetale/100;
  let matiere_proteine_brute:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().matiere_proteine_brute*quantites_ingredient.huile_vegetale/100;
  let lysine:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().lysine*quantites_ingredient.huile_vegetale/100;
  let methionine:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().methionine*quantites_ingredient.huile_vegetale/100;
  let tryp:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().tryp*quantites_ingredient.huile_vegetale/100;
  let trheo:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().trheo*quantites_ingredient.huile_vegetale/100;
  let calcium:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().calcium*quantites_ingredient.huile_vegetale/100;
  let phosphore_assimiliable:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().phosphore_assimiliable*quantites_ingredient.huile_vegetale/100;
  let taux_d_incorporation:number=this.ing_nut_val.nutriments_HUILE_VEGETALE().taux_d_incorporation*quantites_ingredient.huile_vegetale/100;

  return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};
}

calcul_nutriment_TOURTEAU_COTON(quantites_ingredient:any):any{
 
  let matiere_seche:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().matiere_seche*quantites_ingredient.tourteau_de_coton/100;
  let energie_brute:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().energie_brute*quantites_ingredient.tourteau_de_coton/100;
  let energie_metabolisable:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().energie_metabolisable*quantites_ingredient.tourteau_de_coton/100;
  let extratif_non_azote:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().extratif_non_azote*quantites_ingredient.tourteau_de_coton/100;
  let amidon:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().amidon*quantites_ingredient.tourteau_de_coton/100;
  let sucre:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().sucre*quantites_ingredient.tourteau_de_coton/100;
  let matiere_grasse:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().matiere_grasse*quantites_ingredient.tourteau_de_coton/100;
  let cellulose_brute:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().cellulose_brute*quantites_ingredient.tourteau_de_coton/100;
  let matiere_proteine_brute:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().matiere_proteine_brute*quantites_ingredient.tourteau_de_coton/100;
  let lysine:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().lysine*quantites_ingredient.tourteau_de_coton/100;
  let methionine:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().methionine*quantites_ingredient.tourteau_de_coton/100;
  let tryp:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().tryp*quantites_ingredient.tourteau_de_coton/100;
  let trheo:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().trheo*quantites_ingredient.tourteau_de_coton/100;
  let calcium:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().calcium*quantites_ingredient.tourteau_de_coton/100;
  let phosphore_assimiliable:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().phosphore_assimiliable*quantites_ingredient.tourteau_de_coton/100;
  let taux_d_incorporation:number=this.ing_nut_val.nutriments_TOURTEAUR_COTON().taux_d_incorporation*quantites_ingredient.tourteau_de_coton/100;

  return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};
}


somme_nutriments(ingredient:any):any{

    let matiere_seche:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).matiere_seche+this.calcul_nutriment_HUILE_VEGETALE(ingredient).matiere_seche+this.calcul_nutriment_GRAISSE_A(ingredient).matiere_seche+this.calcul_nutriment_PATATE(ingredient).matiere_seche+this.calcul_nutriment_MANIOC(ingredient).matiere_seche+this.calcul_nutriment_DRECHE(ingredient).matiere_seche+this.calcul_nutriment_BANANE(ingredient).matiere_seche+this.calcul_nutriment_COQUILLE(ingredient).matiere_seche+this.calcul_nutriment_FARINE_D_OS(ingredient).matiere_seche+this.calcul_nutriment_FARINE_DE_SANG(ingredient).matiere_seche+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).matiere_seche+this.calcul_nutriment_SON_RIZ(ingredient).matiere_seche+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).matiere_seche+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).matiere_seche+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).matiere_seche+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).matiere_seche+this.calcul_nutriment_MILLET(ingredient).matiere_seche+this.calcul_nutriment_SORGHO(ingredient).matiere_seche+this.calcul_nutriment_REMOULAGE(ingredient).matiere_seche+this.calcul_nutriment_SON_BLE(ingredient).matiere_seche+this.calcul_nutriment_BLE(ingredient).matiere_seche+this.calcul_nutriment_Mais(ingredient).matiere_seche;
    let energie_brute:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).energie_brute+this.calcul_nutriment_HUILE_VEGETALE(ingredient).energie_brute+this.calcul_nutriment_GRAISSE_A(ingredient).energie_brute+this.calcul_nutriment_PATATE(ingredient).energie_brute+this.calcul_nutriment_MANIOC(ingredient).energie_brute+this.calcul_nutriment_DRECHE(ingredient).energie_brute+this.calcul_nutriment_BANANE(ingredient).energie_brute+this.calcul_nutriment_COQUILLE(ingredient).energie_brute+this.calcul_nutriment_FARINE_D_OS(ingredient).energie_brute+this.calcul_nutriment_FARINE_DE_SANG(ingredient).energie_brute+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).energie_brute+this.calcul_nutriment_SON_RIZ(ingredient).energie_brute+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).energie_brute+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).energie_brute+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).energie_brute+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).energie_brute+this.calcul_nutriment_MILLET(ingredient).energie_brute+this.calcul_nutriment_SORGHO(ingredient).energie_brute+this.calcul_nutriment_REMOULAGE(ingredient).energie_brute+this.calcul_nutriment_SON_BLE(ingredient).energie_brute+this.calcul_nutriment_BLE(ingredient).energie_brute+this.calcul_nutriment_Mais(ingredient).energie_brute;
    let energie_metabolisable:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).energie_metabolisable+this.calcul_nutriment_HUILE_VEGETALE(ingredient).energie_metabolisable+this.calcul_nutriment_GRAISSE_A(ingredient).energie_metabolisable+this.calcul_nutriment_PATATE(ingredient).energie_metabolisable+this.calcul_nutriment_MANIOC(ingredient).energie_metabolisable+this.calcul_nutriment_DRECHE(ingredient).energie_metabolisable+this.calcul_nutriment_BANANE(ingredient).energie_metabolisable+this.calcul_nutriment_COQUILLE(ingredient).energie_metabolisable+this.calcul_nutriment_FARINE_D_OS(ingredient).energie_metabolisable+this.calcul_nutriment_FARINE_DE_SANG(ingredient).energie_metabolisable+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).energie_metabolisable+this.calcul_nutriment_SON_RIZ(ingredient).energie_metabolisable+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).energie_metabolisable+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).energie_metabolisable+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).energie_metabolisable+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).energie_metabolisable+this.calcul_nutriment_MILLET(ingredient).energie_metabolisable+this.calcul_nutriment_SORGHO(ingredient).energie_metabolisable+this.calcul_nutriment_REMOULAGE(ingredient).energie_metabolisable+this.calcul_nutriment_SON_BLE(ingredient).energie_metabolisable+this.calcul_nutriment_BLE(ingredient).energie_metabolisable+this.calcul_nutriment_Mais(ingredient).energie_metabolisable;
    let extratif_non_azote:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).extratif_non_azote+this.calcul_nutriment_HUILE_VEGETALE(ingredient).extratif_non_azote+this.calcul_nutriment_GRAISSE_A(ingredient).extratif_non_azote+this.calcul_nutriment_PATATE(ingredient).extratif_non_azote+this.calcul_nutriment_MANIOC(ingredient).extratif_non_azote+this.calcul_nutriment_DRECHE(ingredient).extratif_non_azote+this.calcul_nutriment_BANANE(ingredient).extratif_non_azote+this.calcul_nutriment_COQUILLE(ingredient).extratif_non_azote+this.calcul_nutriment_FARINE_D_OS(ingredient).extratif_non_azote+this.calcul_nutriment_FARINE_DE_SANG(ingredient).extratif_non_azote+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).extratif_non_azote+this.calcul_nutriment_SON_RIZ(ingredient).extratif_non_azote+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).extratif_non_azote+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).extratif_non_azote+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).extratif_non_azote+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).extratif_non_azote+this.calcul_nutriment_MILLET(ingredient).extratif_non_azote+this.calcul_nutriment_SORGHO(ingredient).extratif_non_azote+this.calcul_nutriment_REMOULAGE(ingredient).extratif_non_azote+this.calcul_nutriment_SON_BLE(ingredient).extratif_non_azote+this.calcul_nutriment_BLE(ingredient).extratif_non_azote+this.calcul_nutriment_Mais(ingredient).extratif_non_azote;  
    let amidon:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).amidon+this.calcul_nutriment_HUILE_VEGETALE(ingredient).amidon+this.calcul_nutriment_GRAISSE_A(ingredient).amidon+this.calcul_nutriment_PATATE(ingredient).amidon+this.calcul_nutriment_MANIOC(ingredient).amidon+this.calcul_nutriment_DRECHE(ingredient).amidon+this.calcul_nutriment_BANANE(ingredient).amidon+this.calcul_nutriment_COQUILLE(ingredient).amidon+this.calcul_nutriment_FARINE_D_OS(ingredient).amidon+this.calcul_nutriment_FARINE_DE_SANG(ingredient).amidon+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).amidon+this.calcul_nutriment_SON_RIZ(ingredient).amidon+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).amidon+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).amidon+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).amidon+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).amidon+this.calcul_nutriment_MILLET(ingredient).amidon+this.calcul_nutriment_SORGHO(ingredient).amidon+this.calcul_nutriment_REMOULAGE(ingredient).amidon+this.calcul_nutriment_SON_BLE(ingredient).amidon+this.calcul_nutriment_BLE(ingredient).amidon+this.calcul_nutriment_Mais(ingredient).amidon;  
    let sucre:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).sucre+this.calcul_nutriment_HUILE_VEGETALE(ingredient).sucre+this.calcul_nutriment_GRAISSE_A(ingredient).sucre+this.calcul_nutriment_PATATE(ingredient).sucre+this.calcul_nutriment_MANIOC(ingredient).sucre+this.calcul_nutriment_DRECHE(ingredient).sucre+this.calcul_nutriment_BANANE(ingredient).sucre+this.calcul_nutriment_COQUILLE(ingredient).sucre+this.calcul_nutriment_FARINE_D_OS(ingredient).sucre+this.calcul_nutriment_FARINE_DE_SANG(ingredient).sucre+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).sucre+this.calcul_nutriment_SON_RIZ(ingredient).sucre+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).sucre+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).sucre+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).sucre+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).sucre+this.calcul_nutriment_MILLET(ingredient).sucre+this.calcul_nutriment_SORGHO(ingredient).sucre+this.calcul_nutriment_REMOULAGE(ingredient).sucre+this.calcul_nutriment_SON_BLE(ingredient).sucre+this.calcul_nutriment_BLE(ingredient).sucre+this.calcul_nutriment_Mais(ingredient).sucre;  
    let matiere_grasse:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).matiere_grasse+this.calcul_nutriment_HUILE_VEGETALE(ingredient).matiere_grasse+this.calcul_nutriment_GRAISSE_A(ingredient).matiere_grasse+this.calcul_nutriment_PATATE(ingredient).matiere_grasse+this.calcul_nutriment_MANIOC(ingredient).matiere_grasse+this.calcul_nutriment_DRECHE(ingredient).matiere_grasse+this.calcul_nutriment_BANANE(ingredient).matiere_grasse+this.calcul_nutriment_COQUILLE(ingredient).matiere_grasse+this.calcul_nutriment_FARINE_D_OS(ingredient).matiere_grasse+this.calcul_nutriment_FARINE_DE_SANG(ingredient).matiere_grasse+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).matiere_grasse+this.calcul_nutriment_SON_RIZ(ingredient).matiere_grasse+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).matiere_grasse+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).matiere_grasse+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).matiere_grasse+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).matiere_grasse+this.calcul_nutriment_MILLET(ingredient).matiere_grasse+this.calcul_nutriment_SORGHO(ingredient).matiere_grasse+this.calcul_nutriment_REMOULAGE(ingredient).matiere_grasse+this.calcul_nutriment_SON_BLE(ingredient).matiere_grasse+this.calcul_nutriment_BLE(ingredient).matiere_grasse+this.calcul_nutriment_Mais(ingredient).matiere_grasse;  
    let cellulose_brute:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).cellulose_brute+this.calcul_nutriment_HUILE_VEGETALE(ingredient).cellulose_brute+this.calcul_nutriment_GRAISSE_A(ingredient).cellulose_brute+this.calcul_nutriment_PATATE(ingredient).cellulose_brute+this.calcul_nutriment_MANIOC(ingredient).cellulose_brute+this.calcul_nutriment_DRECHE(ingredient).cellulose_brute+this.calcul_nutriment_BANANE(ingredient).cellulose_brute+this.calcul_nutriment_COQUILLE(ingredient).cellulose_brute+this.calcul_nutriment_FARINE_D_OS(ingredient).cellulose_brute+this.calcul_nutriment_FARINE_DE_SANG(ingredient).cellulose_brute+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).cellulose_brute+this.calcul_nutriment_SON_RIZ(ingredient).cellulose_brute+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).cellulose_brute+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).cellulose_brute+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).cellulose_brute+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).cellulose_brute+this.calcul_nutriment_MILLET(ingredient).cellulose_brute+this.calcul_nutriment_SORGHO(ingredient).cellulose_brute+this.calcul_nutriment_REMOULAGE(ingredient).cellulose_brute+this.calcul_nutriment_SON_BLE(ingredient).cellulose_brute+this.calcul_nutriment_BLE(ingredient).cellulose_brute+this.calcul_nutriment_Mais(ingredient).cellulose_brute;  
    let matiere_proteine_brute:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).matiere_proteine_brute+this.calcul_nutriment_HUILE_VEGETALE(ingredient).matiere_proteine_brute+this.calcul_nutriment_GRAISSE_A(ingredient).matiere_proteine_brute+this.calcul_nutriment_PATATE(ingredient).matiere_proteine_brute+this.calcul_nutriment_MANIOC(ingredient).matiere_proteine_brute+this.calcul_nutriment_DRECHE(ingredient).matiere_proteine_brute+this.calcul_nutriment_BANANE(ingredient).matiere_proteine_brute+this.calcul_nutriment_COQUILLE(ingredient).matiere_proteine_brute+this.calcul_nutriment_FARINE_D_OS(ingredient).matiere_proteine_brute+this.calcul_nutriment_FARINE_DE_SANG(ingredient).matiere_proteine_brute+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).matiere_proteine_brute+this.calcul_nutriment_SON_RIZ(ingredient).matiere_proteine_brute+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).matiere_proteine_brute+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).matiere_proteine_brute+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).matiere_proteine_brute+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).matiere_proteine_brute+this.calcul_nutriment_MILLET(ingredient).matiere_proteine_brute+this.calcul_nutriment_SORGHO(ingredient).matiere_proteine_brute+this.calcul_nutriment_REMOULAGE(ingredient).matiere_proteine_brute+this.calcul_nutriment_SON_BLE(ingredient).matiere_proteine_brute+this.calcul_nutriment_BLE(ingredient).matiere_proteine_brute+this.calcul_nutriment_Mais(ingredient).matiere_proteine_brute; 
    let lysine:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).lysine+this.calcul_nutriment_HUILE_VEGETALE(ingredient).lysine+this.calcul_nutriment_GRAISSE_A(ingredient).lysine+this.calcul_nutriment_PATATE(ingredient).lysine+this.calcul_nutriment_MANIOC(ingredient).lysine+this.calcul_nutriment_DRECHE(ingredient).lysine+this.calcul_nutriment_BANANE(ingredient).lysine+this.calcul_nutriment_COQUILLE(ingredient).lysine+this.calcul_nutriment_FARINE_D_OS(ingredient).lysine+this.calcul_nutriment_FARINE_DE_SANG(ingredient).lysine+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).lysine+this.calcul_nutriment_SON_RIZ(ingredient).lysine+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).lysine+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).lysine+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).lysine+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).lysine+this.calcul_nutriment_MILLET(ingredient).lysine+this.calcul_nutriment_SORGHO(ingredient).lysine+this.calcul_nutriment_REMOULAGE(ingredient).lysine+this.calcul_nutriment_SON_BLE(ingredient).lysine+this.calcul_nutriment_BLE(ingredient).lysine+this.calcul_nutriment_Mais(ingredient).lysine; 
    let methionine:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).methionine+this.calcul_nutriment_HUILE_VEGETALE(ingredient).methionine+this.calcul_nutriment_GRAISSE_A(ingredient).methionine+this.calcul_nutriment_PATATE(ingredient).methionine+this.calcul_nutriment_MANIOC(ingredient).methionine+this.calcul_nutriment_DRECHE(ingredient).methionine+this.calcul_nutriment_BANANE(ingredient).methionine+this.calcul_nutriment_COQUILLE(ingredient).methionine+this.calcul_nutriment_FARINE_D_OS(ingredient).methionine+this.calcul_nutriment_FARINE_DE_SANG(ingredient).methionine+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).methionine+this.calcul_nutriment_SON_RIZ(ingredient).methionine+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).methionine+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).methionine+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).methionine+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).methionine+this.calcul_nutriment_MILLET(ingredient).methionine+this.calcul_nutriment_SORGHO(ingredient).methionine+this.calcul_nutriment_REMOULAGE(ingredient).methionine+this.calcul_nutriment_SON_BLE(ingredient).methionine+this.calcul_nutriment_BLE(ingredient).methionine+this.calcul_nutriment_Mais(ingredient).methionine; 
    let tryp:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).tryp+this.calcul_nutriment_HUILE_VEGETALE(ingredient).tryp+this.calcul_nutriment_GRAISSE_A(ingredient).tryp+this.calcul_nutriment_PATATE(ingredient).tryp+this.calcul_nutriment_MANIOC(ingredient).tryp+this.calcul_nutriment_DRECHE(ingredient).tryp+this.calcul_nutriment_BANANE(ingredient).tryp+this.calcul_nutriment_COQUILLE(ingredient).tryp+this.calcul_nutriment_FARINE_D_OS(ingredient).tryp+this.calcul_nutriment_FARINE_DE_SANG(ingredient).tryp+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).tryp+this.calcul_nutriment_SON_RIZ(ingredient).tryp+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).tryp+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).tryp+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).tryp+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).tryp+this.calcul_nutriment_MILLET(ingredient).tryp+this.calcul_nutriment_SORGHO(ingredient).tryp+this.calcul_nutriment_REMOULAGE(ingredient).tryp+this.calcul_nutriment_SON_BLE(ingredient).tryp+this.calcul_nutriment_BLE(ingredient).tryp+this.calcul_nutriment_Mais(ingredient).tryp; 
    let trheo:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).trheo+this.calcul_nutriment_HUILE_VEGETALE(ingredient).trheo+this.calcul_nutriment_GRAISSE_A(ingredient).trheo+this.calcul_nutriment_PATATE(ingredient).trheo+this.calcul_nutriment_MANIOC(ingredient).trheo+this.calcul_nutriment_DRECHE(ingredient).trheo+this.calcul_nutriment_BANANE(ingredient).trheo+this.calcul_nutriment_COQUILLE(ingredient).trheo+this.calcul_nutriment_FARINE_D_OS(ingredient).trheo+this.calcul_nutriment_FARINE_DE_SANG(ingredient).trheo+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).trheo+this.calcul_nutriment_SON_RIZ(ingredient).trheo+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).trheo+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).trheo+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).trheo+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).trheo+this.calcul_nutriment_MILLET(ingredient).trheo+this.calcul_nutriment_SORGHO(ingredient).trheo+this.calcul_nutriment_REMOULAGE(ingredient).trheo+this.calcul_nutriment_SON_BLE(ingredient).trheo+this.calcul_nutriment_BLE(ingredient).trheo+this.calcul_nutriment_Mais(ingredient).trheo; 
    let calcium:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).calcium+this.calcul_nutriment_HUILE_VEGETALE(ingredient).calcium+this.calcul_nutriment_GRAISSE_A(ingredient).calcium+this.calcul_nutriment_PATATE(ingredient).calcium+this.calcul_nutriment_MANIOC(ingredient).calcium+this.calcul_nutriment_DRECHE(ingredient).calcium+this.calcul_nutriment_BANANE(ingredient).calcium+this.calcul_nutriment_COQUILLE(ingredient).calcium+this.calcul_nutriment_FARINE_D_OS(ingredient).calcium+this.calcul_nutriment_FARINE_DE_SANG(ingredient).calcium+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).calcium+this.calcul_nutriment_SON_RIZ(ingredient).calcium+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).calcium+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).calcium+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).calcium+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).calcium+this.calcul_nutriment_MILLET(ingredient).calcium+this.calcul_nutriment_SORGHO(ingredient).calcium+this.calcul_nutriment_REMOULAGE(ingredient).calcium+this.calcul_nutriment_SON_BLE(ingredient).calcium+this.calcul_nutriment_BLE(ingredient).calcium+this.calcul_nutriment_Mais(ingredient).calcium; 
    let phosphore_assimiliable:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).phosphore_assimiliable+this.calcul_nutriment_HUILE_VEGETALE(ingredient).phosphore_assimiliable+this.calcul_nutriment_GRAISSE_A(ingredient).phosphore_assimiliable+this.calcul_nutriment_PATATE(ingredient).phosphore_assimiliable+this.calcul_nutriment_MANIOC(ingredient).phosphore_assimiliable+this.calcul_nutriment_DRECHE(ingredient).phosphore_assimiliable+this.calcul_nutriment_BANANE(ingredient).phosphore_assimiliable+this.calcul_nutriment_COQUILLE(ingredient).phosphore_assimiliable+this.calcul_nutriment_FARINE_D_OS(ingredient).phosphore_assimiliable+this.calcul_nutriment_FARINE_DE_SANG(ingredient).phosphore_assimiliable+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).phosphore_assimiliable+this.calcul_nutriment_SON_RIZ(ingredient).phosphore_assimiliable+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).phosphore_assimiliable+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).phosphore_assimiliable+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).phosphore_assimiliable+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).phosphore_assimiliable+this.calcul_nutriment_MILLET(ingredient).phosphore_assimiliable+this.calcul_nutriment_SORGHO(ingredient).phosphore_assimiliable+this.calcul_nutriment_REMOULAGE(ingredient).phosphore_assimiliable+this.calcul_nutriment_SON_BLE(ingredient).phosphore_assimiliable+this.calcul_nutriment_BLE(ingredient).phosphore_assimiliable+this.calcul_nutriment_Mais(ingredient).phosphore_assimiliable; 
    let taux_d_incorporation:number=this.calcul_nutriment_TOURTEAU_COTON(ingredient).taux_d_incorporation+this.calcul_nutriment_HUILE_VEGETALE(ingredient).taux_d_incorporation+this.calcul_nutriment_GRAISSE_A(ingredient).taux_d_incorporation+this.calcul_nutriment_PATATE(ingredient).taux_d_incorporation+this.calcul_nutriment_MANIOC(ingredient).taux_d_incorporation+this.calcul_nutriment_DRECHE(ingredient).taux_d_incorporation+this.calcul_nutriment_BANANE(ingredient).taux_d_incorporation+this.calcul_nutriment_COQUILLE(ingredient).taux_d_incorporation+this.calcul_nutriment_FARINE_D_OS(ingredient).taux_d_incorporation+this.calcul_nutriment_FARINE_DE_SANG(ingredient).taux_d_incorporation+this.calcul_nutriment_FARINE_DE_POISSON(ingredient).taux_d_incorporation+this.calcul_nutriment_SON_RIZ(ingredient).taux_d_incorporation+this.calcul_nutriment_TOURTEAUX_D_ARRACHIDE(ingredient).taux_d_incorporation+this.calcul_nutriment_TOURTEAUX_DE_PALMISTE(ingredient).taux_d_incorporation+this.calcul_nutriment_TOURTEAUX_DE_COPRA(ingredient).taux_d_incorporation+this.calcul_nutriment_TOURTEAUX_DE_SOJA(ingredient).taux_d_incorporation+this.calcul_nutriment_MILLET(ingredient).taux_d_incorporation+this.calcul_nutriment_SORGHO(ingredient).taux_d_incorporation+this.calcul_nutriment_REMOULAGE(ingredient).taux_d_incorporation+this.calcul_nutriment_SON_BLE(ingredient).taux_d_incorporation+this.calcul_nutriment_BLE(ingredient).taux_d_incorporation+this.calcul_nutriment_Mais(ingredient).taux_d_incorporation;
    return {matiere_seche,energie_brute,energie_metabolisable,extratif_non_azote,amidon,sucre,matiere_grasse,cellulose_brute,matiere_proteine_brute,lysine,methionine,tryp,trheo,calcium,phosphore_assimiliable,taux_d_incorporation};

  }



}
