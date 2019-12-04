import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LocaliserProjetPage } from './localiser-projet.page';

const routes: Routes = [
  {
    path: '',
    component: LocaliserProjetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LocaliserProjetPage]
})
export class LocaliserProjetPageModule {}
