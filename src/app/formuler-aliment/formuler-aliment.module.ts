import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormulerAlimentPage } from './formuler-aliment.page';

const routes: Routes = [
  {
    path: '',
    component: FormulerAlimentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormulerAlimentPage]
})
export class FormulerAlimentPageModule {}
