import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private  url="http://localhost:8686/consulter";

  constructor(private http :HttpClient) {

  }

  public getAll(){
    var  headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    return this.http.get(this.url+"/getCompte");
  }
  public getListeOperation(){
    var  headers = {'Content-Type': 'application/json', 'charset': 'utf-8'};
    return this.http.get(this.url+"/listeOperation");
  }
  public getAllClient(){

    var  headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    // @ts-ignore
    return this.http.get(this.url+"/getClient");
  }

  // @ts-ignore
  public consulter(e){

    var  headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    // @ts-ignore
    return this.http.post(this.url+"/consulterCompte",e);
  }
}
