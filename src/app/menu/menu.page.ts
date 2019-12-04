import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  // rootPage:any s= HomePage;

  public pages: Array<{ title: string, component: any }>;
  public user;
  public categorieUser;
  public id_utilisateur;
  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

}
