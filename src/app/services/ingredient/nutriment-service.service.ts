import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ingredientNutVal {

  constructor() { }


  /*********************************************************************************************************************************************************************************************
  **********************************************************************************************************************************************************************************************
  * *               listes des méthodes qui gèrent la quantitée des nutriments
  * *                             contenues dans chaque ingrédient
  /*********************************************************************************************************************************************************************************************
  **********************************************************************************************************************************************************************************************/
  nutriments_MAIS():any{
    return {matiere_seche:86,energie_brute:3860,energie_metabolisable:3250,extratif_non_azote:69,amidon:60.5,sucre:2.1,matiere_grasse:4.2,cellulose_brute:2.2,matiere_proteine_brute:9,lysine:0.25,methionine:0.19,tryp:0.06,trheo:0.32,calcium:0.01,phosphore_assimiliable:0.27,taux_d_incorporation:70};       
  }
  nutriments_BLE(){
  return {matiere_seche:89,energie_brute:3086,energie_metabolisable:3220,extratif_non_azote:0,amidon:0,sucre:0,matiere_grasse:0,cellulose_brute:0,matiere_proteine_brute:12.5,lysine:0,methionine:0,tryp:0,trheo:0,calcium:0.05,phosphore_assimiliable:0.20,taux_d_incorporation:30}; 
  }
  nutriments_SON_BLE(){
  return {matiere_seche:87,energie_brute:3950,energie_metabolisable:1470,extratif_non_azote:52.8,amidon:16.5,sucre:4.7,matiere_grasse:4,cellulose_brute:9.6,matiere_proteine_brute:15,lysine:0.56,methionine:0.20,tryp:0.24,trheo:0.54,calcium:0.13,phosphore_assimiliable:0.60,taux_d_incorporation:10};
  }
  nutriments_REMOULAGE(){
  return {matiere_seche:87,energie_brute:3950,energie_metabolisable:1470,extratif_non_azote:52.8,amidon:16.5,sucre:4.7,matiere_grasse:4,cellulose_brute:9.6,matiere_proteine_brute:15,lysine:0.56,methionine:0.20,tryp:0.24,trheo:0.54,calcium:0.13,phosphore_assimiliable:0.60,taux_d_incorporation:10};      
  }
  nutriments_SORGHO(){
    return {matiere_seche:86,energie_brute:3820,energie_metabolisable:3060,extratif_non_azote:68.3,amidon:56.8,sucre:0,matiere_grasse:3,cellulose_brute:3,matiere_proteine_brute:10,lysine:0.23,methionine:0.16,tryp:0.09,trheo:0.33,calcium:0.04,phosphore_assimiliable:0.05,taux_d_incorporation:40};
  }   
  nutriments_MILLET(){
  return {matiere_seche:88,energie_brute:3950,energie_metabolisable:2870,extratif_non_azote:59.8,amidon:52.1,sucre:1.3,matiere_grasse:3.7,cellulose_brute:0.3,matiere_proteine_brute:11.5,lysine:0.19,methionine:0.49,tryp:0.16,trheo:0.44,calcium:0.04,phosphore_assimiliable:0.08,taux_d_incorporation:30};      
  }
  nutriments_TOURTEAUX_DE_SOJA(){
  return {matiere_seche:88,energie_brute:4150,energie_metabolisable:2250,extratif_non_azote:30.3,amidon:3.3,sucre:10,matiere_grasse:1.8,cellulose_brute:7.4,matiere_proteine_brute:42.5,lysine:2.70,methionine:0.59,tryp:0.57,trheo:1.67,calcium:0.30,phosphore_assimiliable:0.10,taux_d_incorporation:15};      
  }
  nutriments_TOURTEAUX_DE_PALMISTE(){
  return {matiere_seche:90,energie_brute:4030,energie_metabolisable:1240,extratif_non_azote:50.9,amidon:3,sucre:1,matiere_grasse:1.7,cellulose_brute:15,matiere_proteine_brute:18.5,lysine:0.66,methionine:0.32,tryp:0.19,trheo:0.61,calcium:0.28,phosphore_assimiliable:0.09,taux_d_incorporation:7.5};
  }
  nutriments_TOURTEAUX_DE_COPRA(){
  return {matiere_seche:90,energie_brute:3850,energie_metabolisable:2800,extratif_non_azote:43.9,amidon:0,sucre:9,matiere_grasse:1.6,cellulose_brute:16,matiere_proteine_brute:21.5,lysine:0.66,methionine:0.32,tryp:0.19,trheo:0.67,calcium:0.18,phosphore_assimiliable:0.09,taux_d_incorporation:10};
  }
  nutriments_TOURTEAUX_D_ARRACHIDE(){
  return {matiere_seche:91,energie_brute:4360,energie_metabolisable:2850,extratif_non_azote:25,amidon:6.9,sucre:0,matiere_grasse:1.4,cellulose_brute:10,matiere_proteine_brute:49.2,lysine:1.70,methionine:0.49,tryp:0.49,trheo:1.33,calcium:0.16,phosphore_assimiliable:0.06,taux_d_incorporation:15};      
  }
  nutriments_RIZ_PADDY(){
  return {matiere_seche:87,energie_brute:3700,energie_metabolisable:3750,extratif_non_azote:63.7,amidon:41.8,sucre:4,matiere_grasse:2.1,cellulose_brute:8.6,matiere_proteine_brute:8,lysine:0.28,methionine:0.16,tryp:0.09,trheo:0.28,calcium:0.05,phosphore_assimiliable:0.10,taux_d_incorporation:15};
  }
  nutriments_SON_RIZ(){
  return {matiere_seche:90,energie_brute:4170,energie_metabolisable:2800,extratif_non_azote:41.1,amidon:0,sucre:0,matiere_grasse:13.8,cellulose_brute:11.6,matiere_proteine_brute:12.8,lysine:0.56,methionine:0.22,tryp:0.13,trheo:0.44,calcium:0.07,phosphore_assimiliable:0.14,taux_d_incorporation:15};      
  }
  nutriments_FARINE_DE_POISSON(){
  return {matiere_seche:92,energie_brute:4530,energie_metabolisable:3150,extratif_non_azote:0,amidon:0,sucre:0,matiere_grasse:0,cellulose_brute:9.2,matiere_proteine_brute:59.3,lysine:4.41,methionine:1.62,tryp:0.63,trheo:2.55,calcium:16.20,phosphore_assimiliable:2.90,taux_d_incorporation:10};      
  }
  nutriments_FARINE_DE_SANG(){
  return {matiere_seche:91,energie_brute:0,energie_metabolisable:1945,extratif_non_azote:0,amidon:0,sucre:0,matiere_grasse:0,cellulose_brute:0,matiere_proteine_brute:70,lysine:0,methionine:0,tryp:0,trheo:0,calcium:0.28,phosphore_assimiliable:0.22,taux_d_incorporation:5};     
  }
  nutriments_FARINE_D_OS(){
  return {matiere_seche:0,energie_brute:0,energie_metabolisable:0,extratif_non_azote:0,amidon:0,sucre:0,matiere_grasse:0,cellulose_brute:0,matiere_proteine_brute:0,lysine:0,methionine:0,tryp:0,trheo:0,calcium:30,phosphore_assimiliable:4.5,taux_d_incorporation:10};      
  }
  nutriments_COQUILLE(){
  return {matiere_seche:0,energie_brute:0,energie_metabolisable:0,extratif_non_azote:0,amidon:0,sucre:0,matiere_grasse:0,cellulose_brute:0,matiere_proteine_brute:0,lysine:0,methionine:0,tryp:0,trheo:0,calcium:38,phosphore_assimiliable:0.05,taux_d_incorporation:4};      
  }
  nutriments_BANANE(){
  return {matiere_seche:22,energie_brute:900,energie_metabolisable:750,extratif_non_azote:19.2,amidon:1.5,sucre:14.8,matiere_grasse:0.2,cellulose_brute:9.8,matiere_proteine_brute:1.3,lysine:0.06,methionine:0.01,tryp:0.05,trheo:0.01,calcium:0,phosphore_assimiliable:0,taux_d_incorporation:10};      
  }
  nutriments_DRECHE(){
  return {matiere_seche:87,energie_brute:0,energie_metabolisable:2435,extratif_non_azote:0,amidon:0,sucre:0,matiere_grasse:1.4,cellulose_brute:0,matiere_proteine_brute:25,lysine:0.87,methionine:0.48,tryp:0.80,trheo:1,calcium:0.29,phosphore_assimiliable:0.40,taux_d_incorporation:17.5};      
  }
  nutriments_MANIOC(){
  return {matiere_seche:87,energie_brute:3560,energie_metabolisable:2860,extratif_non_azote:78,amidon:69.5,sucre:3.5,matiere_grasse:0.7,cellulose_brute:3,matiere_proteine_brute:2.2,lysine:0.08,methionine:0.03,tryp:0.02,trheo:0.06,calcium:0.20,phosphore_assimiliable:0.05,taux_d_incorporation:25};      
  }
  nutriments_PATATE(){
  return {matiere_seche:33,energie_brute:1400,energie_metabolisable:1200,extratif_non_azote:29.2,amidon:22.3,sucre:3,matiere_grasse:0.4,cellulose_brute:1.1,matiere_proteine_brute:1.6,lysine:0.06,methionine:0.02,tryp:0.03,trheo:0.09,calcium:0.04,phosphore_assimiliable:0.02,taux_d_incorporation:0};      
  }
  nutriments_GRAISSE_A(){
  return {matiere_seche:99,energie_brute:9370,energie_metabolisable:7900,extratif_non_azote:0,amidon:0,sucre:0,matiere_grasse:98.4,cellulose_brute:0,matiere_proteine_brute:0,lysine:0,methionine:0,tryp:0,trheo:0,calcium:0,phosphore_assimiliable:0,taux_d_incorporation:1};    
  }
  nutriments_HUILE_VEGETALE(){
  return {matiere_seche:99,energie_brute:3450,energie_metabolisable:8500,extratif_non_azote:0,amidon:0,sucre:0,matiere_grasse:98.7,cellulose_brute:0,matiere_proteine_brute:0,lysine:0,methionine:0,tryp:0,trheo:0,calcium:0,phosphore_assimiliable:0,taux_d_incorporation:1};      
  }
  nutriments_TOURTEAUR_COTON(){
  return {matiere_seche:91,energie_brute:4280,energie_metabolisable:1945,extratif_non_azote:29.1,amidon:0,sucre:0,matiere_grasse:1.4,cellulose_brute:13,matiere_proteine_brute:41,lysine:1.72,methionine:0.59,tryp:0.49,trheo:1.39,calcium:0.20,phosphore_assimiliable:0.10,taux_d_incorporation:7.5};      
  }

}
