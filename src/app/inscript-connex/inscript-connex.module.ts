import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InscriptConnexPage } from './inscript-connex.page';
// import { SignInPage } from '../signUp_signIn/sign-in/sign-in.page';
// import { SignUpPage } from '../signUp_signIn/sign-up/sign-up.page';


const routes: Routes = [
  {
    path: '',
    component: InscriptConnexPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InscriptConnexPage]
})
export class InscriptConnexPageModule {}
