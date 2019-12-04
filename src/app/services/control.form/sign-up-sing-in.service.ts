import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Control {

  public error:boolean;
  constructor() { }
  
  isEmpty(items:object):any{
      for(let item in items){
        if(items[item]==null || items[item]==""){
          this.error= true;
          break; 
        } else{
          this.error= false;          
        }
      }
      return {msg:this.error, data: items};
  }
}
