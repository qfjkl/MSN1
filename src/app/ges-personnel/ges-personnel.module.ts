import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GesPersonnelPage } from './ges-personnel.page';

const routes: Routes = [
  {
    path: '',
    component: GesPersonnelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GesPersonnelPage]
})
export class GesPersonnelPageModule {}
