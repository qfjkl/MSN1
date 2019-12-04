import { Injectable } from '@angular/core';
// import { Http, Headers  } from '@angular/http';
// import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostProviderService {

	configUrl= 'assets/config.json';
	constructor(private http: HttpClient){

	}

	// // public server= "http://192.168.43.200/MSN/index.php/";
	public server= "http://127.0.0.1/MSN/index.php/";

	// constructor (){

	// }

	postData(url:string,body:any){
		// let type="application/json charset=UTF-8";
		// let headers= new Headers({'Content-Type': type});
		// let options= new RequestOption({'headers': headers});

		// return this.http.post(this.server + file, JSON.stringify(body), {})
		// .map(res => res.json());
		// return this.http.post(this.server + file, JSON.stringify(body), {}).map(res => res.json());
		// return JSON.stringify(body);
		const httpOptions = {
			headers: new HttpHeaders({
			  'Content-Type':  'application/json'
			})
		  };
		let data:any;
		return this.http.post(this.server + url,JSON.stringify(body)).toPromise()
		  
		// .toPromise()
		// 	.then((res:any)=>{
		// 		console.log(JSON.stringify(res.json));
		// 	  })
		// 	.catch((error:any)=> error);
	}

	showConfig(){
		// this.postData().subscribe((data)=>{
		// 	console.log(data["heroesUrl"],data["textfile"]);
		// });
	}
}
