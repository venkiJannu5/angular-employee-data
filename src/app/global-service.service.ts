import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'; 
import { HttpParams, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  private modelMapping: any = {};
  constructor(public http: HttpClient) { 
  	this.setMapping();
  }

  setMapping(){
  	this.modelMapping={
      'displayemp': {server:'API',method:'emp/allemps'},
      'displaysal': {server:'API',method:'emp/allempsal'}
      
  	}
  }
  getApiUrl(action){
  	return environment[this.modelMapping[action].server] + this.modelMapping[action].method;
  }
  get(params):Observable<any>{
  	let URL = this.getApiUrl(params.service);
	
	return this.http.get(URL, params.data)
			.map(response=>{
				return response
			})
			.catch((error: any) => Observable.throw(error || 'Server error'))

  }
  post(params):Observable<any>{
    console.log(params)
  	let URL = this.getApiUrl(params.service);
  
  	return this.http.post(URL, params.data)
			.map(response => {
				return response;
			})
			.catch((error: any) => Observable.throw(error || "Server error"));

  }
  put(params):Observable<any>{
    let URL = this.getApiUrl(params.service);
    return this.http.put(URL,params.data)
    .map(response =>{
      return response;
    })
    .catch((error:any)=>Observable.throw(error || "Server error"));
  }
}
