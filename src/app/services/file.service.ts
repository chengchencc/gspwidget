import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class FileService {

  constructor(private httpClient: HttpClient,private http:Http) { }


  public getFiles(id:string): string {
    
            return "uuid";
         }

  public getPageInfos(){
    return this.http.get("http://localhost:9002/mvc/PageController/ApiTest")
    .map(res=>res.text());

   // return;
    // this.http.get("http://localhost:9002/mvc/PageController/ApiTest")
    // .toPromise()
    // .then(response => console.log( response.json().data))
    // .catch(this.handleError);
    // .subscribe(data=>{

    //   console.log(data);

    // })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
