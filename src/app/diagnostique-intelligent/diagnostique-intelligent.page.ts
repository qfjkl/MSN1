import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnostique-intelligent',
  templateUrl: './diagnostique-intelligent.page.html',
  styleUrls: ['./diagnostique-intelligent.page.scss'],
})
export class DiagnostiqueIntelligentPage implements OnInit {

  public myphoto:any="assets/img/imagesNOQQPK6B.jpg";
  public diagnostique:string='';
  constructor() { }

  ngOnInit() {
  }

}
