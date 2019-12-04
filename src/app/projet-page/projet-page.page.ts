import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-projet-page',
  templateUrl: './projet-page.page.html',
  styleUrls: ['./projet-page.page.scss'],
})
export class loadProjetPage implements OnInit {

  // public projet;
  // public pet="Rapport";
  // public name="settings";
  // public color="primary";
  // public infosProjet:any={
  //     pharse: null,
  //     sujet: null,
  //     nombre: null
  // };

  constructor(private router: Route) {

   }
  
  ngOnInit() {
  }

}
