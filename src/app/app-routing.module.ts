import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'archive', loadChildren: './archive/archive.module#ArchivePageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'inscript-connex', loadChildren: './inscript-connex/inscript-connex.module#InscriptConnexPageModule'},
  { path: 'sign-up', loadChildren: './signUp_signIn/sign-up/sign-up.module#SignUpPageModule'},
  { path: 'sign-in', loadChildren: './signUp_signIn/sign-in/sign-in.module#SignInPageModule'},
  { path: 'about',loadChildren: './about/about.module#AboutPageModule'},
  { 
    path: 'compte',
    loadChildren: './compte/compte.module#ComptePageModule'},
  {
    path: 'compte/projet',
    loadChildren: './projet/projet.module#ProjetPageModule' 
  },



  { path: 'choisirIngredient', loadChildren: './choisir_ingredient/choisirIngredient.module#choisirIngredientPageModule' },
  { path: 'compte/parametre', loadChildren: './parametre/parametre.module#ParametrePageModule' },
  { path: 'compte/ges-personnel', loadChildren: './ges-personnel/ges-personnel.module#GesPersonnelPageModule' },
  { path: 'compte/rapport-personnel', loadChildren: './rapport-personnel/rapport-personnel.module#RapportPersonnelPageModule' },
  { path: 'compte/diagnostique', loadChildren: './diagnostique/diagnostique.module#DiagnostiquePageModule' },
  { path: 'compte/choisirIngredient', loadChildren: './choisir_ingredient/choisirIngredient.module#choisirIngredientPageModule' },
  { path: 'suggestion', loadChildren: './suggestion/suggestion.module#SuggestionPageModule' },
  { path: 'payement', loadChildren: './payement/payement.module#PayementPageModule' },
  { path: 'boutique', loadChildren: './boutique/boutique.module#BoutiquePageModule' },
  { path: 'a-propos', loadChildren: './a-propos/a-propos.module#AProposPageModule' },
  { path: 'aide', loadChildren: './aide/aide.module#AidePageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'deconnexion', loadChildren: './deconnexion/deconnexion.module#DeconnexionPageModule' },
  { path: 'loadprojet', loadChildren: './loadprojet/loadprojet.module#LoadprojetPageModule' },
  { path: 'compte/formuler-aliment', loadChildren: './formuler-aliment/formuler-aliment.module#FormulerAlimentPageModule' },
  { path: 'compte/diagnostique-intelligent', loadChildren: './diagnostique-intelligent/diagnostique-intelligent.module#DiagnostiqueIntelligentPageModule' },
  { path: 'quantite-projet', loadChildren: './quantite-projet/quantite-projet.module#QuantiteProjetPageModule' },
  { path: 'rapport-composition', loadChildren: './rapport-composition/rapport-composition.module#RapportCompositionPageModule' },
  { path: 'geolocalisation', loadChildren: './geolocalisation/geolocalisation.module#GeolocalisationPageModule' },
  { path: 'localiser-projet', loadChildren: './localiser-projet/localiser-projet.module#LocaliserProjetPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
