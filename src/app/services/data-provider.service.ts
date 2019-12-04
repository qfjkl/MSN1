import { Injectable } from '@angular/core';
// import { PostProviderService } from './post-provider.service';



@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

	// public bool;
	// public dataRsult= {
	// 	erreur:null,
	// 	succes:null
	// };

	// constructor (public postPrvd : PostProviderService){

	// }

	// Datas(body,urlServer){

		
		// this.postPrvd.postData(body,urlServer).subscribe(
		// 	data =>{
	    //         let error = [];
	    //         if(data.Erreur){

	    //           	let dataServer = data.Erreur.replace(/<p>/g,'');
	    //           	let errorRequest = dataServer.replace(/<\/p>/g,'|');
	    //           	let valArray = errorRequest.split('|');
	              	
	    //             valArray.forEach($value =>{
	                  
	    //               ($value.length!=1)?error.push($value):'';
	                
	    //             });

	    //             this.bool = true;
	    //           //   this.dataRsult.erreur = error;

	    //         	 // console.log(this.dataRsult.erreur);
	    //         }
	    //         else{

	    //         	this.bool = false;
	    //             this.dataRsult.succes = data.succes;
	                
	    //             console.log(this.dataRsult.succes);
	            
	    //         }
        //     	// this.appCtrl.getRootNav().setRoot(LocalisationPage);
        //   	});
        //   // return error;

	// }

}
