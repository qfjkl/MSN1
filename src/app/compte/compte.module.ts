import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComptePage } from './compte.page';

const routes: Routes = [
  {
    path: '',
    component: ComptePage
    // children: [
    //   {
    //     path: 'choisirIngredient',
    //     loadChildren:'../choisir_ingredient/choisirIngredient.module#choisirIngredientPageModule',
    //     // children: [
    //     //   {
    //     //     path: '',
    //     //     loadChildren: '../choisir_ingredient/choisirIngredient.module#choisirIngredientPageModule'
    //     //   }
    //     // ]
    //   }
    // ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComptePage]
})
export class ComptePageModule {}
