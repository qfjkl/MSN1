import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiagnostiqueIntelligentPage } from './diagnostique-intelligent.page';

const routes: Routes = [
  {
    path: '',
    component: DiagnostiqueIntelligentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiagnostiqueIntelligentPage]
})
export class DiagnostiqueIntelligentPageModule {}
