import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RapportCompositionPage } from './rapport-composition.page';

const routes: Routes = [
  {
    path: '',
    component: RapportCompositionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RapportCompositionPage]
})
export class RapportCompositionPageModule {}
