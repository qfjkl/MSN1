import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public time;
  url:string="assets/img/logo1.png";

  constructor(public router: Router
    ) {
    const data= {
      nom: "login",
      pwd: "je  suis"
    };
    this.time=0;
    let interval=setInterval(()=>{
      this.time++;        
      if(this.time%5==0){
        this.router.navigate(['inscript-connex']);
        clearInterval(interval);
        // clearInterval(intervalId)
                  } 
      },1000);
    }

}
