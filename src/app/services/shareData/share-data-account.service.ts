import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataAccountService {
  data={
    app:'MSNUTRITION',
    login: undefined,
    pwd: undefined,
    categorie: undefined,
    id_user: undefined
  };
  private dataSource= new BehaviorSubject({data:this.data});
  currentData= this.dataSource.asObservable();
  
  constructor() { 

  }

  changeData(data){
    this.dataSource.next(data);

  }

}
