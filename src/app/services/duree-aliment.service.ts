import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DureeAlimentService {

  constructor() { }

  public nbrJour(nbrSujet:number, qteTotalAliment: number, pharseProjet: string):any{

    // conversion de la quantité d'aliment en gramme
    let qteG= qteTotalAliment*1000;
    // @param qte consommé par un sujet durant toute la période 
    function infosNbJr(qtePharse:number):string{
      // qte d'aliment nécessaire pour toute la période de démarrage pour tout les sujets 
      let qte=qtePharse*nbrSujet;
      // nb jour
      let nbJour= qteG/qte;

      let nbJourStringSplit= String(nbJour).split('.');
      // si le nombre de jour est du type float
      if(nbJourStringSplit.length==2){
        if(Number(nbJourStringSplit[0])<1){
            
          if(Number(nbJourStringSplit[0])>=0.5){
            return 'Démie journée';
          } else{
              return 'inférieur à une démie journée';
            }
        } else{

          if(Number(nbJourStringSplit[1])>=0.5){
            return Number(nbJourStringSplit[0])+" jour(s) et démi";
          } else{
            return Number(nbJourStringSplit[0])+" jour(s)";
          }

        }
      } else{
          if(Number(nbJourStringSplit[0])<1){
            
            if(Number(nbJourStringSplit[0])>=0.5){
              return 'Démie journée';
            } else{
              return 'inférieur à une démie journée';
            }

          } else{
            return Number(nbJourStringSplit[0])+" jours";
          }
      }

    }
    if(pharseProjet=="Démarrage"){

      // qte total consommée par un sujet pendant toute la période de démarrage 
      let qteOne = 980/21;
      
      return infosNbJr(qteOne);

    } else if(pharseProjet=="Prédémarrage"){

      let qteOne= 840/7;
      return infosNbJr(qteOne);
    
    } else{
    
      let qteOne= 1050/17;
      return infosNbJr(qteOne);
    
    }

  }
}
