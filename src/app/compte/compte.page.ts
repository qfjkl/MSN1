import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareDataAccountService } from '../services/shareData/share-data-account.service';



@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {
  public logo:string="assets/img/logo.png";  
  public nameUser:any;
  public passwordUser:any;	
  public categorieUser:any;
  public imgPoulet= "assets/img/thOOSSQG9P.jpg"; 
  public id_utilisateur:any;

  constructor(private menu : MenuController,
              public router: Router,
              private route: ActivatedRoute,
              public appData: ShareDataAccountService
      ) { 
      
      this.appData.currentData.subscribe((data:any)=>{ 
        if(data.login!=undefined){
          this.nameUser= data.login;
          this.passwordUser= data.pwd;
          this.categorieUser= data.categorie;
          console.log(data);
        } else{

          // this.router.navigate(['inscript-connex']);
          console.log('login is undefined');
        }

      });
      // console.log(this.nameUser, this.categorieUser);
    }

  ngOnInit() {

  }
  openEnd() {
    this.menu.open('first');
    console.log('ok');
  }
}
